import { useEffect, useState } from "react";
import { AuthContext } from "../context";

const AuthProvider = ({children}) => {
    const [user,setUser ]= useState(null)
    const [isAuth,setIsAuth ] = useState(false);

    const login = (username) = setUser(username);

    const logout = () => setUser(null)
    
    useEffect(()=>{
      setIsAuth(true)
    },[user])

    return (
        <AuthContext.Provider value={{isAuth,user,setUser,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider