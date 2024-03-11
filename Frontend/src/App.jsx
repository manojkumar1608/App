// 
import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header"; 
import store from "./store/store.js";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import EmptyCard from "./EmptyUi/EmptyCard";

const appRouter = createBrowserRouter([
  {
    path:"/", 
    element:<Body />,
    children:[
      {
        path:"/",
        element:<EmptyCard />
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

function App() {
  return (
    <Provider store={store}>
      <div className="App"> 
        <Header />
        <RouterProvider router={appRouter}></RouterProvider>
      </div>
    </Provider>
  );
}

export default App;
