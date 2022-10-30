import { Component } from "react";
import shortid from "shortid";
// import classNames from "classnames";

class Form extends Component {
  state = {
    name: "",
    tag: "",
    experience: "junior",
    licence: false,
  };

  nameInputId = shortid.generate();
  tagInputId = shortid.generate();

  handleChange = (e) => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handlSubmit = (e) => {
    e.preventDefault();

    console.log(this.state);

    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: "", tag: "" });
  };

handleLicenceChenge = e => {
    console.log(e.currentTarget.checked);
    this.setState({licence: e.currentTarget.checked});
}



  render() {
    return (
      <form onSubmit={this.handlSubmit}>
        <label htmlFor={this.nameInputId}>
          Имя
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            id={this.nameInputId}
          />
        </label>
        <label htmlFor={this.tagInputId}>
          Прозвище
          <input
            type="text"
            name="tag"
            value={this.state.tag}
            onChange={this.handleChange}
            id={this.tagInputId}
          />
        </label>

        <p>Ваш уровень: </p>
        <label>
          <input
            type="radio"
            name="experience"
            value="junior"
            onChange={this.handleChange}
            checked={this.state.experience === 'junior'}
          />
          Junior
        </label>
        <br/>
        <label>
          <input
            type="radio"
            name="experience"
            value="middle"
            onChange={this.handleChange}
            checked={this.state.experience === 'middle'}
          />
          Middle
        </label>
        <br/>
        <label>
          <input
            type="radio"
            name="experience"
            value="senior"
            onChange={this.handleChange}
            checked={this.state.experience === 'senior'}
          />
          Senior
        </label>
        <br/>
        <label>
            <input type="checkbox" name="licence" checked={this.state.licence} onChange={this.handleLicenceChenge}/>Согласен с условием
  </label>
  <br/>
        <button type="submit" disabled={!this.state.licence} >Отправить</button>
      </form>
    );
  }
}

export default Form;
