import { server } from "../Store.js"
import axios from "axios"

export const login = (email,password) => async(dispatch)=> {
     try {
        dispatch({type:"loginRequest"});

        const {data} = await axios.post(`${server}/login`, {email,password}, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        });
           

        dispatch({ type: "loginSuccess", payload: data });

     } catch (error) {
        dispatch({ type: "loginFail", payload: error.response.data.message });
     }
};

export const register = (formdata) => async(dispatch)=> {
   if(formdata) console.log("ok");
   try {
      dispatch({type:"registerRequest"});

      const {data} = await axios.post(`${server}/register`, formdata, {
          headers: {
              "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
      });
         

      dispatch({ type: "registerSuccess", payload: data });
      console.log(data);

   } catch (error) {
      dispatch({ type: "registerFail", payload: error.response.data.message });
   }
};

export const logout = () => async(dispatch)=> {
   try {
      dispatch({type:"logoutRequest"});

      const {data} = await axios.get(`${server}/logout`, {
          withCredentials: true,
      });

      dispatch({ type: "logoutSuccess", payload: data.message });

   } catch (error) {
      dispatch({ type: "logoutFail", payload: error.response.data.message });
   }
};

export const loadUser = () => async(dispatch)=> {
    try {
       dispatch({type:"loadUserRequest"});

       const {data} = await axios.get(`${server}/me`,  
       { withCredentials: true, });
          

       dispatch({ type: "loadUserSuccess", payload: data.user });

    } catch (error) {
       dispatch({ type: "loadUserFail", payload: error.response.data.message });
    }
};

export const addToPlaylist = (id) => async (dispatch) => {
   try {
     dispatch({ type: "addPlaylistRequest" });
 
     const { data } = await axios.post(`${server}/addtoplaylist`,{id}, {
       headers: {
          "Content-Type": "application/json",
      },
       withCredentials: true,
     });

     dispatch({ type: "addPlaylistSuccess", payload: data.message });
 
   } catch (error) {
     dispatch({ type: "addPlaylistFail", payload: error.response.data.message });
   }
 };

 export const buySubscription = () => async (dispatch) => {
   try {
     dispatch({ type: "buySubscriptionRequest" });
 
     const { data } = await axios.get(`${server}/subscribe`, {
       withCredentials: true,
     });
 
     dispatch({ type: "buySubscriptionSuccess", payload: data.subscriptionId});
 
   } catch (error) {
     dispatch({ type: "buySubscriptionFail", payload: error.response.data.message });
   }
 };

 export const cancelSubscription = () => async (dispatch) => {
   try {
     dispatch({ type: "cancelSubscriptionRequest" });
 
     const { data } = await axios.get(`${server}/subscribe`, {
       withCredentials: true,
     });
 
     dispatch({ type: "cancelSubscriptionSuccess", payload: data.message});
 
   } catch (error) {
     dispatch({ type: "cancelSubscriptionFail", payload: error.response.data.message });
   }
 };

 
// export const addtoplaylist = () => async dispatch => {
//   try{
//       dispatch({ 
//           type: 'addtoplaylistRequest'
//       });

//       const config = {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         withCredentials: true,
//       } 
//        const {data} = await axios.post(`${server}/addtoplaylist`,{
//           id
//        }, config
//        );
//        dispatch({ 
//           type: 'addtoplaylistSuccess',
//           payload: data.message,

//       });
//   } catch(error) {
//       dispatch({
//           type: 'addtoplay;istFail',
//           payload: error.response.data.message,
//       })
//   };
// };

// export const removefromplaylist = () => async dispatch => {
//   try{
//       dispatch({ 
//           type: 'addtoplaylistRequest'
//       });

//       const config = {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         withCredentials: true,
//       } 
//        const {data} = await axios.post(`${server}/addtoplaylist`,{
//           id
//        }, config
//        );
//        dispatch({ 
//           type: 'addtoplaylistSuccess',
//           payload: data.message,

//       });
//   } catch(error) {
//       dispatch({
//           type: 'addtoplay;istFail',
//           payload: error.response.data.message,
//       })
//   };
// };



