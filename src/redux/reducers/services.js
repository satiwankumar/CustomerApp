import {GET_SERVICES,SERVICES_ERROR} from '../actions/types'

const initialState = {
    Services :[],
    loading:true,
}

export default function(state = initialState, action){
    const {type,payload }=action

    switch(type){
        case GET_SERVICES:
            console.log('REDUCER OF SERIVES',payload)
            return {
                ...state,
                loading:false,
                Services:payload,
            }
        case SERVICES_ERROR:
            return{
                ...state,
                loading:false,
                Services:[],
            }
       
        default:
                return state;
         }   
}