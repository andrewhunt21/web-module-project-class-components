import React from "react";

class Todo extends React.Component {

    render() {
        return (
            <div>
                <p>{this.state.tasks}</p>
            </div>
        )
    }
}

export default Todo;