import React, { Fragment } from 'react';
import { Base } from './Base';
import { Option } from './Option';

class DropDown extends Base
{
    constructor(props) {
        super(props);
        this.type = 'checkbox';

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

    getFieldValue(event) {
        let nodes = document.getElementsByName(event.target.name)[0].getElementsByTagName('option');
        let values = [];
        for (let node of nodes) {
            if (node.checked) {
                values.push(node.value);
            }
        }

        return this.state.options.length == 1 ? values.shift(): values;
    }



    render() {
        const { value, options } = this.state;
        
        return (
            <select
                id={this.state.name + '-' + option.value} 
                name={this.state.name || ''}
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
                            value={option.value} 
                            label={option.label} 
                            selected={Array.from(value).indexOf(option.value) !== -1 ? true: false} />
                    )
                })}    
            </select>
        )
    }
}

export { CheckBox }