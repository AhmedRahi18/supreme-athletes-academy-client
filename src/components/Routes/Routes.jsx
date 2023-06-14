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
        element: <Dashboard></Dashboard>,
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
          }
        ]
      }
    ]
  },
]);

export default router;