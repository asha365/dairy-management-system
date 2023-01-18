import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './InfoSummaryCard.css';
import { FaRegBookmark, FaShareAlt } from "react-icons/fa";


const InfoSummaryCard = ({info}) => {
    const {_id, title, author, topics, details, image_url} = info;
    // console.log(info);
    return (
        <Card className="mb-5">
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div>
                    <h5>Published: {author?.published_date}</h5>
                </div>
                <div>
                    <FaRegBookmark className='me-2'></FaRegBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body className='homepage-content'>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {
                        details.length > 250 ?
                        <>{details.slice(0, 250) + '...'} <Link to={`/dms/${_id}`}>Read More</Link></>
                        :
                        details
                    }
                </Card.Text>
            </Card.Body>
            
        </Card>
    );
};

export default InfoSummaryCard;