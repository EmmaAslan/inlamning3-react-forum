import { Link } from "react-router-dom";

const Home = ({ postList }) => {
  return (
    <div className="divPostList">
      {postList &&
        postList.map((post, i) => {
          return (
            <Link key={i} to={`/post/${post.id}`}>
              <p className="postList">{post.title}</p>
            </Link>
          );
        })}
    </div>
  );
};

export default Home;
