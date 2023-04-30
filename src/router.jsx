import {createBrowserRouter} from "react-router-dom";
import Login from './views/Login';
import Register from './views/Register';
import Users from "./views/Users";
import Notfound from './views/Notfound';
import DefaultLayout from './components/DefaultLayout';
import GeustLayout from './components/GeustLayout';
import Dashboard from './views/Dashboard'

const router = createBrowserRouter([
    {
        path:'/',
        element:<DefaultLayout/>,
        children:[
            {
                path:'/',
                element: <Users/>
            },
            {
                path:'/users',
                element: <Users/>
            },
            {
                path:'/Dashboard',
                element: <Dashboard/>
            },
        ]

    },
    {
        path:'/',
        element:<GeustLayout/>,
        children:[
            {
                path:'/login',
                element: <Login/>
            },
            {
                path:'/register',
                element: <Register/>
            },
        ]
    },    
    {
        path:'*',
        element: <Notfound/>
    }
])

export default router;