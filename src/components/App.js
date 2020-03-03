import React from 'react';
import List from './List'
import {connect} from 'react-redux'
import AddButton from './AddButton'
import {DragDropContext, Droppable} from 'react-beautiful-dnd'
import {sort} from '../actions'
import styled from 'styled-components'

const ListContainer = styled.div`
  display: flex;
  flex-direction: row
`



function App(props) {

  function onEnd (result){
    const {destination, source, draggableId, type} = result
    if(!destination){
      return
    } else{
      props.dispatch(
        sort(
          source.droppableId,
          destination.droppableId,
          source.index,
          destination.index,
          draggableId,
          type
        )
      )
    }
     
  }

  return (
    <DragDropContext onDragEnd={onEnd} >
        <div className="App" style={{fontFamily:'monospace'}}>
        <h2 style={{marginBottom:100, fontFamily:"monospace"}}>SQUASH</h2>
          <Droppable droppableId="all" direction="horizontal" type="list">
            {provided => (

              <ListContainer {...provided.droppableProps} ref={provided.innerRef}>
                  {props.lists.map((list, index)=><List listID={list.id} key={list.id} title={list.title}  cards={list.cards} index={index}/>
              )}
              {provided.placeholder}
              <AddButton list />
              </ListContainer>
            )}
          </Droppable> 
        </div>
    </DragDropContext>
   
  );
}


const  mapStateToProps = state =>({
  lists: state.lists
})

export default connect (mapStateToProps)(App);
