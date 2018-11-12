import React, { Fragment } from 'react';
import { Base } from './Base';

class CheckBox extends Base
{
    constructor(props) {
        super(props);
        this.type = 'checkbox';

        let defaults = {
            name: '',
            value: '',
            options: [],
            classes: '',
            disabled: false,
            onClick: false,
            onBlur: false,
            onFocus: false,
            onMouseDown: false,
            onMouseUp: false,
            onSelectStart: false
        };

        this.state = Object.assign({}, defaults, props);
    }

    getFieldValue(event) {
        let nodes = document.getElementsByName(event.target.name);
        let values = [];
        for (let node of nodes) {
            if (node.checked) {
                values.push(node.value);
            }
        }

        return this.state.options.length > 1 ? values: values.shift();
    }

    render() {
        return (
            <Fragment>
            {this.state.options.map((option) => {
                return <label htmlFor={this.state.name + '-' + option.value} key={this.state.name + '-' + option.value}>
                <input
                    type={this.type} 
                    value={option.value} 
                    id={this.state.name + '-' + option.value} 
                    {...(Array.from(this.state.value).indexOf(option.value) !== -1 ? {checked: true}: '')}
                    {...(this.state.classes ? { className: this.state.classes }: '')}
                    {...(this.state.name ? { name: this.state.name }: '')}
                    {...(this.state.disabled ? { disabled: this.state.disabled }: '')}
                    {...(this.onClick ? { onClick: this.onClick }: '')} 
                    {...(this.state.onBlur ? { onBlur: this.onBlur }: '')} 
                    {...(this.state.onFocus ? { onFocus: this.onFocus }: '')} 
                    {...(this.state.onMouseDown ? { onMouseDown: this.onMouseDown }: '')} 
                    {...(this.state.onMouseUp ? { onMouseUp: this.onMouseUp }: '')} 
                    {...(this.state.onSelectStart ? { onSelectStart: this.onSelectStart }: '')} 
                />
                {option.label}
            </label>
            })}    
            </Fragment>
        )
    }
}

export { CheckBox }