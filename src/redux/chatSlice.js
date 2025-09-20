import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name:"chat",
    initialState : {
        messages:[],
        status:'disconnected',
        myId:null
    },
    reducers:{
        addmessage :(state,action)=>{
            state.messages.push(action.payload)
        },
        setStatus : (state,action)=>{
            state.status = action.payload
        },
        setMyId : (state,action)=>{
            state.myId = action.payload
        }

    },
})

export const {addmessage,setStatus,setMyId} = chatSlice.actions
export default chatSlice.reducer