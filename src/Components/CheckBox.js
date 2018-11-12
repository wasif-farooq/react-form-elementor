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
            title: '',
            classes: '',
            disabled: false,
            onClick: false,
            onBlur: false,
            onFocus: false,
            onMouseDown: false,
            onMouseUp: false,
        };

        this.state = Object.assign({}, defaults, props);
    }

    getFieldValue(event) {
        return event.target.checked ? event.target.value: '';
    }

    render() {
        return (
            <label htmlFor={this.state.name}>
                <input
                    type={this.type} 
                    value={this.state.value} 
                    {...(this.state.classes ? { className: this.state.classes }: '')}
                    {...(this.state.name ? { name: this.state.name }: '')}
                    {...(this.state.disabled ? { disabled: this.state.disabled }: '')}
                    {...(this.onClick ? { onClick: this.onClick }: '')} 
                    {...(this.state.onBlur ? { onBlur: this.onBlur }: '')} 
                    {...(this.state.onFocus ? { onFocus: this.onFocus }: '')} 
                    {...(this.state.onMouseDown ? { onMouseDown: this.onMouseDown }: '')} 
                    {...(this.state.onMouseUp ? { onMouseUp: this.onMouseUp }: '')} 
                />
                {this.state.title}
            </label>
        )
    }
}

export { CheckBox }