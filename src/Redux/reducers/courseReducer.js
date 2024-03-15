import { createReducer } from "@reduxjs/toolkit";

export const courseReducer = createReducer(
    {course:[], lectures:[]},
    {
        allCourseRequest:(state)=>{
            state.loading = true;
        },
        allCourseSuccess:(state,action)=>{
            state.loading = false;
            state.course = action.payload;
        },
        allCourseFail:(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        },
        GeolocationCourseRequest:(state)=>{
            state.loading = true; 
        },
        getCourseSuccess:(state,action)=>{
            state.loading = false;
            state.lectures = action.payload;
        },
        getCourseFail:(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        },
        addtoplaylistRequest:(state)=> {
            state.loading = true;
        },
        addtoplaylistSuccess:(state,action)=> {
            state.loading = false;
            state.message = action.payload
        },
        addtoplaylistFail:(state,action)=> {
            state.loading = false;
            state.error = action.payload
        },
    },
);
      