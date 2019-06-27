import { getAjax} from '../util/axios';

const GETAUTOCOMPLETELIST = 'GETAUTOCOMPLETELIST'

const initState={
	autocompletelist:[]
}

// reducer
export function autocompletes(state=initState, action){
	switch(action.type){
		case GETAUTOCOMPLETELIST:
			return {...state, autocompletelist: action.payload.data}
		default:
			return state
	}
} 

export function getAutoCompleteList(payload){
	return { type: GETAUTOCOMPLETELIST, payload }
}

export function getautocompletelist(args){
	return dispatch=>{
      getAjax('/search/notes', args,
        function(response){
            dispatch(getAutoCompleteList(response.data));
        }
      )
	}
}
