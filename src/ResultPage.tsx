import { ResultType } from "./types";
const ResultPage = ({ result }: { result: ResultType }) => {
  result.sort((a, b) => b.wins - a.wins);
  return (
    <>
      <h1>Game Ended test</h1>

      <ul>
        {result.map((element, i) => {
          return (
            <li key={i}>
              <p>
                {element.key}--- {element.wins}
              </p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ResultPage;
