import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import AddProduct from "./components/AddProduct";
import ProductsList from "./components/ProductList";
import LoginForm from './components/LoginForm';
import Logout from './components/Logout';
function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/products" className="navbar-brand">
          E-Commerce app
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/products"} className="nav-link">
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add
            </Link>
          </li><li className="nav-item">
            <Link to={"/login"} className="nav-link">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/logout"} className="nav-link">
              Logout
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Routes>
          <Route exact path={"/"} element={<ProductsList/>} />
          <Route exact path={"/products"} element={<ProductsList/>} />
          <Route exact path="/add" element={<AddProduct />} />
          <Route path="/login" element={<LoginForm/>} />
          <Route path="/logout" element={<Logout/>} />
          {/* <Route path="/tutorials/:id" component={Tutorial} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
