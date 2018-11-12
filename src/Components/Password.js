import React from 'react';
import { TextBox } from './TextBox';

class Password extends TextBox
{
    constructor(props)
    {
        super(props);
        this.type = 'password'
    }
}

export { Password }