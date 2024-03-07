import './App.css'
import store from './store/store.js';
import { Provider, useSelector } from 'react-redux';
import Header from './components/Header.jsx';
import SideBar from './components/SideBar.jsx';
function App() {
// console.log(menu)
  return (
    <>
    <Provider store= {store} >
      <Header />
      <SideBar />
    </Provider>
    </>
  )
}

export default App
