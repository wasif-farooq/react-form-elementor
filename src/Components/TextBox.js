import React from 'react';
import { Base } from './Base';

class TextBox extends Base
{
    constructor(props)
    {
        super(props);

        let defaults = {
            name: '',
            value: '',
            placeholder: '',
            classes: '',
            maxLength: false,
            onChange: false,
            onBlur: false,
            onFocus: false,
            onKeyPress: false,
            onKeyUp: false,
            onKeyDown: false,
        };

        console.log("textomg");
        this.state = Object.assign({}, defaults, props);
    }

    render() {
        console.log(this);
        return (
            <input
                type="text" 
                value={this.state.value} 
                {...(this.state.classes ? { className: this.state.classes }: '')}
                {...(this.state.name ? { name: this.state.name }: '')}
                {...(this.state.placeholder ? { placeholder: this.state.placeholder }: '')}
                {...(this.state.maxLength ? { maxLength: this.state.maxLength }: '')}
                {...(this.onChange ? { onChange: this.onChange }: '')} 
                {...(this.onBlur ? { onBlur: this.onBlur }: '')} 
                {...(this.onFocus ? { onFocus: this.onFocus }: '')} 
                {...(this.onKeyPress ? { onKeyPress: this.onKeyPress }: '')} 
                {...(this.onKeyUp ? { onKeyUp: this.onKeyUp }: '')} 
                {...(this.onKeyDown ? { onKeyDown: this.onKeyDown }: '')} 
            />
        )
    }
}

export { TextBox }