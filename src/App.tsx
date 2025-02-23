import GamePage from "./pages/GamePage";
import ChoiceContextProvider from "./context/ChoiceContextProvider";

function App() {

  return (
    <div className="flex w-full h-[100dvh] min-w-min bg-slate-800 overflow-hidden">
      <div className="bg-slate-800  z-10 flex-1 hidden xs:block"></div>
      <div className=" min-w-[24rem] max-w-sm m-auto h-full bg-gradient-to-b from-purple-300 via-blue-300 to-blue-400">
        <ChoiceContextProvider>
          <GamePage />
        </ChoiceContextProvider>
      </div>
      <div className="bg-slate-800  z-10 flex-1 hidden xs:block"></div>
    </div>
  );
}

export default App;
