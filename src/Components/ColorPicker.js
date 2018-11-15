import React from 'react';
import { TextBox } from './TextBox';

/**
 * 
 */
class ColorPicker extends TextBox
{
    /**
     * 
     * @param Object props 
     * @return void
     */
    constructor(props)
    {
        super(props);
        this.type = 'color'
    }
}

export { ColorPicker }