import React from 'react'
import BugCard from './BugCard'


function List(props){
    return(
        <div style={styles.container}>
            <h4>{props.title}</h4>
            {props.cards.map(card => 
                <BugCard text={card.text}/>
            )}
         

        </div>
   
    
   
   )
}







      



const styles ={
    container: {
        backgroundColor: '#ccc',
        borderRadius: 3,
        width:300,
        padding: 6

    }
}




export default List