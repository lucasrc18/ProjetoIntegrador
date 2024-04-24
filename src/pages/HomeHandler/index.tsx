import { useNavigate } from 'react-router-dom';
import BounceLoader from 'react-spinners/BounceLoader';

const centeredLoader = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
}

export default function HomeHandler() {
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