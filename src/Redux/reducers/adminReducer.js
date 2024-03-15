import { createReducer } from "@reduxjs/toolkit";

export const adminReducer = createReducer({},
    {
        getAdminStatsRequest: (state) => {
            state.loading = true;
        },
        getAdminStatsSuccess: (state, action) => {
            state.loading = false;
            state.stats = action.payload.stats;
            state.usersCount = action.payload.usersCount;
            state.subscriptionCount = action.payload.subscriptionCount;
            state.viewsCount = action.payload.viewsCount;
            state.subscriptionPercentage = action.payload.subscriptionPercentage;
            state.viewsPercentage = action.payload.viewsPercentage;
            state.userPercentage = action.payload.userPercentage;
            state.subscriptionProfit = action.payload.subscriptionProfit;
            state.viewsProfit = action.payload.viewsProfit;
            state.usersProfit = action.payload.usersProfit;
        },
        getAdminStatsFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        getAllUsersRequest: (state) => {
            state.loading = true;
        },
        getAllUsersSuccess: (state, action) => {
            state.loading = false;
            state.user = action.payload;
        },
        getAllUsersFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        createCourseRequest: (state) => {
            state.loading = true; 
        },
        createCourseSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload;
        },
        createCourseFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        deleteUserRequest: (state) => {
            state.loading = true;
        },
        deleteUserSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload;
        },
        deleteUserFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        updateUserRoleRequest: (state) => {
            state.loading = true;
        },
        updateUserRoleSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload;
        },
        updateUserRoleFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        // getAllUsersRequest: (state) => {
        //     state.loading = true;
        // },
        // getAllUsersSuccess: (state, action) => {
        //     state.loading = false;
        //     state.message = action.payload;
        // },
        // getAllUsersFail: (state, action) => {
        //     state.loading = false;
        //     state.error = action.payload;
        // },
        deleteCourseRequest: (state) => {
            state.loading = true;
        },
        deleteCourseSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload;
        },
        deleteCourseFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        addLecturesRequest: (state) => {
            state.loading = true;
        },
        addLecturesSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload;
        },
        addLecturesFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        deleteLecturesRequest: (state) => {
            state.loading = true;
        },
        deleteLecturesSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload;
        },
        deleteLecturesFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        clearError: (state) => {
            state.error = null;
        },
        clearMessage: (state) => {
            state.message = null;
        },
    });