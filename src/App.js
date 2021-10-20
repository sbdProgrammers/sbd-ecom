import './assets/App.css';
import Header from "./component/header/Header";
import Products from "./component/products/Products";
import Cart from "./component/cart/Cart";
import './assets/custom';

function App() {
    return (
        <div className="app" id="content-root">
            <Header></Header>
            <div className="app-container">
                <Products></Products>
                <Cart></Cart>
            </div>
        </div>
    );
}

export default App;
