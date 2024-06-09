import { GithubAuthProvider, GoogleAuthProvider, User, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Database from './database';
import { AuthInstance } from './firebase';

type UserAuthType = {
    email: string,
    password: string,
    username: string
};

type UserEmailType = {
    email: string
}

const navigate = useNavigate();

async function registerUser(user: User, user_auth: UserAuthType | UserEmailType | null = null) {
    const { set } = Database;
    
    if(!user.email)
        throw new Error("User must have an valid email");
    
    if(!user_auth)
        user_auth = { email: user.email }

    await set(`users/${user.uid}`, {
        data: {
            uid: user.uid,
            ...user_auth
        },
        stats: {
            level: 1,
            xp: 0,
            //hp: 50,
            //maxHp: 50,
            coins: 0
        },
        inventory: [],
        tasks: [],
        goals: []
    }).then(
        () => navigate('/profile')
    ).catch(
        err => navigate('/error', { state: err })
    );
}

export default {
    /**
     *  Faz o login do usuario utilizando sua conta Google atráves do firebase
     *  @params null
     *  @returns Promise<UserCredential>
     */
    signInWithGoogle: async () => {
        const provider = new GoogleAuthProvider();
        
        await signInWithPopup(AuthInstance, provider).then(
            (result) => registerUser(result.user)
        ).catch(err => navigate('/error', { state: err }));
    },
    /**
     *  Faz o login do usuario utilizando sua conta GitHub atráves do firebase
     *  @params null
     *  @returns Promise<UserCredential>
     */
    signInWithGithub: async () => {
        const provider = new GithubAuthProvider();
        await signInWithPopup(AuthInstance, provider).then(
            (result) => registerUser(result.user)
        ).catch(err => navigate('/error', { state: err }));
    },
    /**
     *  Faz o login do usuario utilizando seu email e senha conta GitHub atráves do firebase
     *  @params null
     *  @returns Promise<UserCredential>
     */
    signInWithEmailAndPassword: async ({email, password, username}: UserAuthType) => {
        await signInWithEmailAndPassword(AuthInstance, email, password).then(
            (result) => registerUser(result.user, {email, password, username})
        ).catch(err => navigate('/error', { state: err }));
    },
    /**
     *  Faz o logout do usuario
     *  @params null
     *  @returns Promise<void>
     */
    signOut: async () => {
        await signOut(AuthInstance).then(
            response => navigate('/register')
        ).catch(
            err => navigate('/error', { state: err })
        );
    }
}