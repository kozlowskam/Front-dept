import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isValidated: false,
      isError: false,
      isSuccess: false,
    };

    this.nameField = React.createRef();
    this.emailField = React.createRef();
    this.messageField = React.createRef();
    this.handleEmailChange = this.handleEmailChange.bind(this);
  }

  validateEmail(email) {
    var validation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return validation.test(String(email).toLowerCase());
  }

  handleEmailChange() {
    const emailValue = this.emailField.current.value;
    if (this.validateEmail(emailValue)) {
      this.setState({
        isValidated: true,
        isError: false
      })
    }
  }

  submitClick() {
    const emailValue = this.emailField.current.value;

    if (this.validateEmail(emailValue)) {
      this.setState({
        isSuccess: true
      });
    } else {
      this.setState({
        isError: true
      })
    }
  }




  render() {
    const { isError, isSuccess, isValidated } = this.state

    const title = (
      <div className="c-form__title">
        <span>QUESTION? </span>
        <span>WE ARE HERE TO HELP!</span>
      </div>
    )

    const errorMsg = isError ? (
      <div className="c-form__error">
        Please provide a valid email.
			</div>
    ) : null

    const successMsg = isSuccess ? (
      <div className="c-form__sucess">
        Your message has been sent!
			</div>
    ) : null

    const submitButton = isValidated ? (
      <button className="c-form__button"
        onClick={() => this.submitClick()}>SEND
      </button>
    ) : (
        <button className="c-form__button is-disabled"
          onClick={() => this.submitClick()}>SEND
        </button>
      )




    return (
      <div className="c-form">
        {title}
        <div className="c-form__wrapper">
          <form className="c-form__form">
            <label className="c-form__label">
              <span>NAME</span>
              <input className="c-form__input"
                type="text"
                ref={this.nameField}
                onFocus={this.handleFocus}
                onChange={this.handleNameChange} />
            </label>
            <label className="c-form__label">
              <span>EMAIL</span>
              <input className="c-form__input"
                type="email"
                pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
                ref={this.emailField}
                onChange={this.handleEmailChange} />
              <span className="c-form__required">this field is required</span>
            </label>
            <label className="c-form__label">
              <span>MESSAGE</span>
              <input className="c-form__input"
                type="text"
                ref={this.messageField}
                onFocus={this.handleFocus}
                onChange={this.handleNameChange} />
            </label>
          </form>
          {errorMsg}{successMsg}
          {submitButton}
        </div>
      </div>
    )
  }
}

export default Form