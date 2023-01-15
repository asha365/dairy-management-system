import {createBrowserRouter} from 'react-router-dom';
import Main from '../../layout/Main';
import Category from '../../Pages/Category/Category/Category';
import Home from '../../Pages/Home/Home/Home';
import Dms from '../../Pages/Dms/Dms/Dms';
export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/dms/')
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/dms/:id',
                element: <Dms></Dms>,
                loader: ({params}) => fetch(`http://localhost:5000/dms/${params.id}`)
            }
        ]
    }

]);