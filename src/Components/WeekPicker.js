import React from 'react';
import { TextBox } from './TextBox';

/**
 * 
 */
class WeekPicker extends TextBox
{
    /**
     * 
     * @param Object props 
     * @return void
     */
    constructor(props)
    {
        super(props);
        this.type = 'week'
    }
}

export { WeekPicker }