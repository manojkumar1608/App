// 
import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header.jsx"; 
import store from "./store/store.js";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import EmptyCard from "./EmptyUi/EmptyCard";
import SideBar from "./components/SideBar.jsx";



function App() {
  return (
    <>
      <div className="">
        <Header/>
      {/* <main> */}
       <Outlet />
       {/* </main> */}
  </div>
  </>
    
    
  );
}

export default App;
