import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ForgotPassword from "./auth/ForgotPassword/ForgotPassword";
import Login from "./auth/login/Login";
import Calendar from "./layout/Calendar";
import PrivateRoute from "./layout/Dashbord/PrivateRoute";
import Editer from "./layout/Editor";
import FormLayout from "./layout/FormLayout";
import ECommerce from "./layout/Page/ECommerce";
import Inbox from "./layout/Page/Inbox";
import Profile from "./layout/Page/Profile";
import Settings from "./layout/Page/Settings";
import PageNotFound from "./PageNotFound";
import PrivateRouteUser from "./user/DashBord/PrivateRouter";
import Tables from "./layout/Page/Table";
import ToDOList from "./layout/Component/ToDOList";
import UserLogin from "./user/Auth/UserLogin";
import AddProject from "./user/layout/AddProject";
import ShowAllProject from "./user/layout/ShowAllProject";
import ChatApp from "./layout/Component/ChatApp";
import JoinRoom from "./layout/Component/JoinRoom";
import ChangePassword from "./layout/ChangePassword";
import UpdateComponent from "./user/layout/UpdateComponent";
import ImplementDSR from "./layout/Page/ImplementDSR";
import MyStatus from "./layout/Page/MyStatus";
import ChartBord from "./layout/ChartBord";


//export const userAuth = JSON.parse(localStorage.getItem("userInfo"));



export const router = createBrowserRouter([
  {
    path: "/UserDashbord",
    element: <PrivateRoute />,
    exact: true,
    children: [
     

      {
        path: "dashbord",
        element: <ECommerce />,
        exact: true,
      },

      {
        path: "profile",
        element: <Profile />,
        exact: true,
      },
      {
        path: "settings",
        element: <Settings />,
        exact: true,
      },

      {
        path: "Calendar",
        element: <Calendar />,
        exact: true,
      },
     


      {
        path :"editer",
        element:<Editer/>,
        exact: true
      },

      {
        path :"inbox",
        element:<Inbox/>,
        exact: true
      },

      {
        path :"table",
        element:<Tables/>,
        exact: true
      },
      {
        path :"todolist",
        element:<ToDOList/>,
        exact: true
      },
      {
        path :"changePassword",
        element:<ChangePassword/>,
        exact: true
      },

      {
        path :"dsrImplemnt",
        element:<ImplementDSR/>,
        exact: true
      },
     
      {
        path :"mystatus",
        element:<MyStatus/>,
        exact: true
      },
      {
        path:"chat",
        element:<ChatApp/>,
        exact: true
    
      },
      {
        path:"join",
        element:<JoinRoom/>,
        exact: true
    
      },
    

],
},




{
  path: "/adminDashbord",
  element: <PrivateRouteUser />,
  exact: true,
  children: [
    {
      path: "form-layout",
      element: <FormLayout />,
      exact: true,
    },

    {
      path:"addProject",
      element:<AddProject/>,
      exact: true


    },

    {
      path:"update/:id",
      element:<UpdateComponent/>,
      exact: true


    },


    {
      path:"showProject",
      element:<ShowAllProject/>,
      exact: true

    }
    


],
},









{
  path: "/AdminLogin",
  element: <UserLogin />,
  exact: true,
},

  
  {
    path: "/",
    element: <Login />,
    exact: true,
  },
  {
    path: "/ForgotPassword",
    element: <ForgotPassword />,
    exact: true,
  },
  

  {
    path:"chatbord",
    element:<ChartBord/>,
    exact: true

  },
  {
    path: "*",
    element: <PageNotFound />,
    exact: true,
  },
]);
