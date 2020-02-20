import { CONSTANTS} from '../actions'

let listID = 2

const initialState = [
    {
        title:'First List',
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
    },
    {
        title:'Second List',
        id:1,
        cards:[
           { 
               id:0,
            text:"Wow this bug is annoying"
           },
           {
               id:1,
               text:"console.log('HELP ME')!"
           },
           {
               id:2,
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
                id: listID,
                cards:[]}
                listID +=1
                return [...state, newList]
        default:
            return state
    }
}

export default listReducer;