import React from 'react';
import { Base } from './Base';

class RadioBox extends Base
{
    /**
     * 
     * @param Object props 
     * @return void
     */
    constructor(props) {
        super(props);
        this.type = 'radio';

        this.defaults = {
            name: '',
            value: '',
            default: '',
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

    /**
     * @inherit
     * @param Object event 
     * @return String
     */
    getFieldValue(event) {
        return event.target.checked ? event.target.value: '';
    }

    /**
     * Built-in React function to render element on DOM
     */
    render() {
        const { value } = this.state;

        return (
            <input
                type={this.type} 
                id={this.state.name + '-' + this.state.default} 
                value={this.state.default} 
                checked={this.state.default == value ? true: false} 
                name={this.state.name || ''}
                {...(this.state.classes ? { className: this.state.classes }: '')}
                {...(!!this.state.disabled ? { disabled: !!this.state.disabled }: '')}
                {...(this.onChange ? { onChange: this.onChange }: '')} 
                {...(this.state.onBlur ? { onBlur: this.onBlur }: '')} 
                {...(this.state.onFocus ? { onFocus: this.onFocus }: '')} 
                {...(this.state.onMouseDown ? { onMouseDown: this.onMouseDown }: '')} 
                {...(this.state.onMouseUp ? { onMouseUp: this.onMouseUp }: '')} 
                {...(this.state.onSelectStart ? { onSelectStart: this.onSelectStart }: '')} 
            />
        )
    }
}

export { RadioBox }