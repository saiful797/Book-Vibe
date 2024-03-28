import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import ListedBooks from './components/ListedBooks/ListedBooks';
import ErrorPage from './components/ErrorPage/ErrorPage';
import BookDetails from './components/BookDetails/BookDetails';
import PageToRead from './components/PageToRead/PageToRead';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/listedBooks",
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('/books.json')
      },
      {
        path:'/book/:id',
        element:<BookDetails></BookDetails>,
        loader: () => fetch('/books.json')
      },
      {
        path:'/pageRead',
        element:<PageToRead></PageToRead>,
        loader: () => fetch('/books.json')
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/blogs',
        element:<Blogs></Blogs>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
