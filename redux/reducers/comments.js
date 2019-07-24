import * as types from './types';

export const comments =
    (state = {
        errMessage: null,
        comments: []
    }, action) => {
        switch (action.type) {
            case type.ADD_COMMENTS:
                return {
                    ...state,
                    errMessage: null,
                    comments: action.payload
                }
         
            case types.COMMENTS_FAILED:
                return {
                    ...state,
                    errMessage: action.payload,
                    comments: []
                }
            default:
                return state;

        }
    }