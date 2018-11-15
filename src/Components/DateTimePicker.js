import React from 'react';
import { TextBox } from './TextBox';

/**
 * 
 */
class DateTimePicker extends TextBox
{
    /**
     * 
     * @param Object props 
     * @return void
     */
    constructor(props)
    {
        super(props);
        this.type = 'datetime'
    }
}

export { DateTimePicker }