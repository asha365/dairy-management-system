import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaFacebook } from "react-icons/fa";
import FarmCarousel from '../FarmCarousel/FarmCarousel';
import FarmSocialLink from '../FarmSocialLink/FarmSocialLink';


const RightSideNav = () => {
    return (
        <div>
        <ButtonGroup vertical>
            <Button className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle> Login with Google</Button>
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