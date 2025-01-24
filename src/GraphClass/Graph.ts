import UserChoiceNode from "./UserChoiceNode";
import { ChoiceType, ResultType } from "../types";

export default class Graph {
  adjacencyList: Record<string, UserChoiceNode[]>;
  dataSet: string[];
  loserPool: string[];
  gamePointerStarter: number;
  gamePointerComparer: number;
  choiceASetter: React.Dispatch<React.SetStateAction<string>>;
  choiceBSetter: React.Dispatch<React.SetStateAction<string>>;
  isContinue: boolean;
  setIsContinue: React.Dispatch<React.SetStateAction<boolean>>;
  setResult: React.Dispatch<React.SetStateAction<ResultType | []>>;
  constructor(
    choiceASetter: React.Dispatch<React.SetStateAction<string>>,
    choiceBSetter: React.Dispatch<React.SetStateAction<string>>,
    isContinue: boolean,
    setIsContinue: React.Dispatch<React.SetStateAction<boolean>>,
    setResult: React.Dispatch<React.SetStateAction<ResultType | []>>
  ) {
    this.adjacencyList = {};
    this.dataSet = [];
    this.loserPool = [];
    this.gamePointerStarter = 0;
    this.gamePointerComparer = 1;
    this.choiceASetter = choiceASetter;
    this.choiceBSetter = choiceBSetter;
    this.isContinue = isContinue;
    this.setIsContinue = setIsContinue;
    this.setResult = setResult;
  }

  addNode(choiceName: string) {
    const node = new UserChoiceNode(choiceName);
    this.adjacencyList[choiceName] = [node];
  }

  setUpNodes(userChoices: ChoiceType[]) {
    userChoices.forEach((element) => {
      this.addNode(element.choiceName);
    });
  }
  addEdge(src: string, dst: string) {
    const sourceList = this.adjacencyList[src];
    const dstNode = this.adjacencyList[dst][0];
    sourceList.push(dstNode);
  }

  checkEdge(src: string, dst: string): boolean {
    const sourceList = this.adjacencyList[src];
    const dstNode = this.adjacencyList[dst][0];
    for (let index = 0; index < sourceList.length; index++) {
      if (sourceList[index].choiceName === dstNode.choiceName) {
        return true;
      }
    }
    return false;
  }

  gameSetup() {
    this.dataSet = Object.keys(this.adjacencyList);
    this.choiceASetter(this.dataSet[this.gamePointerStarter]);
    this.choiceBSetter(this.dataSet[this.gamePointerComparer]);
  }

  gameContinue(winnerChoice: string, loserChoice: string) {
    if (!this.isContinue) {
      return;
    }

    //Read the input and do the moving and scoring immediately but not yet set the choice
    this.gameMovePosition(winnerChoice);

    //Apply the win and lose points
    this.gameProcessResult(winnerChoice, loserChoice);

    while (true) {
      //The index reaches the end of the dataSet
      if (this.gamePointerComparer > this.dataSet.length - 1) {
        //Filter the current winner out of the game
        this.dataSet = this.dataSet.filter(
          (e) => e != this.dataSet[this.gamePointerStarter]
        );

        if (this.dataSet.length <= 1) {
          this.gamePrintResult();
          this.setResult(this.gameGetResult());
          this.setIsContinue(false);
          return;
        }

        //reset loserPool to empty to prevent loop
        this.loserPool = [];
        this.gamePointerStarter = 0;
        this.gamePointerComparer = 1;
      }
      //Check previous encounter;
      if (!this.gamePreviousEncounterCheck()) {
        break;
      }
    }
    //After all consideration if the next match is determined set the choices
    this.choiceASetter(this.dataSet[this.gamePointerStarter]);
    this.choiceBSetter(this.dataSet[this.gamePointerComparer]);
  }

  gameMovePosition(winnerChoice: string) {
    if (winnerChoice === this.dataSet[this.gamePointerStarter]) {
      this.gamePointerComparer++;
    }
    if (winnerChoice === this.dataSet[this.gamePointerComparer]) {
      this.gamePointerStarter = this.gamePointerComparer;
      this.gamePointerComparer++;
    }
  }
  gameProcessResult(winnerChoice: string, loserChoice: string) {
    //Add edge (Points)
    this.addEdge(winnerChoice, loserChoice);

    //Add loserChoice to loserPool
    this.loserPool.push(loserChoice);

    //DFS to check indirect win
    this.dfs(winnerChoice);
  }

  gamePreviousEncounterCheck() {
    const starterName = this.dataSet[this.gamePointerStarter];
    const comparerName = this.dataSet[this.gamePointerComparer];
    if (this.checkEdge(starterName, comparerName)) {
      console.log(
        `###### Skip because ${starterName} have won ${comparerName} before`
      );
      this.loserPool.push(comparerName);
      this.gamePointerComparer++;
      return true;
    }
    if (this.checkEdge(comparerName, starterName)) {
      console.log(
        `###### Skip because ${comparerName} have won ${starterName} before`
      );
      this.loserPool.push(starterName);
      this.gamePointerStarter = this.gamePointerComparer;
      this.gamePointerComparer++;
      return true;
    }
    return false;
  }

  gamePrintResult() {
    for (const key in this.adjacencyList) {
      let relationShip = "";
      this.adjacencyList[key].forEach((e) => {
        relationShip += e.choiceName + " ---> ";
      });
      console.log(relationShip);
    }
  }

  gameGetResult() {
    const result = [];
    for (const key in this.adjacencyList) {
      const relationShip = { key: key, wins: -1 };
      this.adjacencyList[key].forEach(() => {
        relationShip.wins++;
      });
      result.push(relationShip);
    }
    return result;
  }

  dfs(src: string) {
    const visited: Record<string, string> = {};
    this.dfsHelper(src, src, visited);
  }

  dfsHelper(startNode: string, src: string, visited: Record<string, string>) {
    const sourceList: UserChoiceNode[] = this.adjacencyList[src];
    if (visited[src]) {
      //prevent loop when there's a full cycle where it encounter the same previous node A->C C->B C->A will cause a loop
      return;
    } else {
      visited[src] = src;
    }

    //Start the propagating victort (indirect wins  A->B ,   B->D , if C->A C will auto get C->B and C-D)
    for (let i = 1; i < sourceList.length; i++) {
      //skip 0 cause 0 is itself
      //Loop through every node that the src has already won
      const neighborNode: UserChoiceNode = sourceList[i];

      for (
        let j = 1;
        j < this.adjacencyList[neighborNode.choiceName].length;
        j++
      ) {
        const indirectLoser = this.adjacencyList[neighborNode.choiceName][j];
        if (!this.checkEdge(startNode, indirectLoser.choiceName)) {
          this.addEdge(startNode, indirectLoser.choiceName);
        }
      }
      this.dfsHelper(startNode, neighborNode.choiceName, visited);
    }
  }
}
