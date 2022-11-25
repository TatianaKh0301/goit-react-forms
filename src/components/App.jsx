import React, { Component } from "react";
import Form from "./Form/Form";

class App extends Component {
    formSubmitHandler = data => {
        console.log(data);
    }

    render() {
        return (
            <div
                style={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: 40,
                color: '#010101'
            }}
            >

                <Form onSubmit={this.formSubmitHandler} />
        
            </div>
    );
  }
};

export default App;
