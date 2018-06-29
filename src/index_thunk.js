import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'

const inc = () => {
	return {
		type: 'increment'
	}
}

const incSync = () => {
	return (dispatch) => {
		setTimeout(() => dispatch(inc()), 2000);
	}
}

let reducer = (state = {counter: 0}, action) => {
	console.log(action);
	switch(action.type) {
		case 'increment':
			return {
				counter: state.counter + 1
			};
		break;

		default:
			return state;
	}
}

let thunkTest = (middlewareApi) => dispatch => action => {
	if (typeof action === 'function') {
		action(dispatch);
	} else {
		dispatch(action);
	}
}

let printTest = (middlewareApi) => dispatch => action => {
	console.log(middlewareApi.getState());
	dispatch(action);
	console.log(middlewareApi.getState());
}

let store = createStore(reducer, applyMiddleware(thunkTest. printTest));
store.subscribe(() => {
	console.log(store.getState());
});

store.dispatch(inc());
store.dispatch(incSync());

