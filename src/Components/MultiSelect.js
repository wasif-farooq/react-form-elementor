import React from 'react';
import { DropDown } from './DropDown';

/**
 * 
 */
class MultiSelect extends DropDown
{
    /**
     * 
     * @param Object props 
     * @return void
     */
    constructor(props) {
        super(props);
        this.type = 'select';
        this.multiple = true;
    }

    /**
     * @inherit
     * @param Object event 
     * @return Array
     */
    getFieldValue(event) {
        let nodes = event.target.getElementsByTagName('option')
        let values = [];
        for (let node of nodes) {
            if (node.selected) {
                values.push(node.value);
            }
        }
        
        return values;
    }
}

export { MultiSelect }