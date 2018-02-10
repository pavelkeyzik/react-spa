import React, { Component } from 'react';
import { Modal, Input } from 'reactstrap';

export default class ModalWindow extends Component {
  render() {
    const { show, toggle } = this.props;

    return (
      <Modal isOpen={show}>
        <div className="modal-header">
          <h5 className="modal-title">Sign in</h5>
          <button type="button" className="close" aria-label="Close" onClick={toggle}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <form>
            <div className="form-group row">
              <label htmlFor="lgLogin" className="text-right col-sm-4 col-form-label">Login:</label>
              <div className="col-sm-8">
                <Input id="lgLogin" type="login" name="login" placeholder="Your login" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="lgEmail" className="text-right col-sm-4 col-form-label">Email:</label>
              <div className="col-sm-8">
                <Input id="lgEmail" type="email" name="email" placeholder="Your email" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="lgPassword" className="text-right col-sm-4 col-form-label">Password:</label>
              <div className="col-sm-8">
                <Input id="lgPassword" type="password" name="password" placeholder="Your password" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="lgRepeatPassword" className="text-right col-sm-4 col-form-label">Repeat Password:</label>
              <div className="col-sm-8">
                <Input id="lgRepeatPassword" type="password" name="repeat_password" placeholder="Your password again" />
              </div>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-primary">Sign in</button>
          <button type="button" className="btn btn-light" onClick={toggle}>Cancel</button>
        </div>
      </Modal>
    );
  }
}