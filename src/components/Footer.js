import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Footer extends Component{
	renderFilter(filter, name) {
		if (filter === this.props.filter) {
			return name;
		}

		return (
			<a href="#" onClick={(e) => {
				e.preventDefault();
				this.props.onFilterChange(filter);
			}}>{name}</a>
		)
	}

	render() {
		return (
			<div>
				<p>
					Show:
					{' '}
					{this.renderFilter('SHOW_ALL', 'ALL')}
					{', '}
					{this.renderFilter('SHOW_COMPLETED', 'Complete')}
					{', '}
					{this.renderFilter('SHOW_ACTIVE', 'Active')}
					.
				</p>
			</div>
		)
	}
}

Footer.propTypes = {
	onFilterChange: PropTypes.func.isRequired,
	filter: PropTypes.oneOf([
		'SHOW_ALL',
		'SHOW_COMPLETED',
		'SHOW_ACTIVE'
		]).isRequired
}


















