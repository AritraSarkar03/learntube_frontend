import { server } from "../Store.js"
import axios from "axios"

export const createCourse = (formData) => async dispatch => {
    try{
        dispatch({  
            type: 'createCourseRequest'
        });
         const {data} = await axios.post(`${server}/createcourse`,formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            withCredentials: true,
         });
         dispatch({ 
            type: 'createCourseSuccess',
            payload: data.courses,
        });
    } catch(error) {
        dispatch({
            type: 'createCourseFail',
            payload: error.response.data.message,
        })
    };
};

export const deleteCourse = (id) => async dispatch => {
    try{
        dispatch({ 
            type: 'deleteCourseRequest'
        });
         const {data} = await axios.delete(`${server}/course/${id}`,{
            withCredentials: true,
         });
         dispatch({ 
            type: 'deleteCourseSuccess',
            payload: data.courses,

        });
    } catch(error) {
        dispatch({
            type: 'deleteCourseFail',
            payload: error.response.data.message,
        })
    };
};

export const addLectures = (id,formData) => async dispatch => {
    try{
        dispatch({  
            type: 'addLecturesRequest'
        });
         const {data} = await axios.post(`${server}/course/${id}`,formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            withCredentials: true,
         });
         dispatch({ 
            type: 'addLecturesSuccess',
            payload: data.message,

        });
    } catch(error) {
        dispatch({
            type: 'addLecturesFail',
            payload: error.response.data.message,
        })
    };
};

export const deleteLectures = (courseId,lectureId) => async dispatch => {
    try{
        dispatch({ 
            type: 'deleteLecturesRequest'
        });
         const {data} = await axios.delete(`${server}/lecture?courseId=${courseId}&lectureId=${lectureId}`, {
            withCredentials: true,
         });
         dispatch({ 
            type: 'deleteLecturesSuccess',
            payload: data.message,

        });
    } catch(error) {
        dispatch({
            type: 'deleteLecturesFail',
            payload: error.response.data.message,
        })
    };
};

export const getAllUsers = () => async dispatch => {
    try{
        dispatch({ 
            type: 'getAllUsersRequest'
        });
         const {data} = await axios.get(`${server}/admin/users`, {
            withCredentials: true,
         });
         dispatch({ 
            type: 'getAllUsersSuccess',
            payload: data.users,

        });
    } catch(error) {
        dispatch({
            type: 'getAllUsersFail',
            payload: error.response.data.message,
        })
    };
};

export const updateUserRole = (id) => async dispatch => {
    try{
        dispatch({ 
            type: 'updateUserRoleRequest'
        });
         const {data} = await axios.get(`${server}/admin/users/${id}`,{}, {
            withCredentials: true,
         });
         dispatch({ 
            type: 'updateUserRoleSuccess',
            payload: data.message,

        });
    } catch(error) {
        dispatch({
            type: 'updateUserRoleFail',
            payload: error.response.data.message,
        })
    };
};

export const deleteUser = (id) => async dispatch => {
    try{
        dispatch({ 
            type: 'deleteUserRequest'
        });
         const {data} = await axios.delete(`${server}/admin/users/${id}`, {
            withCredentials: true,
         });
         dispatch({ 
            type: 'deleteUserSuccess',
            payload: data.message,

        });
    } catch(error) {
        dispatch({
            type: 'deleteUserFail',
            payload: error.response.data.message,
        })
    };
};

export const getAdminStats = (id) => async dispatch => {
    try{
        dispatch({ 
            type: 'getAdminStatsRequest'
        });
         const {data} = await axios.get(`${server}/admin/stats`, {
            withCredentials: true,
         });
         dispatch({ 
            type: 'getAdminStatsSuccess',
            payload: data,

        });
    } catch(error) {
        dispatch({
            type: 'getAdminStatsFail',
            payload: error.response.data.message,
        })
    };
};


