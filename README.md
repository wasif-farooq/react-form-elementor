# React Form Elementor

## Installation
```
npm i react-form-elementor --save
```

## How To Use
```
... some code
import { TextBox, events } from 'react-form-elementor';
... some code
class Form extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            name: 'John Doe'
        };
    }
    ... some code

    render() {
        return (
            <TextBox name="name" value={this.state.name} onChange={this.onChange} />
        )
    }
    ... some code
}

export default events(Form);
```

### Components
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

#### Text Area

#### Password

#### Hidden

#### Check Box

#### Radio Box

#### Drop Down

#### Multi Select

#### File

