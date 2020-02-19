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
        default:
            return state
    }
}

export default listReducer;