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
     * @param Object event
     * @return String|Array|Object
     */
    getFieldValue(event)
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
     * @param Object event
     * @return void
     */
    onChange(event) {
        let value = this.getFieldValue(event);
        this.setState({
            value: value
        })
        this.emit(value, this.state.onChange);
    }

    /**
     * 
     * @param Object event
     * @return void
     */
    onBlur(event) {
        let value = this.getFieldValue(event);
        this.emit(value, this.state.onBlur);
    }

    /**
     * 
     * @param Object event
     * @return void
     */
    onFocus(event) {
        let value = this.getFieldValue(event);
        this.emit(value, this.state.onFocus);
    }

    /**
     * 
     * @param Object event
     * @return void
     */
    onKeyPress(event) {
        let value = this.getFieldValue(event);
        this.emit(value, this.state.onKeyPress);
    }

    /**
     * 
     * @param Object event
     * @return void
     */
    onKeyUp(event) {
        let value = this.getFieldValue(event);
        this.emit(value, this.state.onKeyUp);
    }

    /**
     * 
     * @param Object event
     * @return void
     */
    onKeyDown(event) {
        let value = this.getFieldValue(event);
        this.emit(value, this.state.onKeyDown);
    }
}

export { Base }