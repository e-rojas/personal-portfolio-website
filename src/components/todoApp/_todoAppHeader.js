
import React, { Component } from 'react'


export default class todoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
          options: props.options,
          optionMessage: ""
        };
        //bind methods
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
      }
      handleAddOption(option) {
        if (!option) {
          return "Enter valid value to add item";
        } else if (this.state.options.indexOf(option) > -1) {
          return "This option already exist!";
        }
        this.setState(prevState => ({ options: prevState.options.concat(option) }));
      }
    
      //Handke action method
      handlePick() {
        const randOption = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randOption];
        alert(option);
      }
      //handle delete option
      handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
          options: prevState.options.filter((option) => {
            return optionToRemove !== option;
          })
        }))
       
      }
      //Delete all options method
      handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
      }
    
      render() {
        const subTitle = "Put your life in the hands of a computer!";
    
        return (
          <div>
            <Header subTitle={subTitle} />
            <Action
              optionMessage={this.state.optionMessage}
              handlePick={this.handlePick}
              hasOption={this.state.options.length > 0}
            />
            <Options
              handleDeleteOption={this.handleDeleteOption}
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
        );
      }
};//end
todoApp.defaultProps = {
    options: []
  };
  //Header component
  const Header = props => {
    return (
      <div>
        <h1>{props.title}</h1>
        {props.subTitle && <h2> {props.subTitle} </h2>}
      </div>
    );
  };
  Header.defaultProps = {
    title: "Indecision"
  };
  
  //Action component
  const Action = props => {
    return (
      <div>
        {props.optionMessage && <h4>{props.optionMessage} </h4>}
        <h5>{props.optionMessage} </h5>
        <button disabled={!props.hasOption} onClick={props.handlePick}>
          what should I do?
        </button>
      </div>
    );
  };
  
  //Options component rendering child Option component
  const Options = props => {
    return (
      <div>
        <p> these are :{props.options.length} </p>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
        {props.options.map((optionText, index) => (
          <Option
            handleDeleteOption={props.handleDeleteOption}
            option={optionText}
            key={index} />
        ))}
        <Option />
      </div>
    );
  };
  
  //Option component
  const Option = props => {
    return (
      <div>
       {props.option}
        {props.option && <button onClick={(e)=>{props.handleDeleteOption(props.option)}} >remove</button>}
      </div>
    );
  };
  
  class AddOption extends React.Component {
    constructor(props) {
      super(props);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.state = {
        error: undefined
      };
    }
  
    handleAddOption(e) {
      e.preventDefault();
      const option = e.target.elements.option.value.trim();
      const error = this.props.handleAddOption(option);
      this.setState(() => ({ error: error }));
  
      e.target.elements.option.value = "";
    }
    render() {
      return (
        <div>
          {this.state.error && <p>{this.state.error} </p>}
          <form onSubmit={this.handleAddOption}>
            <input type="text" name="option" />
            <button>Add Option</button>
          </form>
        </div>
      );
    }
  }


  ///________

  //Main
const Layout = props => {
    return (
        <div className="col alert-warning  vh-100 p-5 d-flex flex-column justify-content-center align-items-center ">
            <h1 className='alert-info rounded-lg w-100 p-3 text-center'>Todo App</h1>
            
        </div>
    )
};