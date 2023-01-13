import React from 'react';
import { FaFacebook, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';

const FarmSocialLink = () => {
    return (
        <ListGroup>
                <ListGroup.Item className='mb-2'><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                <ListGroup.Item className='mb-2'><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                <ListGroup.Item className='mb-2'><FaWhatsapp></FaWhatsapp> WhatsApp</ListGroup.Item>
                <ListGroup.Item className='mb-2'><FaYoutube></FaYoutube> Youtube</ListGroup.Item>
                <ListGroup.Item className='mb-2'>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
    );
};

export default FarmSocialLink;