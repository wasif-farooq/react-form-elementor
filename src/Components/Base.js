import React, { Component } from 'react';

class Base extends Component
{
    constructor(props)
    {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onKeyPress = this.onKeyPress.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    emit(value, callback)
    {
        if (callback) {
            callback(value);
        }
    }

    getFieldValue(e)
    {
        return e.target.value;
    }

    getValue()
    {
        return this.state.value;
    }

    onChange(e) {
        let value = this.getFieldValue(e);
        this.setState({
            value: value
        })
        this.emit(value, this.state.onChange);
    }

    onBlur(e) {
        let value = this.getFieldValue(e);
        this.emit(value, this.state.onBlur);
    }

    onFocus(e) {
        let value = this.getFieldValue(e);
        this.emit(value, this.state.onFocus);
    }

    onKeyPress(e) {
        let value = this.getFieldValue(e);
        this.emit(value, this.state.onKeyPress);
    }

    onKeyUp(e) {
        let value = this.getFieldValue(e);
        this.emit(value, this.state.onKeyUp);
    }

    onKeyDown(e) {
        let value = this.getFieldValue(e);
        this.emit(value, this.state.onKeyDown);
    }
}

export { Base }