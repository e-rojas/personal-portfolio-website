import React, { Component } from "react"

export default class todoApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      options: props.options,
      optionMessage: "",
    }
    //bind methods
    this.handleAddOption = this.handleAddOption.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handleDeleteOption = this.handleDeleteOption.bind(this)
  }
  //handleAddOption method
  handleAddOption(option) {
    if (!option) {
      return "Enter valid value to add item"
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exist!"
    }
    this.setState(prevState => ({ options: prevState.options.concat(option) }))
  }

  //handlePick  method
  handlePick() {
    const randOption = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[randOption]
    alert(option)
  }
  //handleDeleteOption method
  handleDeleteOption(optionToRemove) {
    this.setState(prevState => ({
      options: prevState.options.filter(option => {
        return optionToRemove !== option
      }),
    }))
  }
  //handleDeleteOption method
  handleDeleteOptions() {
    this.setState(() => ({ options: [] }))
  }

  render() {
    return (
      <div
        style={{ maxWidth: "800px" }}
        className="col mx-auto alert-warning  vh-100 p-5 d-flex flex-column justify-content-center align-items-center "
      >
        <h1 className="alert-info rounded-lg w-100 p-3 text-center">
          Todo App
        </h1>

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
    )
  }
} //end
todoApp.defaultProps = {
  options: [],
}

//Action component
const Action = props => {
  return (
    <div className="alert-danger rounded-lg w-100 p-3 text-center">
      {props.optionMessage && <h4>{props.optionMessage} </h4>}
      <h5>{props.optionMessage} </h5>
      <button
        className="btn btn-info"
        disabled={!props.hasOption}
        onClick={props.handlePick}
      >
        what should I do first?
      </button>
    </div>
  )
}

//Options component rendering child Option component
const Options = props => {
  return (
    <div className="w-100 mt-2">
      <p className="alert-light rounded-lg w-100 p-3 text-center">
        {" "}
        You have : {props.options.length} Todo{" "}
      </p>
      <button
        className="btn btn-secondary btn-sm"
        onClick={props.handleDeleteOptions}
      >
        Remove All
      </button>
      {props.options.map((optionText, index) => (
        <Option
          handleDeleteOption={props.handleDeleteOption}
          option={optionText}
          key={index}
        />
      ))}
      <Option />
    </div>
  )
}

//Option component
const Option = props => {
  return (
    <div className="pt-2 pb-2 mt-4">
      {props.option && (
        <span className="alert-dark p-2 rounded mr-4">{props.option}</span>
      )}
      {props.option && (
        <button
          className="btn btn btn-primary btn-sm"
          onClick={e => {
            props.handleDeleteOption(props.option)
          }}
        >
          remove
        </button>
      )}
    </div>
  )
}

class AddOption extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      error: undefined,
    }
  }

  handleAddOption(e) {
    e.preventDefault()
    const option = e.target.elements.option.value.trim()
    const error = this.props.handleAddOption(option)
    this.setState(() => ({ error: error }))

    e.target.elements.option.value = ""
  }
  render() {
    return (
      <div className="rounded-lg w-100 p-3">
        {this.state.error && <p>{this.state.error} </p>}
        <form onSubmit={this.handleAddOption}>
          <input className="form-control" type="text" name="option" />
          <button className="btn btn-sm btn-outline-dark mt-4 ">
            Add Option
          </button>
        </form>
      </div>
    )
  }
}
