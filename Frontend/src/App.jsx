// 
import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header.jsx"; 
import store from "./store/store.js";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer.jsx";
import WatchPage from "./components/WatchPage.jsx";
const router = createBrowserRouter([
  {
    path:"/", 
    element:<Body/>,
        children:[
          {
            path:"/",
            element:<MainContainer/>
          },
        {
          path:"/",
          element:""

        },
          {
        path:"/watch",
        element:<WatchPage/>
      },
      {
        path:"/",
        element:''
      }
    ]
  }
])

function App() {

  return (
    <>
     <Provider store = {store}>
      <Header/>
      <RouterProvider router= {router}/>
    </Provider>
  </>
    
    
  );
}

export default App;
