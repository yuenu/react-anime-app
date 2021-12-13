import React from 'react'
import styled from 'styled-components'

interface Props {

}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: cetner;
`

function HomePage(props: Props) {
  return (
    <Container>
      <h1>Hot Anime</h1>
    </Container>
  )
}

export default HomePage
