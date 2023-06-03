import React, { Component } from "react";
import { Button, Form, FormField, Image, Message } from "semantic-ui-react";
import { Navigate } from "react-router-dom";

export default class MovieForm extends Component {
  state = {
    title: this.props.movie ? this.props.movie.title : "",
    cover: this.props.movie ? this.props.movie.cover : "",
    errors: "",
    done: false,
    id: this.props.id ? this.props.id : null,
  };

  render() {
    const handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    };
    const onSubmitFormData = () => {
      const errors = validate();
      this.setState({ errors });
      if (Object.keys(errors).length === 0) {
        this.props.newMovies(this.state);
        this.setState({ done: true });
      }
      console.log(this.state);
      alert("Submit");
    };
    const validate = () => {
      const errMessage = {};
      if (!this.state.title) {
        errMessage.title = "Can't be blank";
      }
      if (!this.state.cover) {
        errMessage.cover = "Can't be blank";
      }
      return errMessage;
    };
    return (
      <div>
        <h2>Movie Form</h2>
        <Form
          onSubmit={onSubmitFormData}
          loading={this.props.newMovieReducer.fetching}
        >
          {this.props.newMovieReducer.fetched && this.state.done ? (
            <Navigate to="/movies" />
          ) : null}

          {!this.props.newMovieReducer.error.message ? (
            ""
          ) : (
            <FormField>
              <Message negative>
                <Message.Header>Error with POST API</Message.Header>
                <p>{this.props.newMovieReducer.error.message}</p>
              </Message>
            </FormField>
          )}

          {!this.state.errors.title && !this.state.errors.cover ? (
            ""
          ) : (
            <FormField>
              <Message negative>
                <Message.Header>
                  We're sorry we can't apply that discount
                </Message.Header>
                <p>Can't be blank!</p>
              </Message>
            </FormField>
          )}
          <Form.Field error={this.state.errors.title}>
            <label>Title</label>
            <input
              placeholder="Title"
              name="title"
              value={this.state.title}
              onChange={handleChange}
            />
          </Form.Field>
          <Form.Field error={this.state.errors.cover}>
            <label>Cover URL</label>
            <input
              placeholder="Cover URL"
              name="cover"
              value={this.state.cover}
              onChange={handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Image src={this.state.cover} size="small" />
          </Form.Field>
          <Button primary type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
