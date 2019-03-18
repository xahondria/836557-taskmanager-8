import utils from "../utils";

class Component {
  constructor() {
    if (new.target === Component) {
      throw new Error(`Can't instantiate BaseComponent, only concrete one.`);
    }

    this._fragment = null;
    this._state = {};
  }

  get template() {
    throw new Error(`You have to define template.`);
  }

  bind() {
  }

  render() {
    this._fragment = utils.createFragment(this.template);
    this.bind();
    return this._fragment;
  }
}

export default Component;
