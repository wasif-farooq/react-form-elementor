import React, { Component } from 'react';

/**
 * This is a Base class for form elements componenets that has its events callbacks.
 */
class Base extends Component
{
    /**
     * 
     * @param Object props 
     * @return void
     */
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

    /**
     * 
     * @param String|Array|Object value 
     * @param Function callback 
     * @return void
     */
    emit(value, callback)
    {
        if (callback) {
            callback(value);
        }
    }

    /**
     * 
     * @param Object e 
     * @return String|Array|Object
     */
    getFieldValue(e)
    {
        return e.target.value;
    }

    /**
     * @return String|Array|Object
     */
    getValue()
    {
        return this.state.value;
    }

    /**
     * 
     * @param Object e 
     * @return void
     */
    onChange(e) {
        let value = this.getFieldValue(e);
        this.setState({
            value: value
        })
        this.emit(value, this.state.onChange);
    }

    /**
     * 
     * @param Object e 
     * @return void
     */
    onBlur(e) {
        let value = this.getFieldValue(e);
        this.emit(value, this.state.onBlur);
    }

    /**
     * 
     * @param Object e 
     * @return void
     */
    onFocus(e) {
        let value = this.getFieldValue(e);
        this.emit(value, this.state.onFocus);
    }

    /**
     * 
     * @param Object e 
     * @return void
     */
    onKeyPress(e) {
        let value = this.getFieldValue(e);
        this.emit(value, this.state.onKeyPress);
    }

    /**
     * 
     * @param Object e 
     * @return void
     */
    onKeyUp(e) {
        let value = this.getFieldValue(e);
        this.emit(value, this.state.onKeyUp);
    }

    /**
     * 
     * @param Object e 
     * @return void
     */
    onKeyDown(e) {
        let value = this.getFieldValue(e);
        this.emit(value, this.state.onKeyDown);
    }
}

export { Base }