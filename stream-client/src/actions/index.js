import { SIGN_IN ,
         SIGN_OUT,
         CREATE_STREAM,
         FETCH_STREAMS,
         FETCH_STREAM,
         DELETE_STREAMS,
         EDIT_STREAMS
        } 
        from './type';

import streams from '../apis/stream';

export const signIn = (userId) => {
    return {
        //type : 'SIGN_IN'
        type : SIGN_IN,
        payload : userId
    };
};

export const signOut = () => {
    return {
        type : SIGN_OUT
        //type : 'SIGN_OUT'
    };
};

export const createStream = formValues => async dispatch => {
    const response = await streams.post('/streams', formValues);
    dispatch({
        type: CREATE_STREAM,
        payload: response.data
    });
}

/*
export const createStream = (formValues) => {
    return (dispatch) => {

    }
}
*/

export const fetchStreams = () => async dispatch => {
    const response = await streams.get('/streams');
    dispatch({
        type: FETCH_STREAMS,
        payload: response.data
    });
};

export const fetchStream = (id) => async dispatch => {
    const response = await streams.get(`/stream/${id}`);
    dispatch({
        type: FETCH_STREAM,
        payload: response.data
    });
};

export const editStream = (id , formValues) => async dispatch => {
    const response = await streams.put(`/stream/${id}`, formValues);
    dispatch({
        type: EDIT_STREAMS,
        payload: response.data
    });
};

export const deleteStream = (id) => async dispatch => {
    await streams.delete(`/stream/${id}`);
    dispatch({
        type: DELETE_STREAMS,
        payload: id
    });
};