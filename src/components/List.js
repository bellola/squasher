import React from 'react'
import BugCard from './Card'


function List(props){
    return(
        <div style={styles.container}>
            <h4>{props.title}</h4>
            <BugCard />

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