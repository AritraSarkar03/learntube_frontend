import { createReducer } from "@reduxjs/toolkit";

export const profileReducer = createReducer(
    {},
    {
      updateProfileRequest:(state)=>{
        state.loading = true;
      },
      updateProfileSuccess:(state,action)=>{
        state.loading = false;
        state.message = action.payload;
      },
      updateProfileFail:(state,action)=>{
        state.loading = false;
        state.error = action.payload;
      },
      changePasswordRequest:(state)=>{
        state.loading = true;
      },
      changePasswordSuccess:(state,action)=>{
        state.loading = false;
        state.message = action.payload;
      },
      changePasswordFail:(state,action)=>{
        state.loading = false;
        state.error = action.payload;
      },
      forgetPasswordRequest:(state)=>{
        state.loading = true;
      },
      forgetPasswordSuccess:(state,action)=>{
        state.loading = false;
        state.message = action.payload;
      },
      forgetPasswordFail:(state,action)=>{
        state.loading = false;
        state.error = action.payload;
      },
      resetPasswordRequest:(state)=>{
        state.loading = true;
      },
      resetPasswordSuccess:(state,action)=>{
        state.loading = false;
        state.message = action.payload;
      },
      resetPasswordFail:(state,action)=>{
        state.loading = false;
        state.error = action.payload;
      },
      updateProfilePicRequest:(state)=>{
        state.loading = true;
      },
      updateProfilePicSuccess:(state,action)=>{
        state.loading = false;
        state.message = action.payload;
      },
      updateProfilePicFail:(state,action)=>{
        state.loading = false;
        state.error = action.payload;
      },
      removefromPlaylistRequest: (state, action) => {
        state.loading = true;
    },
    removefromPlaylistSuccess: (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
    },
    removefromPlaylistFail: (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.user = action.payload;
    },
      clearError: (state) => {
        state.error = null;
    },
    clearMessage: (state) => {
        state.message = null;
    },
 } 
);


