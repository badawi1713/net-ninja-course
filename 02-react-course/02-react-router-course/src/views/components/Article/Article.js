import React from "react";
import Axios from "axios";

class Article extends React.Component {
  state = {
    article: {},
  };
  componentDidMount = async () => {
    let id = await this.props.match.params.post_id;
    await Axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        this.setState({ article: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const { article } = this.state;
    return (
      <div className="container">
        <h4>{article.title}</h4>
        <p>{article.body}</p>
      </div>
    );
  }
}

export default Article;
