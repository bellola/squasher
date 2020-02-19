import React from 'react';
import List from './List'
import {connect} from 'react-redux'



function App(props) {
  return (
    <div className="App">
     <h2>SQUASHER</h2>
     {props.lists.map(list=><List title={list.title}  cards={list.cards} />
     )}
  
    </div>
  );
}

const  mapStateToProps = state =>({
  lists: state.lists
})

export default connect (mapStateToProps)(App);
