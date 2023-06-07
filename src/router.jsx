import {createBrowserRouter, Navigate} from "react-router-dom";
import Login from './views/Login';
import Register from './views/Register';
import Users from "./views/Users";
import Notfound from './views/Notfound';
import DefaultLayout from './components/DefaultLayout';
import GeustLayout from './components/GeustLayout';
import Dashboard from './views/Dashboard'
import Form from './components/Form'

import AddUser from './components/AddUser'
import UserForm from "./views/UserForm";
import Food from "./components/tables/Food";
import Ngo from "./components/tables/Ngo";
import Requests from "./components/tables/Requests";
import UserTable from "./components/tables/UserTable";

const router = createBrowserRouter([
    {
        path:'/',
        element:<DefaultLayout/>,
        children:[
            {
                path:'/',
                element: <Navigate to="/users "/>
            },
            {
                path:'/users',
                element: <Users/>,
      
            },
            {
                path:'/users/food',
                element: <Food/>,
      
            },
            {
                path:'/users/ngo',
                element: <Ngo/>,
      
            },
            {
                path:'/users/requests',
                element: <Requests/>,
      
            },
            {
                path:'/users/user',
                element: <UserTable/>,
      
            },
            {
                path:'/Dashboard',
                element: <Dashboard/>
            },
            {
                path:'/form',
                element: <Form/>
            },
           
            {
                path: '/users/new',
                element: <UserForm key="create"/>
        
            },
            {
                path: '/users/:id',
                element: <UserForm key="update"/>
        
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