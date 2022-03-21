import React from 'react';
import './cardcomponent.css';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";

export default function CardComponent(props) {
  return (
    <div>
        <Card style={{ width: '38rem' }} className="card">
          <Card.Img variant="top" src="./assets/voicetotext.png" className='cardimage' />
          <Card.Body>
            <Card.Title>{props.cardTitle}</Card.Title>
            <Card.Text>
              {props.cardText}
            </Card.Text>
            <Button variant="primary">Use This</Button>
          </Card.Body>
        </Card>
    </div>
  )
}
