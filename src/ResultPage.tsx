import { ResultType } from "./types";
const ResultPage = ({ result }: { result: ResultType }) => {
  result.sort((a, b) => b.wins - a.wins);
  return (
    <div className="bg-red-50 w-full  items-center flex flex-col">
      <h1 className="font-spaceGrotesk">Game Ended</h1>

      <ul>
        {result.map((element, i) => {
          return (
            <li key={i}>
              <p className="font-spaceGrotesk">
                {element.key}--- {element.wins}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ResultPage;
