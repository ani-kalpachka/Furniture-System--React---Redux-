import { FETCH_PAGE_SUCCESS } from '../actions/actionTypes';

export default function FurnitureReducer (state = [], action) {
    switch(action.type) {
        case FETCH_PAGE_SUCCESS:
            return reconsile(state, action.data);
            default:
            return state;
    }
}

function reconsile(oldData, newData) {
    const newDataById = {};

    for (let entry of newData) {
        newDataById[entry.id] = entry;
    }

    const result = [];
    for (let entry of oldData) {
        if (newDataById[entry.id]) {
            result.push(newDataById[entry.id]);
            delete newDataById[entry.id];
        } else {
            result.push(entry);
        }
    }

    for (let id in newDataById) {
        result.push(newDataById[id]);
    }

    result.sort((a, b) => a.id - b.id);

    return result;
}