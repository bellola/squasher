import React from 'react';
import List from './List'
import {connect} from 'react-redux'



function App(props) {
  return (
    <div className="App">
     <h2>SQUASHER</h2>
     <div style={styles.listsContainer}>
        {props.lists.map(list=><List title={list.title}  cards={list.cards} />
     )}
     </div>
    </div>
  );
}

const styles = {
  listsContainer:{
    display: 'flex',
    flexDirection:'row',
  }
}

const  mapStateToProps = state =>({
  lists: state.lists
})

export default connect (mapStateToProps)(App);
