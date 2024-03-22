// 
import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header.jsx"; 
import store from "./store/store.js";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer.jsx";
import WatchPage from "./components/WatchPage.jsx";
import TweetsPage from "./components/Tweets.jsx";
import YourAccount from "./components/YourAccount.jsx";
import Signup from "./components/SignUp.jsx";
import Login from "./components/Login.jsx";
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
          path:"/tweets",
          element:<TweetsPage/>

        },
          {
        path:"/watch",
        element:<WatchPage/>
      },
      {
        path:"/acc",
        element:<YourAccount/>
      },
      {
        path:"/signup",
        element:<Signup/>

      },
      {
        path:"/login",
        element:<Login/>

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
