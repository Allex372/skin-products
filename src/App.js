import './App.css';
import Header from "./components/header/Header";
import FD from "./components/main/First_Display/FD";
import SD from "./components/main/Second_Display/SD";

function App() {
    return (
        <div className="App">
            <Header/>
            <FD/>
            <SD/>
        </div>
    );
}

export default App;
