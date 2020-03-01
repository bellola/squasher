import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {Draggable} from 'react-beautiful-dnd'
import styled from 'styled-components'

const CardContainer = styled.div`
  margin: 0 0 8px 0;
  position: relative;
  max-width: 100%;
  word-wrap: break-word;
`

function BugCard(props){
    return(
      <Draggable draggableId={String(props.id)} index={props.index}>
        {provided => (
            <CardContainer ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
         
                <Card>
                  <CardContent>
                    <h3>{props.text}</h3>
                  </CardContent>
                </Card>
         
            </CardContainer>
        )}
      </Draggable>
    
    )
}



export default BugCard