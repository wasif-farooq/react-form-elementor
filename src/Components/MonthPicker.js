import React from 'react';
import { TextBox } from './TextBox';

/**
 * 
 */
class MonthPicker extends TextBox
{
    /**
     * 
     * @param Object props 
     * @return void
     */
    constructor(props)
    {
        super(props);
        this.type = 'month'
    }
}

export { MonthPicker }