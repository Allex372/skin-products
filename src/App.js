import './App.css';
import Header from "./components/header/Header";
import FD from "./components/main/First_Display/FD";
import SD from "./components/main/Second_Display/SD";
import TD from "./components/main/Third_Display/TD";
import FourthD from "./components/main/Fourth_Display/FourthD";

function App() {
    return (
        <div className="App">
            <Header/>
            <FD/>
            <SD/>
            <TD/>
            <FourthD/>
        </div>
    );
}

export default App;
