import { ReactNode, createContext } from "react";

type AuthContextProps = {
    children: ReactNode,
}

type ContextProps = {

}

const authContext = createContext({} as ContextProps);

export default function AuthContext(props: AuthContextProps){
    const { children } = props;
    
    return (
        <authContext.Provider value={{}}>
            {children}
        </authContext.Provider>
    )
}