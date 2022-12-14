import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import homeRegistation from "./components/pages/Registations/RegistationHome/registationHome";
import Register from "./components/pages/Registations/Registation/Registation";
import login from "./components/pages/Login/login";

// Farmer 
import FarmerHomePage from "./components/pages/Farmer/Home/farmerHome";
import AddProduct from "./components/pages/Farmer/Product/CreateProduct";
import CreatedProductList from "./components/pages/Farmer/Product/CreatedProductList/createdProductList"



function App() {
  return (
    <div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Router>
        <Switch>
          <Route path="/" exact component={homeRegistation} />
          <Route path="/Register" component={Register} />
          <Route path="/login" component={login} />

          {/* Farmer */}

          <Route path="/FarmerHomePage" component={FarmerHomePage} />
          <Route path="/AddProduct" component={AddProduct} />
          <Route path="/CreatedProductList" component={CreatedProductList} />
          
          

        </Switch>
      </Router>
    </div>
  );
}

export default App;
