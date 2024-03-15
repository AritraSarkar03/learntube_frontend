import React from 'react';
import {BrowserRouter as Router, Route,Routes} from "react-router-dom";
import Home from './Components/Home/Home'
import Dashboard from './Components/Admin/Dashboard/Dashboard'
import Profile from './Components/Profile/Profile';
import ChangePassword from './Components/Profile/ChangedPassword'
import UpdateProfile from './Components/Profile/UpdateProfile'
import Header from './Components/Layout/Header/Header';
import SignIn from './Components/Auth/SignIn';
import Courses from './Components/Courses';
import Footer from './Components/Layout/Footer';
import Register from './Components/Auth/Register';
import ForgetPassword from './Components/Auth/ForgetPassword';
import ResetPassword from './Components/Auth/ResetPassword';
import Contact from './Components/Contact';
import RequestCourse from './Components/RequestCourse';
import AboutUs from './Components/AboutUs';
import Subscribe from './Components/Payments/Subscribe';
import PaymentSuccess from './Components/Payments/PaymentSuccess';
import PaymentFail from './Components/Payments/PaymentFail';
import NotFound from './Components/NotFound/NotFound';
import CoursePage from './CoursePage/CoursePage';
import CreateCourse from './Components/Admin/CreateCourse/CreateCourse';
import Course from './Components/Admin/Course/Course';
import User from './Components/Admin/User/User';

function App() {
  return (
   <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/changepassword' element={<ChangePassword/>}/>
      <Route path='/updateprofile' element={<UpdateProfile/>}/>
      <Route path='/courses' element={<Courses/>}/>
      <Route path='/courses/:id' element={<CoursePage/>}/>
      <Route path='/requestcourse' element={<RequestCourse/>}/>
      <Route path='/contactus' element={<Contact/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/forgetpassword' element={<ForgetPassword/>}/>
      <Route path='/resetpassword/:token' element={<ResetPassword/>}/>
      <Route path='/subscribe' element={<Subscribe/>}/>
      <Route path='/paymentsuccess' element={<PaymentSuccess/>}/>
      <Route path='/paymentfail' element={<PaymentFail/>}/>
      <Route path='*' element={<NotFound/>}/>


      <Route path='/admin/dashboard' element={<Dashboard/>}/>
      <Route path='/admin/admincourses' element={<Course/>}/>
      <Route path='/admin/createcourse' element={<CreateCourse/>}/>
      <Route path='/admin/user' element={<User/>}/>

    </Routes>
<Footer/>
   </Router>

  );
}

export default App;
