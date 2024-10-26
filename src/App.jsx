import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
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
import ResetPassword from './Components/Auth/ResetPassword'; // deprecated
import Contact from './Components/Contact';
import RequestCourse from './Components/RequestCourse';
import AboutUs from './Components/AboutUs';
import Subscribe from './Components/Payments/Subscribe'; // subscribe
import PaymentSuccess from './Components/Payments/PaymentSuccess';
import PaymentFail from './Components/Payments/PaymentFail'; // fail
import NotFound from './Components/NotFound/NotFound';
import CoursePage from './CoursePage/CoursePage';
import CreateCourse from './Components/Admin/CreateCourse/CreateCourse';
import Course from './Components/Admin/Course/Course'; // eslint-disable-
import User from './Components/Admin/User/User'; // eslint-disable-
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { loadUser } from './Redux/actions/user';
import { ProtectedRoute } from "protected-route-react"
import Loader from './Components/Layout/Loader';

export const LoginRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(-2);
  }, [navigate]);

  return null;
};

function App() {
  window.addEventListener('contextmenu', e => {
    e.preventDefault();
  });

  const { isAuthenticated, user, message, error, loading } = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearError' });
    }
  }, [dispatch, error, message]);

  useEffect(() => {
    dispatch(loadUser())
  }, [dispatch]);



  return (
    <Router>
      {
        loading ? (<Loader />) : (
          <>
            <Header isAuthenticated={isAuthenticated} user={user}/>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={
                <ProtectedRoute isAuthenticated={isAuthenticated} redirect="/signin">
                  <LoginRedirect/>
                </ProtectedRoute>} />
              <Route path='/profile' element={
                <ProtectedRoute isAuthenticated={isAuthenticated} redirect="/signin">
                  <Profile user={user} />
                </ProtectedRoute>} />
              <Route path='/changepassword' element={
                <ProtectedRoute isAuthenticated={isAuthenticated} redirect="/signin">
                  <ChangePassword />
                </ProtectedRoute>} />
              <Route path='/signin' element={
                <ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/profile">
                  <SignIn />
                </ProtectedRoute>} />
              <Route path='/about' element={<AboutUs />} />
              <Route path='/register' element={
                <ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/profile">
                  <Register />
                </ProtectedRoute>} />
              <Route
                path='/resetpassword/:token'
                element={
                  <ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/profile">
                    <ResetPassword />
                  </ProtectedRoute>
                }
              />
              <Route path='/forgetpassword' element={
                <ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/profile">
                  <ForgetPassword />
                </ProtectedRoute>} />
              <Route path='/updateprofile' element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <UpdateProfile user={user} />
                </ProtectedRoute>} />
              <Route path='/courses' element={<Courses />} />
              <Route path='/courses/:id' element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <CoursePage user={user} />
                </ProtectedRoute>
              } />
              <Route path='/requestcourse' element={<RequestCourse />} />
              <Route path='/contactus' element={<Contact />} />
              <Route path='/subscribe' element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Subscribe user={user} />
                </ProtectedRoute>} />
              <Route path='/paymentsuccess' element={<PaymentSuccess />} />
              <Route path='/paymentfail' element={<PaymentFail />} />
              <Route path='*' element={<NotFound />} />


              <Route path='/admin/dashboard' element={
                <ProtectedRoute adminRoute={true}
                  isAuthenticated={isAuthenticated}
                  isAdmin={user && user.role === "admin"}>
                  <Dashboard />
                </ProtectedRoute>} />
              <Route path='/admin/admincourses' element={
                <ProtectedRoute adminRoute={true}
                  isAuthenticated={isAuthenticated}
                  isAdmin={user && user.role === "admin"}>
                  <Course />
                </ProtectedRoute>} />
              <Route path='/admin/createcourse' element={
                <ProtectedRoute adminRoute={true}
                  isAuthenticated={isAuthenticated}
                  isAdmin={user && user.role === "admin"}>
                  <CreateCourse />
                </ProtectedRoute>} />
              <Route path='/admin/user' element={
                <ProtectedRoute adminRoute={true}
                  isAuthenticated={isAuthenticated}
                  isAdmin={user && user.role === "admin"}>
                  <User />
                </ProtectedRoute>} />

            </Routes>
            <Footer />
            <Toaster />
          </>
        )
      }
    </Router>

  );
}

export default App;
