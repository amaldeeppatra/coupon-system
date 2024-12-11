import React from 'react';
import './index.css'
import Dashboard from './pages/Dashboard';
import { createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import Landing from './pages/Landing';
import GenerateCoupons from './pages/GenerateCoupons';

const App=()=>{
  return(
    <>
    <Outlet/>
    </>
  )
}


const appRouter = createBrowserRouter(
  [
    {
      path:"/",
      element:<App/>,
      children:[
        {
          path:"/",
          element:[<Landing/>]
        },
        {
          path:"/dashboard",
          element:[<Dashboard/>]
        },
        {
          path:"/generate-coupons",
          element:[<GenerateCoupons/>]
        }
      ]
    }
  ]
)


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

// function App() {
//   return (
//     <div className="App">
//       <Dashboard />
//     </div>
//   );
// }

// export default App;