import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import {
	addItem,
	toggleTodo,
	setVisibilityFilter,
} from '../action'
import {
	VisibilityFilters,
} from '../constant'
import Footer from '../components/Footer'
import AddTodo from '../components/AddTodo'
import PropTypes from 'prop-types'


class App extends Component {
	render() {
		// 通过connect注入
		console.log(this.props);
		const { dispatch, visibleTodos, visibilityFilter } = this.props;
		return (
			<div>
				<AddTodo
					onAddClick={text => {
						dispatch(addItem(text));
					}}
				/>
				<TodoList
					todos={visibleTodos}
					onTodoClick={index => dispatch(toggleTodo(index))}
				/>
				<Footer
					filter={visibilityFilter}
					onFilterChange={nextFilter => dispatch(setVisibilityFilter(nextFilter))}
				/>
			</div>
		)
	}
}

App.propTypes = {
	visibleTodos: PropTypes.arrayOf(PropTypes.shape({
		text: PropTypes.string.isRequired,
		completed: PropTypes.bool.isRequired
	}).isRequired).isRequired,
	visibilityFilter: PropTypes.oneOf([
		'SHOW_ALL',
		'SHOW_COMPLETED',
		'SHOW_ACTIVE',
	]).isRequired
}

const getVisibleTodos = (todos, filter) => {
	switch (filter) {
		case 'SHOW_COMPLETED':
			return todos.filter(t => t.completed);
		break;

		case 'SHOW_ACTIVE':
			return todos.filter(t => !t.completed);
		break;

		case 'SHOW_ALL':
		default: 
			return todos
	}
}

function mapStateToProps(state) {
	return {
		visibleTodos: getVisibleTodos(state.todos, state.visibilityFilter),
		visibilityFilter: state.visibilityFilter,
	}
}

export default connect(mapStateToProps)(App)






















