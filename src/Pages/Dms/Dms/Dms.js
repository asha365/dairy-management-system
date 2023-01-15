import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const Dms = () => {
    const dmsDetailInfo = useLoaderData();
    const {title, image_url, details, category_id} = dmsDetailInfo;
    return (
        <Card>
        <Card.Img variant="top" src={image_url}/>
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
                {details}
            </Card.Text>
            <Link to={`/category/${category_id}`}>
                <Button variant="primary">All Info in this category</Button>
            </Link>
            
        </Card.Body>
        </Card>
    );
};

export default Dms;