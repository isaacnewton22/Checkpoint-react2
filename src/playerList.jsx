import React from 'react'
import {players} from './players'
import Player from './Player'
import { Container, Row, } from 'react-bootstrap'

function playerList() {
    return (
        <Container fluid="md">
        <Row>
            {
                players.map(player => <Player player={player} />)
            }
        </Row>
        </Container>
    )

    /* return (
    <div>
        <ul>
            {
                players.map(player => <Player player={player} />)
            }
        </ul>
    </div>
    ) */
}

export default playerList