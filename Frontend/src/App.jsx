
import "./App.css";
import Header from "./components/Header/Header.jsx"; 
import { useDispatch } from "react-redux";
import { useState , useEffect } from "react";
import {login , logout} from './store/authSlice.js'
import axios from 'axios'
import { Outlet } from "react-router-dom";
import SideBar from './components/Header/SideBar.jsx'
function App() {

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get('/api/v1/users/current-user')
    .then((userData) => {
      if (userData) {
        dispatch(login(userData.data))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  
  return !loading ? (
    
       <div className='min-h-screen flex flex-wrap content-between'>
      <div className='w-full block'>
        <Header />
        <div className="flex flex-row mt-[4.5rem]">
        <SideBar/>
        <main className="w-full mx-auto ml-[5.2rem]">
         <Outlet />
         </main>
        </div>
      </div>
    </div>
  ) : null
}


export default App;
