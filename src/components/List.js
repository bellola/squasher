import React from 'react'
import BugCard from './BugCard'
import AddButton from './AddButton'
import {Droppable} from 'react-beautiful-dnd'


function List(props){
  
    return(
        <Droppable droppableId={String(props.listID)}>
           {(provided) => (
                <div {...provided.droppableProps}  ref={provided.innerRef}  style={styles.container}>
                <h4>{props.title}</h4>
                {props.cards.map((card, index) => 
                    <BugCard key={card.id} index={index} text={card.text} id={card.id}/>
                )}
                <AddButton  listID={props.listID}  />
                {provided.placeholder}
            </div>
           )}
        </Droppable>
   )
}


const styles ={
    container: {
        backgroundColor: '#ccc',
        borderRadius: 3,
        width:300,
        padding: 8,
        marginRight: 8,
        height: "100%"
    }
}




export default List