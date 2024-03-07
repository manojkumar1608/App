import  { configureStore } from '@reduxjs/toolkit'
import authSlice from "./authSlice"
import SidebarSlice from "./SidebarSlice"
const store = configureStore({
  reducer:{
     auth: authSlice,
     Sidebar: SidebarSlice
  }
})

export default store