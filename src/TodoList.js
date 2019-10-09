import React, { Component } from 'react';

class TodoList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			items: []
		};

		this.addItem = this.addItem.bind(this);
	}

	addItem(e) {

	}


	render() {
		return (
				<div className=''>
					<div className=''>
						<form onSubmit={this.addItem}>
							<input type='text' placeholder='add items'></input>
							<button type='submit'>Add</button>
						</form>
					</div>
				</div>
		);
	}
}

export default TodoList;