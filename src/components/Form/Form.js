import React, { Component } from "react";
import shortid from "shortid";
import './Form.css';

class Form extends Component {
    state = {
        name: '',
        surname: '',
        experience: 'junior',
        licence: false,
    };
    
    nameInputId = shortid.generate();
    surnameInputId = shortid.generate();

    handleChange = event => {
        const { name, value } = event.currentTarget;
        this.setState({ [name]: value});
    }

    handleSubmit = event => {
      event.preventDefault();
      this.props.onSubmit(this.state);
      this.reset();
    } 
    
    handleLicenceChange = event => {
        console.log(event.currentTarget.checked);
        this.setState({licence: event.currentTarget.checked});
    }

    reset = () => {
        this.setState({name: '', surname: ''});
    };

    render() {
        return(
            <form className="inputForm" onSubmit = {this.handleSubmit}>
                <label htmlFor={this.nameInputId}>
                    Name 
                        <input className="inputText"
                            type="text" 
                            name="name" 
                            value={this.state.name} 
                            onChange={this.handleChange}
                            id={this.nameInputId} />
                </label>
                <label htmlFor={this.surnameInputId}>
                    Surname 
                        <input className="inputText"
                            type="text" 
                            name="surname" 
                            value={this.state.surname} 
                            onChange={this.handleChange}
                            id={this.surnameInputId}
                        />
                </label>

                <div className="levelWrap">
                    <p className="titleCheckbox">Your level</p>

                    <label className="labelCheckbox">
                        <input 
                            type="radio" 
                            name="experience" 
                            value="junior" 
                            onChange={this.handleChange}
                            checked={this.state.experience === 'junior'}
                        /> Junior
                    </label>
                    <label className="labelCheckbox">
                        <input
                            type="radio"
                            name="experience" 
                            value="middle"
                            onChange={this.handleChange}
                            checked={this.state.experience === 'middle'}
                        /> Middle
                    </label>
                    <label className="labelCheckbox">
                        <input
                            type="radio" 
                            name="experience" 
                            value="senior"
                            onChange={this.handleChange}
                            checked={this.state.experience === 'senior'}
                        /> Senior
                    </label>                
                </div>
                <label>
                    <input 
                        type="checkbox" 
                        name="licence" 
                        checked={this.state.licence}
                        onChange={this.handleLicenceChange}
                    /> Agree with conditions
                </label>
               
                <button type="submit" className="formButton">Send</button>
            </form>
        );
    }
};

export default Form;