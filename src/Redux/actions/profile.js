import { server } from "../Store.js"
import axios from "axios"

export const updateprofile = (name, email) => async dispatch => {
    try{
        dispatch({ 
            type: 'updateProfileRequest'
        });
         const {data} = await axios.put(`${server}/updateprofile`, {email,name}, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        });
         dispatch({ 
            type: 'updateProfileSuccess',
            payload: data.message,

        });
    } catch(error) {
        dispatch({
            type: 'updateProfileFail',
            payload: error.response.data.message,
        })
    };
};

export const changepassword = (oldPassword, newPassword) => async dispatch => {
    try{
        dispatch({ 
            type: 'changePasswordRequest'
        });
         const {data} = await axios.put(`${server}/changepassword`, {oldPassword, newPassword}, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        });
         dispatch({ 
            type: 'changePasswordSuccess',
            payload: data.message,

        });
    } catch(error) {
        dispatch({
            type: 'changePasswordFail',
            payload: error.response.data.message,
        })
    };
};

export const forgetpassword = (email) => async dispatch => {
    try{
        dispatch({ 
            type: 'forgetPasswordRequest'
        });
         const {data} = await axios.put(`${server}/forgetpassword`, {email}, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        });
         dispatch({ 
            type: 'forgetPasswordSuccess',
            payload: data.message,

        }); 
    } catch(error) {
        dispatch({
            type: 'forgetPasswordFail',
            payload: error.response.data.message,
        })
    };
};

export const resetpassword = (token, Password) => async (dispatch) => {
    try {
        dispatch({
            type: 'resetPasswordRequest',
        });
        const { data } = await axios.put(
            `${server}/resetpassword/${token}`,
            { Password }, // Ensure consistent parameter names
            {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
            }
        );
        dispatch({
            type: 'resetPasswordSuccess',
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: 'resetPasswordFail',
            payload: error.response?.data.message || 'Something went wrong.',
        });
    }
};


export const updateprofilepic = formdata => async dispatch => {
    try{
        dispatch({ 
            type: 'updateProfilePicRequest'
        });
         const {data} = await axios.put(`${server}/updateprofilepic`, formdata, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            withCredentials: true,
        });
         dispatch({ 
            type: 'updateProfilePicSuccess',
            payload: data.message,

        });
    } catch(error) {
        dispatch({
            type: 'updateProfilePicFail',
            payload: error.response.data.message,
        })
    };
};
  
  export const removeFromPlaylist = (id) => async(dispatch)=> {
    try {
        dispatch({ type: "removefromPlaylistRequest" });
    
        const {data} = await axios.delete(`${server}/removefromplaylist?id=${id}`, {
          withCredentials: true,
        });
    
        dispatch({ type: "removefromPlaylistSuccess", payload: data.message });
    
      } catch (error) {
        dispatch({ type: "removefromPlaylistFail", payload: error.response.data.message });
      }
    };