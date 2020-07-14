import React from "react";
import { Link } from "react-router-dom";
import Pokeball from "../../../assets/images/pokeball.png";
import { connect } from "react-redux";

class Home extends React.Component {
  render() {
    const { posts } = this.props;
    const postList =
      posts.length < 1 ? (
        <div className="center">
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

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps)(Home);
