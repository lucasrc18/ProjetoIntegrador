import { FirebaseOptions, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

/*const firebaseConfig: FirebaseOptions = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};*/

const firebaseConfig: FirebaseOptions = {
    apiKey: "AIzaSyC_MfdsPV9oA_t7f7BvU--zbv-khVm2GI0",
    authDomain: "projetointegrador-testes.firebaseapp.com",
    databaseURL: "https://projetointegrador-testes-default-rtdb.firebaseio.com",
    projectId: "projetointegrador-testes",
    storageBucket: "projetointegrador-testes.appspot.com",
    messagingSenderId: "813912227643",
    appId: "1:813912227643:web:6bd39bab6241047477c11e"
};

const app = initializeApp(firebaseConfig);

export default app;

export const DatabaseInstance = getDatabase(app);
export const AuthInstance = getAuth(app);

export function EnvTest(){
    console.table(firebaseConfig)
}