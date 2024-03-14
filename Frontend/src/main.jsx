import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter,RouterProvider,createBrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store.js'
import Body from './components/Body.jsx'
import SideBar from './components/SideBar.jsx'
import EmptyCard from './EmptyUi/EmptyCard.jsx'

const router = createBrowserRouter([
  {
    path:"/", 
    element:<App/>,
        children:[
          {
            path:"/",
            element:<Body/>
          },
        {
          path:"/",
          element:""

        },
          {
        path:"/watch",
        element:''
      },
      {
        path:"/",
        element:''
      }
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
