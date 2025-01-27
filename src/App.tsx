import GamePage from "./pages/GamePage";
import ChoiceContextProvider from "./context/ChoiceContextProvider";

function App() {
  return (
    <div className="w-full h-full min-w-min bg-slate-800 ">
      <div className="min-w-min max-w-sm m-auto min-h-screen bg-gradient-to-b from-purple-300 via-blue-300 to-blue-400  ">
        <ChoiceContextProvider>
          <GamePage />
        </ChoiceContextProvider>
      </div>
    </div>
  );
}

export default App;
