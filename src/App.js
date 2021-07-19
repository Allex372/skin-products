import './App.css';
import Header from "./components/header/Header";
import FD from "./components/main/First_Display/FD";
import SD from "./components/main/Second_Display/SD";
import TD from "./components/main/Third_Display/TD";

function App() {
    return (
        <div className="App">
            <Header/>
            <FD/>
            <SD/>
            <TD/>
        </div>
    );
}

export default App;
