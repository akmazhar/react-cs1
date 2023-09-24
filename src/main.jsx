import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// single page created by single path and element

const myCreatedRoute = createBrowserRouter([
  {
    path:"/",
    element: <div>First Home Route</div>
  },
  {
    path:"/products",
    element: <div>Products route hitted nicely</div>
  },
  {
    path:"/contact",
    element: <div>Hello 0134888790 & akmazharshuvo07@gmail.com</div>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myCreatedRoute}></RouterProvider>
  </React.StrictMode>,
)
