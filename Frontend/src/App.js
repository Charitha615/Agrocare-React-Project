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
import CreatedProductList from "./components/pages/Farmer/Product/CreatedProductList/createdProductList";
import UpdateProduct from "./components/pages/Farmer/Product/EditProduct";
import FarmerProfile from "./components/pages/Farmer/Profile/Profile";
import FarmerQuestionsAdd from "./components/pages/Farmer/Forum/AddQuestions";
import FarmerViewForum from "./components/pages/Farmer/Forum/ViewForum";
import EditProfile from "./components/pages/Farmer/Profile/EditProfile";
import FertilizerList from "./components/pages/Farmer/Fertilizer/FertilizerList";


// Shop Owner 
import ShopOwnerHomePage from "./components/pages/ShopOwner/Home/shopOwnerHome";
import Addfertilizer from "./components/pages/ShopOwner/fertilizer/Addfertilizer";
import CreatedfertilizerList from "./components/pages/ShopOwner/fertilizer/Existing Fertilizer/existingfertilizer";
import Updatefertilizer from "./components/pages/ShopOwner/fertilizer/EditFertilizer";
import ShopOwnerProfile from "./components/pages/ShopOwner/Profile/Profile";
import ShopOwnerProfileEdit from "./components/pages/ShopOwner/Profile/EditProfile";

// Expert
import ExpertHomePage from "./components/pages/Expert/Home/ExpertHome";
import ExpertProfile from "./components/pages/Expert/Profile/Profile";
import ExpertProfileEdit from "./components/pages/Expert/Profile/EditProfile";
import ExpertViewForum from "./components/pages/Expert/Forum/ViewForum";
import ExpertAddAnswer from "./components/pages/Expert/Forum/AddQuestions";

//Customer
import CustomerHomePage from "./components/pages/Customer/Home/customerHome"
import CustomerProfile from "./components/pages/Customer/Profile/Profile"
import CustomerProfileEdit from "./components/pages/Customer/Profile/EditProfile"




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
          <Route path="/UpdateProduct" component={UpdateProduct} />
          <Route path="/FarmerProfile" component={FarmerProfile} />
          <Route path="/addQuestions" component={FarmerQuestionsAdd} />
          <Route path="/FarmerViewForum" component={FarmerViewForum} />
          <Route path="/EditProfile" component={EditProfile} />
          <Route path="/FertilizerList" component={FertilizerList} />


          {/* Shop Owner */}

          <Route path="/ShopOwnerHome" component={ShopOwnerHomePage} />
          <Route path="/Addfertilizer" component={Addfertilizer} />
          <Route path="/CreatedfertilizerList" component={CreatedfertilizerList} />
          <Route path="/Updatefertilizer" component={Updatefertilizer} />
          <Route path="/ShopOwnerProfile" component={ShopOwnerProfile} />
          <Route path="/ShopOwnerProfileEdit" component={ShopOwnerProfileEdit} />

          {/* Expert */}

          <Route path="/ExpertHomePage" component={ExpertHomePage} />
          <Route path="/ExpertProfile" component={ExpertProfile} />
          <Route path="/ExpertProfileEdit" component={ExpertProfileEdit} />
          <Route path="/ExpertViewForum" component={ExpertViewForum} />
          <Route path="/ExpertAddAnswer" component={ExpertAddAnswer} />

          {/* Customer */}

          <Route path="/CustomerHomePage" component={CustomerHomePage} />          
          <Route path="/CustomerProfile" component={CustomerProfile} />
          <Route path="/CustomerProfileEdit" component={CustomerProfileEdit} />



        </Switch>
      </Router>
    </div>
  );
}

export default App;
