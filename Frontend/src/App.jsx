// 
import "./App.css";
import Header from "./components/Header/Header.jsx"; 
import Body from "./components/Body";
import { useDispatch } from "react-redux";
import { useState , useEffect } from "react";
import {login , logout} from './store/authSlice.js'
import axios from 'axios'
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
    <>
      <Header/>
    <Body/>
  </>
    
    
  ):null
}

export default App;
