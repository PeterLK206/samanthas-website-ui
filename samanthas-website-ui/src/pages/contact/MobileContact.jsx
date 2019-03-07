import React, { Component, Fragment } from 'react';
import { css } from '@emotion/core';
import { RingLoader } from 'react-spinners';
import './MobileContact.css';

const override = css`
    display: block;
    margin: 20px auto;
    border-color: red;
`;

class MobileContact extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: "",
      message: "",
      loading: false,
      isMessageSent: false,
      isMessageSuccess: false,

    }
  }

  onChange = (e) => {
    let key = e.target.name;
    let value = e.target.value;
    this.setState({ [key]: value });
  }

  sendMessage = () => {
    this.setState({ loading: true })

    setTimeout(() => {
      this.setState({ loading: false, isMessageSent: true })
    }, 3000)
  }

  render () {
    let { loading, isMessageSent, isMessageSuccess } = this.state;

    let showForm = !loading && !isMessageSent;
    let showSpinner = loading;
    let showCheckMark = !loading && isMessageSent && isMessageSuccess;
    let showX = !loading && isMessageSent && !isMessageSuccess;
    return (
      <div className="MobileContact">

        <p className="contact-blurb">If you have any questions feel free to send me a message &#9786;. I try to get back to all messages within 24 hours.</p>

        {
          (showForm) ?
            <div className="form-inputs">
              <h5 className="text-center"><u>Contact Me Here</u></h5>

              <div className="form-group mt-2">
                <label>Email address</label>
                <input name="email" type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => this.onChange(e)} value={this.state.email} />
                <small id="emailHelp" className="form-text text-muted">you can also contact me at <a href="mailto:phalla.samantha@gmail.com">phalla.samantha@gmail.com</a></small>
              </div>

              <div className="form-group">
                <textarea name="message" value={this.state.message} onChange={(e) => this.onChange(e)} className="form-control" rows="6"></textarea>
              </div>

              <button onClick={this.sendMessage} className="send-btn">Send</button>
            </div>
            : null}
        {
          (showSpinner) ?
            <RingLoader
              css={override}
              sizeUnit={"px"}
              size={150}
              color={'#24A4B1'}
              loading={this.state.loading}
            /> : null}

        {
          (showCheckMark) ?
            <Fragment>
              <img className="green-check-mark" src={`${process.env.PUBLIC_URL}/img/green-check-mark.svg`} alt="green check-mark" />
              <h6 className="text-center mb-3 mt-2">Message Sent Successfully.</h6>
            </Fragment>
            : null}

        {
          (showX) ?
            <Fragment>
              <img className="green-check-mark" src={`${process.env.PUBLIC_URL}/img/red-x.svg`} alt="green check-mark" />
              <h6 className="text-center mb-3 mt-2">Message Failed To Send.</h6>
              <button onClick={() => this.setState({
                loading: false,
                isMessageSent: false,
                isMessageSuccess: false,
              })} className="send-btn">Try Again</button>
            </Fragment>
            : null}

        <div className="googleMap">
          <h5 className="text-center mt-2"><u>Located Here</u></h5>
          <h6 className="">Just a mile away from WA-99, making getting on with your commute a much easier one.</h6>
          <iframe title="samanthas-location" className="iframe" frameBorder="0" src="https://www.google.com/maps/embed/v1/place?q=8139+14th+Ave+SW&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe></div>


      </div>
    );
  }
}

export default MobileContact;
