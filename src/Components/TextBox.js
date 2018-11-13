import React, { useState } from 'react';
import { Base } from './Base';

class TextBox extends Base
{
    constructor(props)
    {
        super(props);
        this.type = 'text';

        let defaults = {
            name: '',
            value: '',
            placeholder: '',
            classes: '',
            maxLength: false,
            disabled: false,
            readOnly: false,
            onChange: false,
            onBlur: false,
            onFocus: false,
            onKeyPress: false,
            onKeyUp: false,
            onKeyDown: false,
        };
/*
        events = {};

        const {
            onChange: events.onChange,
            onBlur: events.onBlur,
            onFocus: events.onFocus,
            onKeyPress: events.onKeyPress,
            onKeyUp: events.onKeyUp,
            onKeyDown: events.onKeyDown
        } = props;

        console.log("events : ", events);*/

        this.state = Object.assign({}, defaults, props);
    }

    render() {
        return (
            <input
                type={this.type} 
                value={this.state.value} 
                {...(this.state.classes ? { className: this.state.classes }: '')}
                {...(this.state.name ? { name: this.state.name }: '')}
                {...(this.state.placeholder ? { placeholder: this.state.placeholder }: '')}
                {...(this.state.disabled ? { disabled: this.state.disabled }: '')}
                {...(this.state.readOnly ? { readOnly: this.state.readOnly }: '')}
                {...(this.state.maxLength ? { maxLength: this.state.maxLength }: '')}
                {...(this.onChange ? { onChange: this.onChange }: '')} 
                {...(this.state.onBlur ? { onBlur: this.onBlur }: '')} 
                {...(this.state.onFocus ? { onFocus: this.onFocus }: '')} 
                {...(this.state.onKeyPress ? { onKeyPress: this.onKeyPress }: '')} 
                {...(this.state.onKeyUp ? { onKeyUp: this.onKeyUp }: '')} 
                {...(this.state.onKeyDown ? { onKeyDown: this.onKeyDown }: '')} 
            />
        )
    }
}

export { TextBox }