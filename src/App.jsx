import React, { Component } from "react";
// import initialTodos from "./todos.json";
// import Container from "./components/Container/container";

import Form  from "./components/Form/Form";

class App extends Component {
  state = {
  
  };

formSubmitHandler = data => {
  console.log(data);
}

  render() {
    return (
<Form onSubmit={this.formSubmitHandler} />
    );
  }
}
export default App;
