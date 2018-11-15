import React from 'react';
import { TextBox } from './TextBox';

/**
 * 
 */
class TimePicker extends TextBox
{
    /**
     * 
     * @param Object props 
     * @return void
     */
    constructor(props)
    {
        super(props);
        this.type = 'time'
    }
}

export { TimePicker }