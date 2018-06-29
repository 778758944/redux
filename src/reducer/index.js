import { combineReducers } from 'redux'
import {
	ADD_TODO,
	TOGGLE_TODO,
	SET_VISIBILITY_FILTER,
	VisibilityFilters,
} from '../constant/'

const todos = (todos = [], action) => {
	switch(action.type) {
		case ADD_TODO:
			return [...todos, {
				text: action.payload,
				completed: false,
			}];
		break;

		case TOGGLE_TODO:
			return [
				...todos.slice(0, action.payload),
				Object.assign({}, todos[action.payload], {
					completed: true,
				}),
				...todos.slice(action.payload + 1)
			]
		break;

		default: 
			return todos;
	}
}

const visibilityFilter = (visible = VisibilityFilters.SHOW_ALL, action) => {
	if (action.type === SET_VISIBILITY_FILTER) {
		return action.payload;
	}

	return visible;
}

export const todoApp = combineReducers({
	todos,
	visibilityFilter
});









