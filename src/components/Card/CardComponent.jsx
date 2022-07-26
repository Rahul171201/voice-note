import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import { BrowserRouter, useHistory } from 'react-router-dom';
import './cardcomponent.css';

export default function CardComponent(props) {

  const history = useHistory();

  const routeChange = () => {
    let path = props.cardURL;
    history.push(path);
  }

  return (
    <div>
      <Card style={{ width: '38rem' }} className="card">
        <Card.Img variant="top" src={props.cardImage} className='cardimage' />
        <Card.Body>
          <Card.Title>{props.cardTitle}</Card.Title>
          <Card.Text>
            {props.cardText}
          </Card.Text>
          <Button variant="primary" onClick={routeChange}>
            Use This
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}
