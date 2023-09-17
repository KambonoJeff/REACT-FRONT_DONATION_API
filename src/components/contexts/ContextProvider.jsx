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
    const [user,_setUser]= useState(localStorage.getItem('USER_NAME'));
    const [ngo ,setNgo] = useState();
    const [type ,_setType] = useState(localStorage.getItem('USER_TYPE'));
    const [admin , setAdmin] = useState();
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
    const setUser = (user)=>{
        _setUser(user)
        if(user){
            localStorage.setItem('USER_NAME', user)

        }else{
            localStorage.removeItem('USER_NAME')

        }
    }
    const setType=(type)=>{
        _setType(type)
    
        if(type){
            localStorage.setItem('USER_TYPE', type)
            
        }else{
            localStorage.removeItem('USER_TYPE')

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