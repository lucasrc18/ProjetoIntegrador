import { onAuthStateChanged } from "firebase/auth";
import { ReactNode, createContext, useEffect, useState } from "react";

import Database from '../services/database';
import Auth from '../services/auth';
import { Task, Goal } from "../types/types";

type AuthContextProps = {
    children: ReactNode,
}

type User = { 
    uid: string, 
    email: string, 
    name: string,
    avatar: string | undefined,
    
    stats: {
        level: 1,
        xp: 0,
        coins: 0
    },
    
    friends: string[]
    inventory: string[],
    tasks: Task[],
    goals: Goal[]
}

type ContextProps = {
    user: User,
    loadingUser: boolean
}

export const authContext = createContext({} as ContextProps);

export default function AuthContext(props: AuthContextProps){
    const [loadingUser, setLoadingUser] = useState<boolean>(true);
    const [user, setUser] = useState<User>({} as User);

    const { children } = props;

    const { getAuth } = Auth;
    const { ref, once } = Database;

    useEffect(() => {
        setLoadingUser(true);
        const unsubscribe = onAuthStateChanged(getAuth(), user => {
            if(user){
                const uid = user.uid

                const users = ref('users')
                // Verificar se existe o usuario no banco de dados
                once(users, snapshot => {
                    if(snapshot.child(uid).exists()){
                        const data = snapshot.child(uid).val();
                        setUser({
                            uid: data.uid!,
                            email: data.email!,
                            name: data.name || "Jacaré Banguela",
                            avatar: data.avatar || undefined,

                            stats: {
                                coins: data.stats.coins || 0,
                                xp: data.stats.xp || 0,
                                level: data.stats.level || 1
                            },
                            friends: data.friends || [],
                            inventory: data.inventory || [],
                            tasks: data.tasks || [],
                            goals: data.goals || []
                        })
                    } else {
                        setUser({
                            uid: user.uid!,
                            email: user.email!,
                            name: user.displayName || "Jacaré Banguela",
                            avatar: undefined, 

                            stats: {
                                coins: 0,
                                xp: 0,
                                level: 1
                            },
                            friends: [],
                            inventory: [],
                            tasks: [], 
                            goals: [] // metas de boas vindas
                        })
                    }

                    setLoadingUser(false);
                })
            } else {
                setLoadingUser(false);  
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