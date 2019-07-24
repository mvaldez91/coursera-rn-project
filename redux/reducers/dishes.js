import * as types from '../types';

export const dishes =
    (state = {
        isLoading: true,
        errMessage: null,
        dishes: []
    }, action) => {
        switch (action.type) {
            case type.ADD_DISHES:
                return {
                    ...state,
                    isLoading: false,
                    errMessage: null,
                    dishes: action.payload
                }
            case types.DISHES_LOADING:
                return {
                    ...state,
                    isLoading: true,
                    errMessage: null,
                    dishes: []
                }
            case types.DISHES_FAILED:
                return {
                    ...state,
                    isLoading: false,
                    errMessage: action.payload,
                    dishes: []
                }
            default:
                return state;
        }
    }