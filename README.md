# React Form Elementor
This package provide you a react based shared library to manage basic form element in react so you not waste you time doing that again and again.
## Installation
```
npm i react-form-elementor --save
```

## How To Use
To use the elements you first need to import the element and a `events` function  from react-form-elementor. check the below code.
```
... some code
import { TextBox, events } from 'react-form-elementor';
... some code
class Form extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            firstName: 'John Doe'
        };
    }
    ... some code

    render() {
        return (
            <TextBox name="firstName" value={this.state.name} onChange={this.onChange} />
        )
    }
    ... some code
}

export default events(Form);
```

**Note.** please be carefull you need to pass state key name as element name property like show in above example.

### Components
Here is some basic element that are provided.

| Component | Name | Value | Place Holder |
| :--- | :---: | :---: | :---: |
| Text Box  | String | either state variable or a string value |
| Text Area | String | either state variable or a string value |


- [Text Box](#text-box)
- [Text Area](#text-area)
- [Password](#password)
- [Hidden](#hidden)
- [Check Box](#check-box)
- [Radio Box](#radio-box)
- [Drop Down](#drop-down)
- [Multi Select](#multi-select)
- [File](#file)


|             |          Grouping           ||
First Header  | Second Header | Third Header |
 ------------ | :-----------: | -----------: |
Content       |          *Long Cell*        ||
Content       |   **Cell**    |         Cell |

New section   |     More      |         Data |
And more      | With an escaped '\|'         ||  
[Prototype table]

#### Text Box
This is a `<input type="text" />` element.
#### Attributes
- name: String
- value: either state variable or a string value
- placeholder: String
- disabled: either state variable or boolean value
- readOnly:  either state variable or boolean value
- maxLength: either state variable or boolean integer
- classes: eiter state or string of class names
#### Events
- onChange
- onBlur
- onFocus
- onKeyPress
- onKeyDown
- onKeyUp

#### Text Area

#### Password
#### Attributes
- name: String
- value: either state variable or a string value
- placeholder: String
- disabled: either state variable or boolean value
- readOnly:  either state variable or boolean value
- maxLength: either state variable or boolean integer
- classes: eiter state or string of class names
#### Events
- onChange
- onBlur
- onFocus
- onKeyPress
- onKeyDown
- onKeyUp

#### Hidden
#### Attributes
- name: String
- value: either state variable or a string value
- placeholder: String
- disabled: either state variable or boolean value
- readOnly:  either state variable or boolean value
- maxLength: either state variable or boolean integer
- classes: eiter state or string of class names
#### Events
- onChange
- onBlur
- onFocus
- onKeyPress
- onKeyDown
- onKeyUp

#### Check Box
#### Attributes
- name: String
- value: either state variable or a string value (this is the state value)
- default: either state variable or a string value (this wil goes in value attribute for field)
- disabled: either state variable or boolean value
- readOnly:  either state variable or boolean value
- classes: eiter state or string of class names
#### Events
- onChange
- onClick
- onBlur
- onFocus
- onMouseDown
- onMouseUp

#### Radio Box
#### Attributes
- name: String
- value: either state variable or a string value (this is the state value)
- default: either state variable or a string value (this wil goes in value attribute for field)
- disabled: either state variable or boolean value
- readOnly:  either state variable or boolean value
- classes: eiter state or string of class names
#### Events
- onChange
- onClick
- onBlur
- onFocus
- onMouseDown
- onMouseUp
#### Drop Down
#### Attributes
- name: String
- value: either state variable or a string value 
- options: Array of object like `[{label: 'test', value: 1}]`
- disabled: either state variable or boolean value
- classes: eiter state or string of class names
#### Events
- onChange
- onBlur
- onFocus
- onKeyPress
- onKeyDown
- onKeyUp

#### Multi Select
#### Attributes
- name: String
- value: either state variable of Array type or a Array value 
- options: Array of object like `[{label: 'test', value: 1}]`
- disabled: either state variable or boolean value
- classes: eiter state or string of class names
#### Events
- onChange
- onBlur
- onFocus
- onKeyPress
- onKeyDown
- onKeyUp

#### File
#### Attributes
- name: String
- value: either state variable of Array type or a Array value 
- disabled: either state variable or boolean value
- classes: eiter state or string of class names
- multiple: boolean
#### Events
- onChange
- onBlur
- onFocus
- onKeyPress
- onKeyDown
- onKeyUp