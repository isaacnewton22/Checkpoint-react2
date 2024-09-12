import React from 'react'
import { Card , Col} from 'react-bootstrap'

function Player({player}) {
    return (
        <Col className='mb-4'>
            <Card style={{width:'250px'}}>
                <h2>{player.numéro}</h2>
                <Card.Img  variant='top'  src={player.image} alt={player.name} style={{height: '250px'}} />
            <Card.Body>
            <Card.Title>{player.name}</Card.Title>
            <Card.Text>
                {player.equipe}
            </Card.Text>
            <Card.Text>
                {player.age}
            </Card.Text>
            <Card.Subtitle>
                {player.nationalité}
            </Card.Subtitle>
            </Card.Body>
            </Card>
        </Col>

    )
}

export default Player

