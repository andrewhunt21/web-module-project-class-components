// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

class TodoList extends React.Component {

    render() {
        return (
            <div>
                {this.state.tasks.map(task => (
                    <Todo task={task} />
                ))}
            </div>
        )
    }
}

export default TodoList;