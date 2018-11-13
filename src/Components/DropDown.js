import React from 'react';
import { Base } from './Base';
import { Option } from './Option';

class DropDown extends Base
{
    constructor(props) {
        super(props);
        this.type = 'select';
        this.multiple = false;

        this.defaults = {
            name: '',
            value: [],
            options: [],
            classes: '',
            disabled: false
        };

        this.events = {
            onClick: false,
            onBlur: false,
            onFocus: false,
            onMouseDown: false,
            onMouseUp: false,
            onSelectStart: false
        };
    }

    render() {
        const { value, options } = this.state;
        
        return (
            <select
                id={this.state.name} 
                name={this.state.name || ''}
                multiple={this.multiple} 
                value={value} 
                {...(this.state.classes ? { className: this.state.classes }: '')}
                {...(this.state.disabled ? { disabled: this.state.disabled }: '')}
                {...(this.onChange ? { onChange: this.onChange }: '')} 
                {...(this.state.onBlur ? { onBlur: this.onBlur }: '')} 
                {...(this.state.onFocus ? { onFocus: this.onFocus }: '')} 
                {...(this.state.onMouseDown ? { onMouseDown: this.onMouseDown }: '')} 
                {...(this.state.onMouseUp ? { onMouseUp: this.onMouseUp }: '')} 
                {...(this.state.onSelectStart ? { onSelectStart: this.onSelectStart }: '')} 
            >
                {options.map((option) => {
                    return (
                        <Option 
                            key={option.value}
                            value={option.value} 
                            label={option.label} 
                        />
                    )
                })}    
            </select>
        )
    }
}

export { DropDown }