import React from 'react';
import ReactDom from 'react-dom';
import TodoList from './TodoList';
import './index.css';

ReactDom.render(
				<div>
					<TodoList />
				</div>,
				document.querySelector("#container")
)