import {createSlice} from '@reduxjs/toolkit';

// initial authstate.
const initialAuhtState = {

    // see if the user data is present in the local storage.
    user: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null,

    isSidebarOpen: false,
}

// Creating auth slice state
const authSlice  = createSlice ({
    
    name: "auth",
    initialState:initialAuhtState,
    
    reducers: {
        // state is the current data, and action 
        setCredentials: (state,action) =>{
             state.user = action.payload,
             localStorage.setItem('userInfo',JSON.stringify(action.payload))
        },

        // sets user to null and remove data from localstorage
        logout: (state,action)=> {
            state.user = null,
            localStorage.removeItem('userInfor')
        },
        
        // sidebar will collapse or be visible based on if the user is logged in or not
        setOpenSidebar: (state,action) =>{
            
            state.isSidebarOpen = action.payload
        }
    }

});

export const { setCredentials,logout,setOpenSidebar} = authSlice.actions;
export default authSlice.reducer;