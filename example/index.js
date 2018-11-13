import React, { Component } from "react";
import ReactDOM from "react-dom";
import { TextBox, Password, Hidden, CheckBox, RadioBox } from '../src';

class App extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            test: 'text em',
            chk: ['1'],
            rdo: '1',
        };

        this.onChange = this.onChange.bind(this);
    }

    onChange(value, name) {
        let state = this.state;
        state[name] = value;
        this.setState(state);
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
                <TextBox value={this.state.test} name="test" onChange={this.onChange} />
                <Password value={this.state.test} name="test" onChange={this.onChange} />
                <Hidden value="me" />
                <br />
                <CheckBox name="chk" value={this.state.chk} options={options} onChange={this.onChange} />
                <br />
                <RadioBox name="rdo" value={this.state.rdo} options={options} onChange={this.onChange} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
module.hot.accept();
