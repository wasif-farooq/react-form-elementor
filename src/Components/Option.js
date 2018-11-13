import React from 'react';

const Option = (props) => {
    const { value, label } = props;
    return (
        <option value={value}>{label}</option>
    )
};

export { Option }