import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Instructors from "../Instructors/Instructors";
import Classes from "../Classes/Classes";
import Dashboard from "../Dashboard/Dashboard";
import MySelectedClass from "../Dashboard/MySelectedClass/MySelectedClass";
import AddClass from "../Dashboard/AddClass/AddClass";
import InstructorClasses from "../Dashboard/InstructorClasses/InstructorClasses";
import UpdateClass from "../Dashboard/InstructorClasses/UpdateClass";
import ManageClasses from "../Dashboard/ManageClasses/ManageClasses";
import ManageUsers from "../Dashboard/ManageUsers/ManageUsers";
import ErrorPage from "../ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import Payment from "../Dashboard/Payment/Payment";
import EnrolledClasses from "../Dashboard/EnrolledClasses/EnrolledClasses";
import PaymentHistory from "../Dashboard/PaymentHistory/PaymentHistory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'instructors',
        element: <Instructors></Instructors>
      },
      {
        path: 'classes',
        element: <Classes></Classes>
      },
      {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
          {
            path: 'mySelectedClass',
            element: <MySelectedClass></MySelectedClass>
          },
          {
            path: 'addClass',
            element: <AddClass></AddClass>
          },
          {
            path: 'myClasses',
            element: <InstructorClasses></InstructorClasses>
          },
          {
            path: 'updateClass/:id',
            element: <UpdateClass></UpdateClass>,
            loader: ({params})=>fetch(`http://localhost:5000/singleClass/${params.id}`)
          },
          {
            path: 'manageClasses',
            element: <ManageClasses></ManageClasses>
          },
          {
            path: 'manageUsers',
            element: <ManageUsers></ManageUsers>
          },
          {
            path: 'payment/:id',
            element: <Payment></Payment>
          },
          {
            path: 'enrolledClasses',
            element: <EnrolledClasses></EnrolledClasses>
          },
          {
            path: 'paymentHistory',
            element: <PaymentHistory></PaymentHistory>
          }
        ]
      }
    ]
  },
  {
    path: '*',
    element: <ErrorPage></ErrorPage>
  }
]);

export default router;