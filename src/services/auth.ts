import { GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { AuthInstance } from './firebase';

type UserAuthType = {
    email: string,
    password: string
}

export default {
    /**
     *  Faz o login do usuario utilizando sua conta Google atráves do firebase
     *  @params null
     *  @returns Promise<UserCredential>
     */
    signInWithGoogle: async () => {
        const provider = new GoogleAuthProvider();
        return await signInWithPopup(AuthInstance, provider);
    },
    /**
     *  Faz o login do usuario utilizando sua conta GitHub atráves do firebase
     *  @params null
     *  @returns Promise<UserCredential>
     */
    signInWithGithub: async () => {
        const provider = new GithubAuthProvider();
        return await signInWithPopup(AuthInstance, provider);
    },
    /**
     *  Faz o login do usuario utilizando seu email e senha conta GitHub atráves do firebase
     *  @params null
     *  @returns Promise<UserCredential>
     */
    signInWithEmailAndPassword: async ({email, password}: UserAuthType) => {
        await signInWithEmailAndPassword(AuthInstance, email, password);
    },
    /**
     *  Faz o logout do usuario
     *  @params null
     *  @returns Promise<void>
     */
    signOut: async () => {
        await signOut(AuthInstance);
    }
}