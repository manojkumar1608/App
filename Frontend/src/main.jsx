import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store/store.js";
import MainContainer from "./components/MainContainer.jsx";
import WatchPage from "./Pages/WatchPage.jsx";
import TweetsPage from "./components/Tweets.jsx";
import YourAccount from "./components/YourAccount.jsx";
import Signup from "./components/SignUp.jsx";
import Login from "./components/Login.jsx";
import AuthLayout from "./components/AuthLayout.jsx";
import UploadVideo from "./components/UploadVideo.jsx.jsx";
import EditVideo from './Pages/EditVideo.jsx';

const router = createBrowserRouter([
  {
    path:"/", 
    element:<App/>,
        children:[
          {
            path:"/",
            element:<MainContainer/>
          },
        {
          path:"/watch/:videoId",
          element:<WatchPage/>

        },
          {
        path:"/tweets",
        element:<TweetsPage/>
      },
      {
        path:"/acc",
        element:<YourAccount/>
      },
      {
        path:"/signup",
        element:(
          <AuthLayout authentication = {false}>
            <Signup/>
          </AuthLayout>
        )
        

      },
      {
        path:"/login",
        element:(
          <AuthLayout authentication = {false}>
            <Login/>
          </AuthLayout>
        )

      },
      {
        path:"/uploadvideo",
        element:(
          <AuthLayout authentication = {false}>
            <UploadVideo/>
          </AuthLayout>
        )

      },

      {
        path:"/edit-video/:videoId",
        element:(
          <AuthLayout authentication = {false}>
            <EditVideo/>
          </AuthLayout>
        )

      },
    ]
  }
])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <Provider store = {store}>

    <RouterProvider router= {router}/>
 </Provider>
   
  </React.StrictMode>,
)
