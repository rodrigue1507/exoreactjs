import React from 'react';
import ReactDOM from 'react-dom';

class AccordionList extends React.Component {
    constructor (props) {
        super(props);
        this.state = { items:props.items, check: false };
        // Bind manuel
        this.handleClick = this.handleClick.bind(this);
    }

    // Bind automatique (syntaxe expérimentale)
    handleClick () {
        this.setState(state => ({ check: !state.check }));
    }

    render() {
        const tabsArray = this.state.items;
        if(this.state.check === false){
            return <div>{this.state.items.map(element => <li onClick={this.handleClick}>{element.header}</li>)}</div>
        }
        else{
            return <div>{this.state.items.map(element => <div><div onClick={this.handleClick}>{element.header}</div><div>{element.content}</div></div>)}</div>
            }
        }
             
}


const accordions = [
    { header: 'Titre 1', content: 'Contenu 1'},
    { header: 'Titre 2', content: 'Contenu 2'},
    { header: 'Titre 3', content: 'Contenu 3'},
];
ReactDOM.render(<AccordionList items={accordions}/>,document.getElementById('root'))