import ReactDOM from "react-dom";
import Corpo from "./components/corpo/corpo";
import Navbar from "./components/Navbar";



function App() {
    return (
        <> 
        <Navbar />
        <Corpo />
        </>
    )

}

ReactDOM.render(App(), document.querySelector(".root"))