import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaFacebook, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import FarmCarousel from '../FarmCarousel/FarmCarousel';


const RightSideNav = () => {
    return (
        <div>
        <ButtonGroup vertical>
            <Button className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle> Login with Google</Button>
            <Button variant="outline-dark"><FaFacebook></FaFacebook> Login with Facebook</Button>
        </ButtonGroup>

        <div  className='mt-4'>
            <h5>Find us on</h5>
            <ListGroup>
                <ListGroup.Item className='mb-2'><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                <ListGroup.Item className='mb-2'><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                <ListGroup.Item className='mb-2'><FaWhatsapp></FaWhatsapp> WhatsApp</ListGroup.Item>
                <ListGroup.Item className='mb-2'><FaYoutube></FaYoutube> Youtube</ListGroup.Item>
                <ListGroup.Item className='mb-2'>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
        </div>

        <div>
            <FarmCarousel></FarmCarousel>
        </div>
        </div>
    );
};

export default RightSideNav;