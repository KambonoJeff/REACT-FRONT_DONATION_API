import {createBrowserRouter, Navigate} from "react-router-dom";
import Login from './views/Login';
import Register from './views/Register';
import Users from "./views/Users";
import Notfound from './views/Notfound';
import DefaultLayout from './components/DefaultLayout';
import GeustLayout from './components/GeustLayout';
import Dashboard from './views/Dashboard'
import Form from './components/Form'

import UserForm from "./components/editForm/UserForm";
import Food_ from "./components/editForm/Food";
import Ngo_ from "./components/editForm/Ngo";
import Requests_ from "./components/editForm/Requests";
import Food from "./components/tables/Food";
import Ngo from "./components/tables/Ngo";
import Requests from "./components/tables/Requests";
import UserTable from "./components/tables/UserTable";
import FoodRequest from "./components/forms/FoodRequest";
import Request from "./components/forms/Request";
import FoodUpdate from "./components/update/FoodUpdate";
import NgoUpdate from "./components/update/NgoUpdate";
import Admin from "./Admin/Admin";
import NgoLogin from "./Ngo/NgoLogin";
import NotEmpty from "./components/NotEmpty";

const router = createBrowserRouter([
    {
        path:'/',
        element:<DefaultLayout/>,
        children:[
            {
                path:'/',
                element: <Navigate to="/Dashboard "/>
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
                path:'/form/Food',
                element: <FoodRequest/>
            },
            {
                path:'/form/NgoRequest',
                element: <Request/>
            },
            
           
            {
                path: '/users/new',
                element: <UserForm key="create"/>
        
            },
            {
                path: '/users/:id',
                element: <UserForm key="update"/>
        
            },
            {
                path: '/food/new',
                element: <Food_/>
        
            },
            {
                path: '/food/:id',
                element: <FoodUpdate/>
        
            },
            {
                path: '/ngo/show/:id',
                element: <NgoUpdate/>
        
            },
            {
                path: '/ngo/show/new',
                element: <Ngo_/>
        
            },
            {
                path: '/PostRequest/:id',
                element: <Requests_/>
        
            },
            {
                path: '/PostRequest/new',
                element: <Requests_/>
        
            },
            {
                path: '/Notempty',
                element: <NotEmpty/>
        
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
            {
                path:'/admin/register',
                element: <Admin/>
            },
            {
                path:'/ngo/register',
                element: <NgoLogin/>
            },
        ]
    },    
    {
        path:'*',
        element: <Notfound/>
    }
])

export default router;