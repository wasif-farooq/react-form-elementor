import React from 'react';
import { TextBox } from './TextBox';

/**
 * 
 */
class Hidden extends TextBox
{
    /**
     * 
     * @param Object props 
     * @return void
     */
    constructor(props)
    {
        super(props);
        this.type = 'hidden'
    }
}

export { Hidden }