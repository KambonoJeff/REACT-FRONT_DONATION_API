 import { createContext, useContext, useState } from "react"

const StateContext = createContext({
    user:null,
    token:null,
    admin:null,
    ngo:null,
    type:null,
    setUser:()=>{},
    setType:()=>{},
    setToken:()=>{},
    setAdmin:()=>{},
    setNgo:()=>{}
})
export const ContextProvider = ({children})=>{
    const [user,setUser]= useState();
    const [ngo ,setNgo] = useState();
    const [type ,setType] = useState();

    const [admin , setAdmin] = useState("Admin");
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
            type, 
            setNgo,
            setUser,
            setAdmin,
            setToken,
            setType
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext=()=>useContext(StateContext)