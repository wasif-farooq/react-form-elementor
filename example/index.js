import React, { Component } from "react";
import ReactDOM from "react-dom";
import { TextBox, Password, Hidden } from '../src';

class App extends Component
{
    render() {
        return (
            <div>
                <h1>App Test</h1>
                <TextBox value="me" />
                <Password value="me" />
                <Hidden value="me" />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
module.hot.accept();
