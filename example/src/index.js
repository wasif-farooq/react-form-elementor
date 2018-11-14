import React, { Component } from "react";
import ReactDOM from "react-dom";
import { 
    TextBox,
    Password,
    Hidden,
    CheckBox,
    RadioBox,
    DropDown,
    MultiSelect,
    TextArea,
    File,
    events
} from '../../src';

class AppComponent extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            test: 'text em',
            chk: '',
            rdo: '',
            dd: '1',
            mm: ['1'],
            ta: 'testme area',
            fl: ''
        };

        this.onChange = this.onChange.bind(this);
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
                <CheckBox name="chk" value={this.state.chk} default="1" onChange={this.onChange} />
                <br />
                <RadioBox name="rdo" value={this.state.rdo} default="1" onChange={this.onChange} />
                <RadioBox name="rdo" value={this.state.rdo} default="2" onChange={this.onChange} />

                <DropDown name="dd" value={this.state.dd} options={options} onChange={this.onChange} />
                <MultiSelect name="mm" value={this.state.mm} options={options} onChange={this.onChange} />

                <TextArea name="ta" value={this.state.ta} onChange={this.onChange} />
                <br />

                <File name="fl" value={this.state.fl} onChange={this.onChange} multiple="yes" />
                
            </div>
        )
    }
}


const App = events(AppComponent);
ReactDOM.render(<App />, document.getElementById('root'));
module.hot.accept();
