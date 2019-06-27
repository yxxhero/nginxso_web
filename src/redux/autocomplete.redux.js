import { getAjax} from '../util/axios';

const GETAUTOCOMPLETELIST = 'GETAUTOCOMPLETELIST'
const CLAENAUTOCOMPLETELIST = 'CLEANAUTOCOMPLETELIST'

const initState={
	autocompletelist:[]
}

// reducer
export function autocompletes(state=initState, action){
	switch(action.type){
		case GETAUTOCOMPLETELIST:
			return {...state, autocompletelist: action.payload.data}
		case CLAENAUTOCOMPLETELIST:
			return initState 
		default:
			return state
	}
} 

export function getAutoCompleteList(payload){
	return { type: GETAUTOCOMPLETELIST, payload }
}

export function cleanAutoCompleteList(){
	return { type: CLAENAUTOCOMPLETELIST }
}

export function getautocompletelist(args){
	return dispatch=>{
      getAjax('/autocomplete/', args,
        function(response){
            dispatch(getAutoCompleteList(response.data));
        }
      )
	}
}

export function cleanautocompletelist(){
	return dispatch=>{
        dispatch(cleanAutoCompleteList());
	}
}

