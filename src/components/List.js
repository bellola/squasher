import React from 'react'
import BugCard from './BugCard'
import AddButton from './AddButton'


function List(props){
    return(
        <div style={styles.container}>
            <h4>{props.title}</h4>
            {props.cards.map(card => 
                <BugCard key={card.id} text={card.text}/>
            )}
             <AddButton />
        </div>
       
   )
}


const styles ={
    container: {
        backgroundColor: '#ccc',
        borderRadius: 3,
        width:300,
        padding: 8,
        marginRight: 8
    }
}




export default List