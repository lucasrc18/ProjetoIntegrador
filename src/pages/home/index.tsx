import { useState } from 'react';
import Header from './components/Header';
import LoginSection from './components/LoginSection';
import RegisterSection from './components/RegisterSection';

import './style.scss';

export default function Home(){
    const [buttonLink, setButtonLink] = useState<string>('/login');

    // https://www.hostname.com/pathname
    // if path is /login, set buttonLink to /register
    const pathname = window.location.pathname;

    /*if(pathname == '/login'){
        setButtonLink('/register');
    } else {
        setButtonLink('/login');
    }*/

    return (
        <div id="home-page">
            <Header buttonLink={buttonLink} />

            <main>
                <div id="application-preview">
                    &nbsp;
                </div>

                {
                    window.location.pathname === '/login' ? 
                        <LoginSection /> 
                        : 
                        <RegisterSection /> 
                }
            </main>
        </div>
    )
}