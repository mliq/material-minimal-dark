import React from 'react';

class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // "DataSource" is some global data source
      comments: DataSource.getComments()
    };
  }

  /**
   * Click handler for something
   *
   * @param {Event} event click event
   * @return {void} no return
   */
  handleChange = (event) => {
    // Update component state whenever the data source changes
    this.setState({
      comments: DataSource.getComments()
    });
  }

  render() {
    return (
      <div>
        {this.state.comments.map((comment) => (
          <Comment comment={comment} key={comment.id} />
        ))}
      </div>
    );
  }
}
