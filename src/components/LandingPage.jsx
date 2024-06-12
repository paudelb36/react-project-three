import React from 'react'
import styled from 'styled-components'
import { Button } from '../styled/Button'


const LandingPage = ({toggle}) => {
    return (
        <Container>
            <div>
                <img src="./images/dices 1.jpg" alt="" />
            </div>
            <div className='content'>
                <h1>DICE GAME</h1>
                <Button onClick={toggle}>Play Now</Button>
            </div>
        </Container>
    )
}

export default LandingPage

const Container = styled.div`
    max-width: 1180px;
    height: 100vh;
    display: flex;
    margin: 0 auto;
    align-items: center;
    gap: 20px;

    .content{
        h1{
            font-size: 96px;
            white-space: nowrap;
        }
    }
`;


