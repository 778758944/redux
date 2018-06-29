import {
	ADD_TODO,
	TOGGLE_TODO,
	SET_VISIBILITY_FILTER,
} from '../constant/'

export const addItem = (text) => {
	return {
		type: ADD_TODO,
		payload: text
	}
}


export const toggleTodo = (index) => {
	return {
		type: TOGGLE_TODO,
		payload: index,
	}
}

export const setVisibilityFilter = (filter) => {
	return {
		type: SET_VISIBILITY_FILTER, 
		payload: filter
	}
}