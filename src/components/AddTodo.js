import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class AddTodo extends Component{
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			val: ''
		}
	}
	render() {
		return (
			<div>
				<input type="text" value={this.state.val} onChange={this.handleChange}/>
				<button onClick={this.handleClick}>Add</button>
			</div>
		)
	}

	handleChange(e) {
		const val = e.target.value;
		this.setState({
			val,
		})
	}

	handleClick(e) {
		const { val } = this.state
		this.props.onAddClick(val);
		this.setState({
			val: '',
		});
	}
}

AddTodo.propTypes = {
	onAddClick: PropTypes.func.isRequired
}