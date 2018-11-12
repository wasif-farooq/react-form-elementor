import React, { Component } from "react";
import ReactDOM from "react-dom";
import { TextBox, Password, Hidden, CheckBox } from '../src';

class App extends Component
{
    render() {
        return (
            <div>
                <h1>App Test</h1>
                <TextBox value="me" />
                <Password value="me" />
                <Hidden value="me" />
                <CheckBox name="text" value="1" title="Checkbox" />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
module.hot.accept();
