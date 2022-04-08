import {
  Routes,
  Route,
  Navigate 
} from "react-router-dom";
import { useUser } from '../features/hook'
import '../App.css';
import Login from './pages/login'
import Home from './pages/home'
// import Sidebar from "./components/sidebar/Sidebar";
// import Topbar from "./components/topbar/Topbar";
// import UserList from "./pages/userList/UserList";
// import User from "./pages/user/User";
// import NewUser from "./pages/newUser/NewUser";
// import ProductList from "./pages/productList/ProductList";
// import Product from "./pages/product/Product";
// import NewProduct from "./pages/newProduct/NewProduct";


function App() {
  const { currentUser } = useUser()

  const admin = currentUser.isAdmin

  return (
    <Routes>
        <Route path="/login" element={<Login />}/>
        {admin && (
          <>
            {/* <Topbar /> */}
            <div className="container">
              {/* <Sidebar /> */}
              <Route path="/" element={<Home />}/>
              {/* <Route path="/users" element={<UserList />}/>
              <Route path="/user/:userId" element={<User />}/>
              <Route path="/newUser" element={<NewUser />}/>
              <Route path="/products" element={<ProductList />}/>
              <Route path="/product/:productId" element={<Product />}/>
              <Route path="/newproduct" element={<NewProduct />}/> */}
            </div>
          </>
        )}
    </Routes>
  );
}

export default App;