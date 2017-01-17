import axios from 'axios';
import jwtdecode from 'jwt-decode';
import {browserHistory} from 'react-router';
import {AUTH_USER,AUTH_ERROR,LOGOUT_USER,FETCH_POST,ADD_POST,POST_SHOW,
    FETCH_POST_SUCCESS,POST_SHOW_SUCCESS,VOTE_POLL,
USER_INFO_SUCCESS,USER_INFO} from './types';
const ROOT_URL = 'http://voting-app.dev';
export function loginUser({email,password}){
  return function(dispatch){
      axios.post(`${ROOT_URL}/api/login`,{email,password})
        .then(response => {
          dispatch({type: AUTH_USER,
            payload:response.data.token             
          });
          localStorage.setItem('token',response.data.token);
          browserHistory.push("/");
        })

        .catch(()=>{
          dispatch(authError("Invalid, Required Field"));
        });
  }

}


export function userInfo(){
    return dispatch => { 
        axios.get(`${ROOT_URL}/api/userinfo`,{
      headers:{authorization:`Bearer`+localStorage.getItem('token')}
        })
            .then(response =>{
                dispatch({
                    type:USER_INFO_SUCCESS,
                    payload:response
                })
            })
    }
}


export function registerUser({email,password}){
    return function(dispatch){
        axios.post(`${ROOT_URL}/api/register`,{email,password})
          .then(response =>{
            dispatch({type:AUTH_USER});
            localStorage.setItem('token',response.data.token);
            browserHistory.push('/posts');
          })
          .catch(response => dispatch(authError(response.data.error)));

    }
}

export function addPost({title,options}){
  return function(dispatch){
    axios.post(`${ROOT_URL}/api/poll`,{title,options},
      {
      headers:{authorization:`Bearer`+localStorage.getItem('token')}
    })
    .then(response => {
        console.log(response);
      dispatch({
        type:ADD_POST,
        payload:response
      })
    })
  }
}

export function fetchPost(){
    return dispatch => {
     dispatch({type:FETCH_POST});
      axios.get(`${ROOT_URL}/api/poll`,{
       headers: { authorization: localStorage.getItem('token') }
      })
        .then(response =>{
            dispatch(fetchPostSuccess(response));
        })
    }
}

export function fetchPostSuccess(posts){
    return {
        type:FETCH_POST_SUCCESS,
        payload:posts
    };
}


export function PostShow(id){
    return dispatch =>{
     dispatch({type:POST_SHOW});
      axios.get(`${ROOT_URL}/api/poll/${id}`,{
       headers: { authorization: localStorage.getItem('token') }
      })
        .then(response =>{
            dispatch(postShowSuccess(response));
        })

    }
}

export function postShowSuccess(post){
    return {
        type:POST_SHOW_SUCCESS,
        payload:post
    };
}


export function authError(error){
    return {
      type:AUTH_ERROR,
      payload:error
    }
}

export function logoutUser() {
  localStorage.removeItem('token');
  return { type: LOGOUT_USER };
}

export function votePoll(id){
    return function(dispatch){
        axios.post(`${ROOT_URL}/api/option/${id}`,
            {
                headers:{authorization:`Bearer`+localStorage.getItem('token')}
            })
            .then(response => {
                console.log(response);
                dispatch({
                    type:VOTE_POLL,
                    payload:response
                })
            })
    }
}