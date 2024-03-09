import './App.css'
import store from './store/store.js';
import { Provider, useSelector } from 'react-redux';
import Header from './components/Header.jsx';
import SideBar from './components/SideBar.jsx';
import EmptyCard from "./EmptyUi/EmptyCard.jsx"
import { Outlet } from 'react-router-dom';
import Body from './components/Body.jsx';
function App() {
  return (
    <>
    <Provider store= {store} >
      <Header />
      <SideBar />
      <EmptyCard/>
    </Provider>
    </>
  )
}

export default App
