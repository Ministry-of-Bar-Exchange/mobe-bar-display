import Script from 'next/script';
import Home from './home';

const Main = () => {
    return (
        <>
            <Script src="http://mobe-backend.herokuapp.com/socket.io/socket.io.js"></Script>
            <Home />
        </>
    );
};

export default Main;