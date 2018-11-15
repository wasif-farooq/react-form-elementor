import React, { Fragment } from 'react';

import { CheckBox } from './Components/CheckBox';
import { ColorPicker } from './Components/ColorPicker';
import { DatePicker } from './Components/DatePicker';
import { DateTimePicker } from './Components/DateTimePicker';
import { DropDown } from './Components/DropDown';
import { Email } from './Components/Email';
import { File } from './Components/File';
import { Hidden } from './Components/Hidden';
import { MonthPicker } from './Components/MonthPicker';
import { MultiSelect } from './Components/MultiSelect';
import { Numeric } from './Components/Numeric';
import { Password } from './Components/Password';
import { RadioBox } from './Components/RadioBox';
import { RangeSelect } from './Components/RangeSelect';
import { TextBox } from './Components/TextBox';
import { TextArea } from './Components/TextArea';
import { TimePicker } from './Components/TimePicker';
import { WeekPicker } from './Components/WeekPicker';


const Element = ({type, ...rest}) => {
    return (
        <Fragment>
            {(() => {
                switch (type) {
                    case 'checkbox': return <CheckBox {...rest} />; break;
                    case 'color-picker': return <ColorPicker {...rest} />; break;
                    case 'date-picker': return <DatePicker {...rest} />; break;
                    case 'date-time-picker': return <DateTimePicker {...rest} />; break;
                    case 'dropdown': return <DropDown {...rest} />; break;
                    case 'email': return <Email {...rest} />; break;
                    case 'file': return <File {...rest} />; break;
                    case 'hidden': return <Hidden {...rest} />; break;
                    case 'month-picker': return <MonthPicker {...rest} />; break;
                    case 'multi-select': return <MultiSelect {...rest} />; break;
                    case 'numeric': return <Numeric {...rest} />; break;
                    case 'password': return <Password {...rest} />; break;
                    case 'radio': return <RadioBox {...rest} />; break;
                    case 'rage-select': return <RangeSelect {...rest} />; break;
                    case 'text': return <TextBox {...rest} />; break;
                    case 'textarea': return <TextArea {...rest} />; break;
                    case 'time-picker': return <TimePicker {...rest} />; break;
                    case 'week-picker': return <WeekPicker {...rest} />; break;
                }
            })()}
        </Fragment>
    )
};

export {
    CheckBox,
    ColorPicker,
    DatePicker,
    DateTimePicker,
    DropDown,
    Email,
    File,
    Hidden,
    MonthPicker,
    MultiSelect,
    Numeric,
    Password,
    RadioBox,
    RangeSelect,
    TextBox,
    TextArea,
    TimePicker,
    WeekPicker,
    Element
};