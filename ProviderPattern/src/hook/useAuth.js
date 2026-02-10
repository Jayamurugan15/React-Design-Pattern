import { useContext } from "react";
import { AuthContext } from "../context";

const useAuth = () => {
    const {isAuth,user,setUser,login,logout} = useContext(AuthContext);

    return {isAuth,user,setUser,login,logout};
}

export { useAuth } ;