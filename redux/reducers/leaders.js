import * as types from '../types';

export const leaders =
    (state = {
        isLoading: true,
        errMessage: null,
        leaders: []
    }, action) => {
        switch (action.type) {
            case type.ADD_LEADERS:
                return {
                    ...state,
                    isLoading: false,
                    errMessage: null,
                    leaders: action.payload
                }
            case types.LEADERS_LOADING:
                return {
                    ...state,
                    isLoading: true,
                    errMessage: null,
                    leaders: []
                }
            case types.LEADERS_FAILED:
                return {
                    ...state,
                    isLoading: false,
                    errMessage: action.payload,
                    leaders: []
                }
            default:
                return state;
        }
    }