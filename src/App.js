import './App.css';
import Header from "./components/header/Header";
import FD from "./components/main/First_Display/FD";
import SD from "./components/main/Second_Display/SD";
import TD from "./components/main/Third_Display/TD";
import FourthD from "./components/main/Fourth_Display/FourthD";
import FifthD from "./components/main/Fifth_Display/FifthD";
import SixthD from "./components/main/Sixth_Display/SixthD";
import SevethD from "./components/main/Seveth_Display/SevethD";
import Footer from './components/footer/footer';

function App() {
    return (
        <div className="App">
            <Header/>
            <FD/>
            <SD/>
            <TD/>
            <FourthD/>
            <FifthD/>
            <SixthD/>
            <SevethD/>
            <Footer/>
        </div>
    );
}

export default App;
