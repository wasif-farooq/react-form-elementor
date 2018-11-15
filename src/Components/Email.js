import React from 'react';
import { TextBox } from './TextBox';

/**
 * 
 */
class Email extends TextBox
{
    /**
     * 
     * @param Object props 
     * @return void
     */
    constructor(props)
    {
        super(props);
        this.type = 'email'
    }
}

export { Email }