import { useNavigate } from 'react-router-dom';
import BounceLoader from 'react-spinners/BounceLoader';
import useAuth from '../../hooks/useAuth';
import Modal from '../../modal/modal';
import { useState } from 'react';

const centeredLoader = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
}

export default function HomeHandler() {
    const {  } = useAuth();
    const navigate = useNavigate();
    
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