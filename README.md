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

**Note. ** please be carefull you need to pass state key name as element name property like show in above example.

### Components
Here is some basic element that are provided.

- [Text Box](#text-box)
- [Text Area](#text-area)
- [Password](#password)
- [Hidden](#hidden)
- [Check Box](#check-box)
- [Radio Box](#radio-box)
- [Drop Down](#drop-down)
- [Multi Select](#multi-select)
- [File](#file)

#### Text Box
This is a `<input type="text" />` element.
#### Attributes
- **name: ** String
- **value: ** either state variable or a string value
- **placeholder: ** String
- **disabled: ** either state variable or boolean value
- **readOnly: ** either state variable or boolean value
- **maxLength: ** either state variable or boolean integer
#### Events
- onChange
- onBlur
- onFocus
- onKeyPress
- onKeyDown
- onKeyUp

#### Text Area

#### Password

#### Hidden

#### Check Box

#### Radio Box

#### Drop Down

#### Multi Select

#### File

