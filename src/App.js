import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import SigninPage from "./pages/signin";
import HomePage from "./components/Elements/Home";
import ClassroomPage from "./components/Classroom/Classroom";
import SchedulePage from "./components/Schedule/Schedule";
import AttendancePage from "./components/Attendance/Attendance";
import StudentPage from "./components/Student/Student";
import SignupPage from "./components/Signup";
import Open1 from "./components/Opening/Open1";
import Paged from "./components/Inside/paged";
import Open2 from "./components/Opening1/Open2";
import Paged1 from "./components/Inside1/paged1";
import Open3 from "./components/Opening2/Open3";
import Paged2 from "./components/Inside2/paged2";
import Paged3 from "./components/Inside3/paged3";
import Open4 from "./components/Opening3/Open4";
import Paged4 from "./components/Inside4/paged4";
import Open5 from "./components/Opening4/Open5";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />
        <ClassroomPage path="/Classroom" component={ClassroomPage} exact />
        <SchedulePage path="/Schedule" component={SchedulePage} exact />
        <AttendancePage path="/Attendance" component={AttendancePage} />
        <StudentPage path="/Student" component={StudentPage} />
        <SignupPage path="/signup" component={SignupPage} />
        <Open1 path="/Open1" component={Open1} />
        <Open2 path="/Open2" component={Open2} />
        <Open3 path="/Open3" component={Open3} />
        <Open4 path="/Open4" component={Open4} />
        <Open5 path="/Open5" component={Open5} />
        <Paged path="/Paged" component={Paged} />
        <Paged1 path="/Paged1" component={Paged1} />
        <Paged2 path="/Paged2" component={Paged2} />
        <Paged3 path="/Paged3" component={Paged3} />
        <Paged4 path="/Paged4" component={Paged4} />
        <HomePage />
      </Switch>
    </Router>
  );
}

export default App;
