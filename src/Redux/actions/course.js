import { server } from "../Store.js"
import axios from "axios"

export const getAllCourses = (category="", keyword="") => async dispatch => {
    try{
        dispatch({ 
            type: 'allCourseRequest'
        });
         const {data} = await axios.get(`${server}/courses?keyword=${keyword}&category=${category}`,{
            withCredentials: true,
         });
         dispatch({ 
            type: 'allCourseSuccess',
            payload: data.courses,

        });
    } catch(error) {
        dispatch({
            type: 'allCourseFail',
            payload: error.response.data.message,
        })
    };
};

export const getCourseLectures = id => async dispatch => {
    try{
        dispatch({ 
            type: 'getCourseRequest'
        });
         const {data} = await axios.get(`${server}/course/${id}`,{
            withCredentials: true,
          });
         dispatch({ 
            type: 'getCourseSuccess',
            payload: data.lectures,

        });
    } catch(error) {
        dispatch({
            type: 'getCourseFail',
            payload: error.response.data.message,
        })
    };
};