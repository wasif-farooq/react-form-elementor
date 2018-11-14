export { TextBox } from './Components/TextBox';
export { TextArea } from './Components/TextArea';
export { Password } from './Components/Password';
export { Hidden } from './Components/Hidden';
export { CheckBox } from './Components/CheckBox';
export { RadioBox } from './Components/RadioBox';
export { DropDown } from './Components/DropDown';
export { MultiSelect } from './Components/MultiSelect';
export { File } from './Components/File';


const events = (Component) => {
    class Events extends Component {
        onChange(value, name, event) {
            let state = this.state;
            state[name] = value;
            this.setState(state);
            super.onChange(value, name, event);
        }
    }

    return Events;
};

export { events }