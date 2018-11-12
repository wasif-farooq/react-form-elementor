import React from 'react';
import { TextBox } from './TextBox';

class Hidden extends TextBox
{
    constructor(props)
    {
        super(props);
        this.type = 'hidden'
    }
}

export { Hidden }