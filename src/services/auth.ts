import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { AuthInstance } from './firebase';

export default {
    signInWithGoogle: async () => {
        const provider = new GoogleAuthProvider();
        return await signInWithPopup(AuthInstance, provider);
    },
    signInWithGithub: async () => {
        const provider = new GithubAuthProvider();
        return await signInWithPopup(AuthInstance, provider);
    },
    signOut: async () => {
        await signOut(AuthInstance);
    }
}