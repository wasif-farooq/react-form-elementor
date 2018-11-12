import React, { Fragment } from 'react';
import { CheckBox } from './CheckBox';

class RadioBox extends CheckBox
{
    constructor(props) {
        super(props);
        this.type = 'radio';
    }
}

export { RadioBox }