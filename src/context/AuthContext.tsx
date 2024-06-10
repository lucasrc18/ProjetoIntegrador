import { User, onAuthStateChanged } from "firebase/auth";
import { ReactNode, createContext, useEffect, useState } from "react";

import Auth from '../services/auth';
import { Task, Goal } from "../types/types";

type AuthContextProps = {
    children: ReactNode,
}

type ContextProps = {
    user: User,
    loadingUser: boolean
}

export const authContext = createContext({} as ContextProps);

export default function AuthContext(props: AuthContextProps){
    const [loadingUser, setLoadingUser] = useState<boolean>(true);
    const [user, setUser] = useState({} as User);

    const { children } = props;

    const { getAuth } = Auth;

    useEffect(() => {
        setLoadingUser(true);
        const unsubscribe = onAuthStateChanged(getAuth(), usr => {
            if(usr){
                setUser(usr)
                localStorage.setItem("user", JSON.stringify(user))
                localStorage.setItem("uid", user.uid)
            } else {
                setLoadingUser(false);  
                localStorage.setItem("user", "")
                localStorage.setItem("uid", "")
            }
        })

        return unsubscribe;
    }, [])

    return (
        <authContext.Provider value={{
            loadingUser,
            user
        } as ContextProps}>
            {children}
        </authContext.Provider>
    )
}