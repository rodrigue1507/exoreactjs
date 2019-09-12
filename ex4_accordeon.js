import React from 'react';
import ReactDOM from 'react-dom';

class Accordion extends React.Component {
    constructor (props) {
        super(props);
        this.state = { header: props.header, content: props.content, check: false };

        // Bind manuel
        this.handleClick = this.handleClick.bind(this);
    }

    // Bind automatique (syntaxe expérimentale)
    handleClick () {
        this.setState(state => ({ check: !state.check }));
    }

    render() {
            if (this.state.check === true) {
                return <div>
                            <div onClick={this.handleClick}>{this.state.header}</div>
                            <div>{this.state.content}</div>
                        </div>
           }
           else{
            return <div onClick={this.handleClick}>{this.state.header}</div>
           } 
    }
}

ReactDOM.render(<Accordion header="Titre" content="Lorem ipsum" />,document.getElementById('root'))