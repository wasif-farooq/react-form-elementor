import React, { Component } from "react";
import ReactDOM from "react-dom";
import { TextBox, Password, Hidden, CheckBox, RadioBox } from '../src';

class App extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            value: 'text em'
        };

        this.onChange = this.onChange.bind(this);
    }

    onChange(value) {
        this.setState({value: value});
    }

    render() {
        const options = [{
            label: 'Option 1',
            value: '1'
        }, {
            label: 'Option 2',
            value: '2'
        }];

        return (
            <div>
                <h1>App Test</h1>
                <TextBox value={this.state.value} onChange={this.onChange} />
                <Password value={this.state.value} onChange={this.onChange} />
                <Hidden value="me" />
                <br />
                <CheckBox name="text" value="1" options={options} value="0" />
                <br />
                <RadioBox name="rad" value="1" options={options} value="0" />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
module.hot.accept();
