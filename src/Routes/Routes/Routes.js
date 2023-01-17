import {createBrowserRouter} from 'react-router-dom';
import Main from '../../layout/Main';
import Category from '../../Pages/Category/Category/Category';
import Home from '../../Pages/Home/Home/Home';
import Dms from '../../Pages/Dms/Dms/Dms';
import Login from '../../Pages/Login/Login/Login';
import Register from '../../Pages/Login/Register/Register';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import TermsAndConditions from '../../Pages/Others/TermsAndConditions/TermsAndConditions';
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
                element: <PrivateRoute><Dms></Dms></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/dms/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <TermsAndConditions></TermsAndConditions>
            }
        ]
    }

]);