import './App.scss'
import Sidebar from "./Components/Sidebar/Sidebar.tsx";
import Main from "./Components/Main/Main.tsx";
import Header from "./Components/Header/Header.tsx";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="content-container">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default App
