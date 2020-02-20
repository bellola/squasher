import React, {Component} from 'react'
import Icon from '@material-ui/core/Icon'

class AddButtom extends Component{

    state = {
        formOpen: false
    }

    

    openForm =  () => {
            this.setState({
                formOpen: true
            })
        }

    renderAdd(){

        const {list} = this.props
        const buttonName = list ? 'Add another list' : "Add another card"
        const buttonOpaticy = list ? 1 : 0.5
        const buttonTextColor = list ? "white" : "inherit"
        const buttonBackground = list ? "rgba(0,0,0.15)" : "inherit"




        return(
            <div 
            onClick={this.openForm}
            style={{
                ...styles.buttonContainer,
                opacity:buttonOpaticy, 
                color:buttonTextColor, 
                backgroundColor:buttonBackground
                }} >
                <Icon>add</Icon>
                <p>{buttonName}</p>
            </div>
        )
    }

    

    renderForm(){
        const {list} = this.props
        const buttonTitle = list ? "Add list" : "Add Card"
        const placeholder = list ? "Enter list title..." : "Enter a title for this card..."
        return  <p>Hello</p>
    }

    render(){
        return this.state.formOpen ? this.renderForm() : this.renderAdd()
    }
}

const styles = {
    buttonContainer :{
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        borderRadius: 3,
        heigh: 36,
        width: 270,
        paddingLeft: 10
    }
}

export default AddButtom