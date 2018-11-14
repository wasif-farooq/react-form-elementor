import React from 'react';
import { TextBox } from './TextBox';

/**
 * 
 */
class Password extends TextBox
{
    /**
     * 
     * @param Object props 
     * @return void
     */
    constructor(props)
    {
        super(props);
        this.type = 'password'
    }
}

export { Password }