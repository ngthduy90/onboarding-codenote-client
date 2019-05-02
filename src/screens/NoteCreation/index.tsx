import React, { Component } from "react";
import { API, Storage } from "aws-amplify";
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import './index.css';
import LoaderButton from '../../components/LoaderButton';
import config from '../../config';
import { s3Upload } from '../../libs/awsLib';

class NoteCreation extends Component {
  constructor(props) {
    super(props);

    this.file = null;

    this.state = {
      isLoading: null,
      note: null,
      content: "",
      attachmentURL: null
    };
  }

  createNote(note) {
    return API.post("notes", `/notes`, {
      body: note
    });
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  validateForm() {
    return this.state.content.length > 0;
  }

  formatFilename(str) {
    return str.replace(/^\w+-/, "");
  }

  handleFileChange = event => {
    this.file = event.target.files[0];
  }

  handleSubmit = async event => {
    event.preventDefault();

    if (this.file && this.file.size > config.MAX_ATTACHMENT_SIZE) {
      alert(`Please pick a file smaller than ${config.MAX_ATTACHMENT_SIZE/1000000} MB.`);
      return;
    }

    this.setState({ isLoading: true });

    try {
      let newNote = { content: this.state.content };

      if (this.file) {
        newNote.attachment = await s3Upload(this.file);
      }

      await this.createNote(newNote);

      this.props.history.push("/");
    } catch (e) {
      alert(e);
      this.setState({ isLoading: false });
    }
  }

  render() {
    return (
      <div className="NoteCreation">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="content">
            <FormControl
              onChange={this.handleChange}
              value={this.state.content}
              componentClass="textarea"
            />
          </FormGroup>
          <FormGroup controlId="file">
            <ControlLabel>Attachment</ControlLabel>
            <FormControl onChange={this.handleFileChange} type="file" />
          </FormGroup>
          <LoaderButton
            block
            bsStyle="primary"
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            isLoading={this.state.isLoading}
            text="Create"
            loadingText="Saving…"
          />
        </form>
      </div>
    );
  }
}

export default NoteCreation;