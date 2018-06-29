import React from 'react'
import { connect } from 'react-redux'


class Test extends React.Component{
	render() {
		const { todos } = this.props;
		return (
			<div>
				<h3>{todos[0] && todos[0].text}</h3>
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		todos: state.todos,
	}
}

export default connect(mapStateToProps)(Test);