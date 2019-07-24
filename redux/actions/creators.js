import * as types from '../types';

import {baseUrl} from '../../shared/projectConfig';

const handleResponse = (response) =>{
    if (response.ok){
        return response;
    }
    else{
        var error = new Error(`Error ${response.status}: ${response.statusText}`);
        error.response = response;
        throw error;
    }
}

export const fetchComments = () => (dispatch) => {
    return fetch(baseUrl + 'comments.json')
    .then(handleResponse)
    .then(response=>response.json())
    .then(comments=>dispatch(addComments(comments)))
    .catch(error=> dispatch(commentFailed(error.message)))
};

export const commentFailed = (errMes) => ({
    type: types.COMMENTS_FAILED,
    payload: errMes
});

export const addComments = (comments)=>({
    type: types.ADD_COMMENTS,
    payload: comments
});

export const fetchDishes = () => (dispatch) => {
    dispatch({type: types.DISHES_LOADING});

    return fetch(baseUrl + 'dishes.json')
    .then(handleResponse)
    .then(response=>response.json())
    .then(dishes=>dispatch(addDishes(dishes)))
    .catch(error=> dispatch(dishesFailed(error.message)))
}

export const dishesFailed = (errMes) => ({
    type: types.DISHES_FAILED,
    payload: errMes
})

export const addDishes = (dishes)=>({
    type: types.ADD_DISHES,
    payload: dishes
})


export const fetchPromos = () => (dispatch) => {
    dispatch({type: types.PROMOS_LOADING});

    return fetch(baseUrl + 'promotions.json')
    .then(handleResponse)
    .then(response=>response.json())
    .then(promos=>dispatch(addPromos(promos)))
    .catch(error=> dispatch(promosFailed(error.message)))
}

export const promosFailed = (errMes) => ({
    type: types.PROMOS_FAILED,
    payload: errMes
})

export const addPromos = (promos)=>({
    type: types.ADD_PROMOS,
    payload: promos
})

export const fetchLeaders = () => (dispatch) => {
    dispatch({type: types.LEADERS_LOADING});

    return fetch(baseUrl + 'leaders.json')
    .then(handleResponse)
    .then(response=>response.json())
    .then(leaders=>dispatch(addLeaders(leaders)))
    .catch(error=> dispatch(leadersFailed(error.message)))
}

export const leadersFailed = (errMes) => ({
    type: types.PROMOS_FAILED,
    payload: errMes
})

export const addLeaders = (leaders)=>({
    type: types.ADD_PROMOS,
    payload: leaders
})