import React from 'react'
import {
  Container,
  Desc
} from './description.elements'

function Description(props: {desc: any}) {

  return (
    <Container>
      <Desc>
        {props?.desc}
      </Desc>
    </Container>
  )
}

export default Description