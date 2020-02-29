import React, {Component} from 'react'
import Icon from '@material-ui/core/Icon'
import Card from '@material-ui/core/Card'
import TextareaAutosize from 'react-textarea-autosize';
import Button from '@material-ui/core/Button'
import {connect} from 'react-redux'
import {addList, addCard} from '../actions'



class AddButtom extends Component{

    state = {
        formOpen: false,
        text: ''
    }

    

    openForm =  () => {
            this.setState({
                formOpen: true
            })
        }

    closeForm = () => {
        this.setState({
            formOpen: false
        })
    }

    handleImputChange = (e) =>{
        this.setState({
            text: e.target.value
        })
    }

    handleAddList = () =>{
        const {dispatch} = this.props
        const {text} = this.state
        if(text){
            this.setState({
                text: ''
            })
            dispatch(addList(text))

        }

        return

    }

    handleAddCard = () =>{
        const {dispatch, listID} = this.props
        const {text} = this.state
        if(text){
            this.setState({
                text: ''
            })
            dispatch(addCard(listID, text))
        }

        return
    }

    renderAdd(){

        const {list} = this.props
        const buttonName = list ? 'Add list' : "Add card"
        const buttonOpaticy = list ? 1 : 0.5
        const buttonTextColor = list ? "white" : "inherit"
        const buttonBackground = list ? "rgba(0,0,0,.15)" : "inherit"




        return(
            <div 
            onClick={this.openForm}
            style={{
                ...styles.openButtonGroup,
                height: 36,
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
        return ( 
            <div>
                <Card
                style={{
                    minHeight: 85,
                    minWidth: 272,
                    padding: '6px 8px 2px'
                }}
                >
                    <TextareaAutosize 
                    placeholder={placeholder}
                    autoFocus
                    onBlur={this.closeForm}
                    value={this.state.text}
                    onChange={this.handleImputChange}
                    style={{
                        resize: 'none',
                        width: '100%',
                        overflow: 'hidden',
                        outline: 'none',
                        border: 'none'

                    }}
                    />
                </Card>
                <div style={styles.formButtonGroup}>
                    <Button 
                    onMouseDown={list ? this.handleAddList : this.handleAddCard}
                    variant="contained" 
                    style={{color:'white', 
                    backgroundColor:'#5aac44'}}>
                        {buttonTitle}
                        </Button>
                    <Icon style={{marginLeft:8, cursor: "pointer"}}>close</Icon>
                </div>
            </div>
        )
    }

    render(){
        return this.state.formOpen ? this.renderForm() : this.renderAdd()
    }
}

const styles = {
    openButtonGroup :{
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        borderRadius: 3,
        width: 272,
        paddingLeft: 10,
    },
    formButtonGroup:{
        marginTop: 8,
        display: 'flex',
        alignItems: 'center',
    }
}

export default connect()(AddButtom)