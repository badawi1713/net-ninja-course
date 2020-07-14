import React from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

import Pokeball from "../../../assets/images/pokeball.png";

class Home extends React.Component {
  state = {
    posts: [],
  };
  componentDidMount() {
    Axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        this.setState({ posts: res.data.slice(0, 10) });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { posts } = this.state;
    const postList =
      posts.length < 1 ? (
        <div>
          <p>No posts yet!</p>
        </div>
      ) : (
        posts.map((item, index) => {
          return (
            <div className="post card" key={item.id}>
              <img src={Pokeball} alt="img-post" />
              <Link to={`/posts/${item.id}`}>
                <div className="card-content">
                  <span className="card-title red-text">{item.title}</span>
                  <p className="black-text">{item.body}</p>
                </div>
              </Link>
            </div>
          );
        })
      );
    return (
      <div className="container home">
        <h4 className="center">Home</h4>
        {postList}
      </div>
    );
  }
}

export default Home;
