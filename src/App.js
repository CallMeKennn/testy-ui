import "./App.scss";
import Header from "./Component/Header";
import Menu from "./Component/Menu";
import Slider from "./Component/Slider";
import ProductList from "./Component/ProductList";

function App() {
    return (
        <div className="App">
            <div className="app-container">
                <Header />

                <div className="slider">
                    <Menu/>
                    <Slider/>
                </div>

                <ProductList/>
            </div>
        </div>
    );
}

export default App;
