import { useNavigate } from 'react-router-dom';
import BounceLoader from 'react-spinners/BounceLoader';
import useAuth from '../../hooks/useAuth';
import Modal from '../../modal/modal';
import { useEffect, useState } from 'react';

const centeredLoader = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
}

export default function HomeHandler() {
    const navigate = useNavigate();
    
    useEffect(() => {
        if(localStorage.uid != "") {
            navigate('/login')
        } else {
            if(localStorage.getItem("user") != ""){
                navigate("/profile")
            } else {
                navigate("/login")
            }
        }
    }, [])

    return (
        <div style={centeredLoader}>
            <BounceLoader
                color="#3B194D"
                loading={true}
                speedMultiplier={1.1}
                size={200}
                onClick={() => navigate('/error/404')}
            />
        </div>
    )
}