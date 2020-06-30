import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
}  from './constants';

//an action is an object that we created
//payload is a usual name for whatever data we are sending
//Action creators are functions that create actions.
//setSearchField is an action creator
export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})


/*
The dispatch() function can be accessed directly from the store as store.dispatch(), but more likely
you'll access it using a helper like react-redux's connect().
You can use bindActionCreators() to automatically bind many action creators to a dispatch() function.
*/


// Double parenthesis makes requestRobots a higher order function, 
// the returned function will take dispatch function as the second parameter
export const requestRobots = () => (dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING });
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }))
}