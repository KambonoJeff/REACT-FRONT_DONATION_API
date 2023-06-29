 import { createContext, useContext, useState } from "react"

const StateContext = createContext({
    user:null,
    token:null,
    admin:null,
    setUser:()=>{},
    setToken:()=>{},
    setAdmin:()=>{},
    setNgo:()=>{}
})
export const ContextProvider = ({children})=>{
    const [user,setUser]= useState();
    const [ngo ,setNgo] = useState();
    const [admin , setAdmin] = useState("Admin Kambono panel");
    const [token, _setToken]= useState(localStorage.getItem('ACCESS_TOKEN'));
    const setToken =(token)=>{
        _setToken(token)

        if(token){
            localStorage.setItem('ACCESS_TOKEN', token)
            
        }
        else{
            localStorage.removeItem('ACCESS_TOKEN')
        }
    }
    return(
        <StateContext.Provider value={{
            user,
            token,
            admin,
            ngo, 
            setNgo,
            setUser,
            setAdmin,
            setToken
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext=()=>useContext(StateContext)