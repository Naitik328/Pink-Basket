import {create} from 'zustand'
import axios from 'axios'
const API_URL = "http://localhost:3000/api/users"

export const useAuthStore = create((set)=>({
    user:null,
    isAuthenticated:false,
    error:null,
    isLoading:false,
    isCheckingAuth:true,

    register: async(name,email,password)=>{
        set({isLoading:true,error:null});
        try {
          const response =  await axios.post(`${API_URL}/signup`,{name,email,password})
          set({user:response.data.user, isAuthenticated:true,isLoading:false})
        } catch (error) {
            set({error:error.response.data.message || "Error signing up",isLoading:false})
            throw error
        }
    },

    verifyEmail: async(code) =>{
        set({isLoading:true,error:null})
        try {
            const response = await axios.post(`${API_URL}/verify-email`,{code});
            set({user:response.data.user,isAuthenticated:true,isLoading:false})
        } catch (error) {
            set({error:error.response.data.message || "Error verifying email" , isLoading:false})
            throw error
        }
    },
    login:async(email,password)=>{
        set({isLoading:true,error:null});
        try {
            const response = await axios.post(`${API_URL}/login`,{email,password})
            set({user:response.data.user, isAuthenticated:true,isLoading:false})
        } catch (error) {
            set({error:error.response.data.message || "Error signing in",isLoading:false})
            throw error
        }
    }
}))