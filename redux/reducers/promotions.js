import * as types from '../types';

export const promotions =
    (state = {
        isLoading: true,
        errMessage: null,
        promotions: []
    }, action) => {
        switch (action.type) {
            case type.ADD_PROMOS:
                return {
                    ...state,
                    isLoading: false,
                    errMessage: null,
                    promotions: action.payload
                }
            case types.PROMOS_LOADING:
                return {
                    ...state,
                    isLoading: true,
                    errMessage: null,
                    promotions: []
                }
            case types.PROMOS_FAILED:
                return {
                    ...state,
                    isLoading: false,
                    errMessage: action.payload,
                    promotions: []
                }
            default:
                return state;
        }
    }