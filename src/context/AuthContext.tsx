import { ReactNode, createContext } from "react";

type AuthContextProps = {
    children: ReactNode,
}

type User = { 
    uid: string, 
    email: string, 
    name: string,
    
}

type ContextProps = {
    user: User,
    loading: boolean
}


export const authContext = createContext({} as ContextProps);

export default function AuthContext(props: AuthContextProps){
    const { children } = props;
    
    return (
        <authContext.Provider value={{} as ContextProps}>
            {children}
        </authContext.Provider>
    )
}