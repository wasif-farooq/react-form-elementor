export * from './elements';

const events = (Component) => {
    var onChange = Component.prototype.onChange || false;
    Component.prototype.onChange = function(value, name, event) {
        let state = this.state;
            state[name] = value;
            this.setState(state);
            onChange ? onChange.call(Component, value, name, event): '';
    }

    return Component;
};

export { events }