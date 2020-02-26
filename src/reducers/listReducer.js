import { CONSTANTS} from '../actions'

let listID = 2
let cardID = 5

const initialState = [
    {
        title:'First List',
        id:`list-${0}`,
        cards:[
           { 
               id:`card-${0}`,
            text:"hey do this"
           },
           {
               id:`card-${1}`,
               text:"do this too!"
           }
        ]
    },
    {
        title:'Second List',
        id:`list-${1}`,
        cards:[
           { 
               id:`card-${2}`,
            text:"Wow this bug is annoying"
           },
           {
               id:`card-${3}`,
               text:"console.log('HELP ME')!"
           },
           {
               id:`card-${4}`,
               text:"HELLo worLd"
           }
        ]
    }
]

const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.ADD_LIST:
            const newList = {
                title: action.payload,
                id: `list-${listID}`,
                cards:[]}
                listID +=1
                return [...state, newList]

        case CONSTANTS.ADD_CARD:{
           const newCard = {
                text: action.payload.text,
                id: `card-${cardID}`
           } 
           cardID += 1

           const newState = state.map(list => {
               if(list.id === action.payload.listID){
                   return {
                       ...list,
                       cards: [...list.cards, newCard]
                   }
               } else{
                   return list
               }
           })
        

           return newState

        }
        case CONSTANTS.DRAG_HAPPENED:
            const{ dropabbleIdStart,
                dropabbleIdEnd,
                droppableIndexStart,
                droppableIndexEnd,
                draggableId} = action.payload
            const newState = [...state]

            //same list
            if(dropabbleIdStart === dropabbleIdEnd){
                const list = state.find(list => dropabbleIdStart === list.id)
                const card = list.cards.splice(droppableIndexStart, 1)
                list.cards.splice(droppableIndexEnd, 0, ...card)
            }

            //another list
            if(dropabbleIdStart !== dropabbleIdEnd){
                //find list where drag happened
                const listStart = state.find(list =>dropabbleIdStart === list.id)

                //pull card from list
                const card = listStart.cards.splice(droppableIndexStart, 1)

                //find list where card is dropped
                const listEnd = state.find(list => dropabbleIdEnd === list.id )

                listEnd.cards.splice(droppableIndexEnd, 0, ...card)
            }


            

            return newState
           
        default:
            return state
    }
}

export default listReducer;