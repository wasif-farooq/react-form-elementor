import React, { useState } from 'react';
import { Base } from './Base';

class File extends Base
{
    constructor(props)
    {
        super(props);
        this.type = 'file';

        this.defaults = {
            name: '',
            value: '',
            placeholder: '',
            classes: '',
            maxLength: false,
            disabled: false,
            readOnly: false,
            multiple: false
        };

        this.events = {
            onChange: false,
            onBlur: false,
            onFocus: false,
            onKeyPress: false,
            onKeyUp: false,
            onKeyDown: false
        };
    }

    render() {
        return (
            <input
                type={this.type} 
                value={this.state.value} 
                name={this.state.name || ''} 
                {...(this.state.multiple === 'yes' ? { multiple: true }: '')}
                {...(this.state.classes ? { className: this.state.classes }: '')}
                {...(this.state.placeholder ? { placeholder: this.state.placeholder }: '')}
                {...(this.state.disabled ? { disabled: this.state.disabled }: '')}
                {...(this.state.readOnly ? { readOnly: this.state.readOnly }: '')}
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

export { File }