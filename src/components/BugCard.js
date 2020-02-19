import React from 'react'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

function BugCard(props){
  console.log(props)
    return(
        <Card style={styles.cardContainer}>
        <CardContent>
          <Typography gutterBottom>{props.text}</Typography>
        </CardContent>
    
         
      </Card>
    )
}

const styles = {
  cardContainer:{
    marginBottom: 8
  }
}


export default BugCard