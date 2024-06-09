import { GithubAuthProvider, GoogleAuthProvider, User, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Database from './database';
import { AuthInstance } from './firebase';

export default {
    /**
     *  Faz o login do usuario utilizando sua conta Google atráves do firebase
     *  @params null
     *  @returns Promise<UserCredential>
     */
    signInWithGoogle: async () => {
        const provider = new GoogleAuthProvider();
        
        await signInWithPopup(AuthInstance, provider).then(() => {
            window.location.href = "/"
        }
        ).catch(err => {
            window.location.href = "/error/500"
        });
    },
    /**
     *  Faz o login do usuario utilizando sua conta GitHub atráves do firebase
     *  @params null
     *  @returns Promise<UserCredential>
     */
    signInWithGithub: async () => {
        const provider = new GithubAuthProvider();
        await signInWithPopup(AuthInstance, provider).then(() => {
            window.location.href = "/"
        }).catch(err => {
            window.location.href = "/error/500"
        });
    },
    /**
     *  Faz o logout do usuario
     *  @params null
     *  @returns Promise<void>
     */
    signOut: async () => {
        await signOut(AuthInstance).then(() => {
            window.location.href = "/"
        }).catch(() => {
            window.location.href = "/error/500"
        }
        );
    },
    
    getAuth: () => AuthInstance
}