import { combineReducers } from 'redux'
import { searchnotes } from './redux/search.redux'
import { autocompletes } from './redux/autocomplete.redux'

export default combineReducers({
    searchnotes,
    autocompletes
})
