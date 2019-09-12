import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: props.start };

    }

    componentDidMount() {
        this.intervalID = setInterval(() => this.step(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    step() {
        this.setState(state => ({ count: state.count + this.props.step }));
    }

    render() {
        return (
            <div>
                <p>Counter is at: {this.state.count}</p>
                <p>start={this.props.start},step={this.props.step}</p> 
            </div>
        );
    }
}


ReactDOM.render(<Counter start={8} step ={4}/>, document.getElementById('root'));