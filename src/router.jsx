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
import AdminCreate from "./Admin/AdminCreate";
import NgoLogin from "./Ngo/NgoLogin";
import RequestsUpdate from "./components/update/RequestsUpdate";
import UserUpdate from "./components/update/UserUpdate";
import RequestCards from "./components/cards/RequestCards";
import CompareCards from "./components/cards/CompareCards";

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
                path:'/requests',
                element: <RequestCards/>,
      
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
                path: '/ngo/show/new',
                element: <Ngo_/>
        
            },
            {
                path: '/ngo/show/:id',
                element: <NgoUpdate/>
        
            },
            {
                path: '/request/update/:id',
                element: <RequestsUpdate/>
        
            },
           
            {
                path: '/user/update/:id',
                element: <UserUpdate/>
        
            },
           
            {
                path: '/PostRequest/:id',
                element: <FoodUpdate/>
        
            },
            {
                path: '/PostRequest/new',
                element: <Requests_/>
        
            },
            {
                path:'/admin/register',
                element: <AdminCreate/>
            },
            {
                path:'/request/compare',
                element: <CompareCards/>
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
                path:'/admin/login',
                element: <Admin/>
            },
            
            {
                path:'/ngo/login',
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