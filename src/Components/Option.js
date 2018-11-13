inport React from 'react';

const Option = (props) => {
    const { value, label, selected } = props;
    return (
        <option value={value} selected={selected}>{label}</option>
    )
};

export { Option }