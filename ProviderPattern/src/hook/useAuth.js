import { useContext } from "react";
import { AuthContext } from "../context";

const useAuth = () => {
    const {user,login,logout} = useContext(AuthContext);

    return {user,login,logout};
}

export { useAuth } ;