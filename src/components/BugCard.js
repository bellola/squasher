import React from 'react'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import {Draggable} from 'react-beautiful-dnd'
import styled from 'styled-components'

const CardContainer = styled.div`
  margin-bottom: 8px
`

function BugCard(props){
    return(
      <Draggable draggableId={String(props.id)} index={props.index}>
        {provided => (
            <CardContainer ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
         
                <Card>
                  <CardContent>
                    <Typography gutterBottom>{props.text}</Typography>
                  </CardContent>
                </Card>
         
            </CardContainer>
        )}
      </Draggable>
    
    )
}



export default BugCard