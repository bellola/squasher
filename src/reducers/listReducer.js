const initialState = [
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

const listReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default listReducer;