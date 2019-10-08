import React, { Component } from 'react';

class TodoList extends Component {
	render() {
		return (
				<div className=''>
					<div className=''>
						<form>
							<input type='text' placeholder='add items'></input>
							<button type='submit'>Add</button>
						</form>
					</div>
				</div>
		);
	}
}

export default TodoList;