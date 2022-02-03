import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Comments from "../components/Comments.jsx";
import { FaComments } from "react-icons/fa";

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const [comment, setComment] = useState([]);
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((json) => setPost(json));
  }, []);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then((response) => response.json())
      .then((json) => setComment(json));
  }, []);

  console.log(comment);
  return (
    <div>
      <Link to="/">
        <button className="backToStart">Back to startpage</button>
      </Link>

      
      <div className="imgBody"> 
      <div className="postBody">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      </div>
      <div className="placeHolder">
        <img src="https://picsum.photos/400/150" />
      </div>
      
      </div>

      <button onClick={() => {
        setShowComments(!showComments)
      }}><FaComments/> {!showComments ? ` Show comments` : ` Hide comments`

      }</button>

      {showComments && <Comments comment={comment} id={id} />}

      

      <br />
    </div>
  );
};

export default PostPage;
