import React, {Component} from 'react'
import BugCard from './BugCard'


// function List(props){
//     return(
//         <div style={styles.container}>
//             <h4>{props.title}</h4>
//             <BugCard />

//         </div>
   
    
   
//    )
// }





class List extends Component {
   
    constructor(props) {
        super(props);
    
        this.state = {
         list:[
            {
                title:'TEST TITLE',
                id:0,
                cards:[
                   { 
                       id:0,
                    text:"hey do this"
                   },
                   {
                       id:1,
                       text:"do this too!"
                   }
                ]
            }
        ]
        };
     
      }

      
    render(){

        let myList = this.state.list

        return(
            <div style={styles.container}>

                {myList.map(list => 
                <div>
                <h2>{list.title}</h2>
                <BugCard  card={list.cards} />
                </div>
                    )}  
                
             </div>
        )
    }
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