import React from 'react'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

function BugCard(props){
  console.log(props)
    return(
        <Card>
       
          <Typography gutterBottom>
            {props.card.map(card=>card.text)}
          </Typography>
         
      </Card>
    )
}

// const styles = {
//     container:{}
// }

export default BugCard