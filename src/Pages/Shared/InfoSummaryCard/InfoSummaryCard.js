import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './InfoSummaryCard.css';

const InfoSummaryCard = ({info}) => {
    const {_id, title, topics, details, image_url} = info;
    console.log(info);
    return (
        <Card className="mb-5">
            <Card.Header>Featured</Card.Header>
            <Card.Body className='homepage-content'>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {
                        details.length > 250 ?
                        <p>{details.slice(0, 250) + '...'} <Link to={`/dms/${_id}`}>Read More</Link></p>
                        :
                        <p>{details}</p>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
    );
};

export default InfoSummaryCard;