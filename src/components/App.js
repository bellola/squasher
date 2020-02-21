import React from 'react';
import List from './List'
import {connect} from 'react-redux'
import AddButton from './AddButton'
import {DragDropContext} from 'react-beautiful-dnd'
import {sort} from '../actions'
import styled from 'styled-components'

const ListContainer = styled.div`
  display: flex;
  flex-direction: row
`



function App(props) {

  function onEnd (result){
    //TODO
    const {destination, source, draggableId} = result
    if(!destination){
      return
    } else{
      props.dispatch(
        sort(
          source.droppableId,
          destination.droppableId,
          source.index,
          destination.index,
          draggableId
        )
      )
    }
     
  }

  return (
    <DragDropContext onDragEnd={onEnd} >
        <div className="App">
        <h2>SQUASHER</h2>
            <ListContainer>
                {props.lists.map(list=><List listID={list.id} key={list.id} title={list.title}  cards={list.cards} />
            )}
            <AddButton list />
            </ListContainer>
        </div>
    </DragDropContext>
   
  );
}

// const styles = {
//   listsContainer:{
//     display: 'flex',
//     flexDirection:'row',
//   }
// }

const  mapStateToProps = state =>({
  lists: state.lists
})

export default connect (mapStateToProps)(App);
