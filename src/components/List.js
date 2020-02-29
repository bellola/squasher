import React from 'react'
import BugCard from './BugCard'
import AddButton from './AddButton'
import {Droppable, Draggable} from 'react-beautiful-dnd'
import styled from 'styled-components'

const ListContainer = styled.div`
    background-color: #dfe3e6;
    border-radius: 3px;
    width:300px;
    padding: 8px;
    margin-right: 8px;
    height: 100%;
`


function List(props){
  
    return(
        <Draggable draggableId={String(props.listID)} index={props.index}>
            {provided => (
            <ListContainer {...provided.draggableProps}  ref={provided.innerRef} {...provided.dragHandleProps} >
                <Droppable droppableId={String(props.listID)}>
                  {provided => (
                   <div {...provided.droppableProps}  ref={provided.innerRef}>
                    <h4>{props.title}</h4>
                    {props.cards.map((card, index) => 
                        <BugCard key={card.id} index={index} text={card.text} id={card.id}/>
                    )}
                   
                    {provided.placeholder}
                  </div>
                  )}
               </Droppable>
               <AddButton  listID={props.listID}  />
            </ListContainer>
            )}
            
        </Draggable>
   )
}



export default List