import {CONSTANTS} from "../actions"

export const addList = title => {
    return{
        type:CONSTANTS.ADD_LIST,
        payload:title
    }
}

export const sort = (
   dropabbleIdStart,
    dropabbleIdEnd,
    droppableIndexStart,
    droppableIndexEnd,
    draggableId,
    type
) => {
    return {
        type: CONSTANTS.DRAG_HAPPENED,
        payload:{
            dropabbleIdStart,
            dropabbleIdEnd,
            droppableIndexStart,
            droppableIndexEnd,
            draggableId,
            type
        }
    }
}