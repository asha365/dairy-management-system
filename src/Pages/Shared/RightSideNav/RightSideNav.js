import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { authContext } from '../../../contexts/AuthProvider/AuthProvider';
import FarmCarousel from '../FarmCarousel/FarmCarousel';
import FarmSocialLink from '../FarmSocialLink/FarmSocialLink';


const RightSideNav = () => {

    const {providerLogin} = useContext(authContext);
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () =>{
        providerLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error))
    }
    return (
        <div>
        <ButtonGroup vertical>
            <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle> Login with Google</Button>
            <Button variant="outline-dark"><FaFacebook></FaFacebook> Login with Facebook</Button>
        </ButtonGroup>

        <div  className='mt-4'>
            <h5>Find us on</h5>
            <FarmSocialLink></FarmSocialLink>
        </div>

        <div>
            <FarmCarousel></FarmCarousel>
        </div>
        </div>
    );
};

export default RightSideNav;