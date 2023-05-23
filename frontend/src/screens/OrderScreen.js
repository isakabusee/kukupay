import React, { useReducer, useEffect } from 'react';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

function reducer(state, action) {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, loading: true, error: '' };
        case 'FETCH_SUCCESS':
            return { ...state, loading: false, order: action.payload, error: '' };
        case 'FETCH_FAIL':
            return { ...state, loading: false, error: action.payload };
        
            default:
                return state;
    }
}

export default function OrderScreen() {
    const [{ loading, error, order }, dispatch] useReducer(reducer, { 
        loadind: true,
        order: {},
        error: '',
    });

    useEffect(()=> {

    })
  return (
    loading? 
    ( <LoadingBox></LoadingBox>)
    : 
    error ? (
        <MessageBox variant="danger">{error}</MessageBox>
    ) 
    :
    <div>
        
    </div>
  )
}
