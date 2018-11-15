import React from 'react';
import { TextBox } from './TextBox';

/**
 * 
 */
class DatePicker extends TextBox
{
    /**
     * 
     * @param Object props 
     * @return void
     */
    constructor(props)
    {
        super(props);
        this.type = 'date'
    }
}

export { DatePicker }