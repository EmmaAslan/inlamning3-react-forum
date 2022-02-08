const Comments = (props) => { 
    return (
      <div className="divComments">
        {props.comment.map((comment, i) => {
          console.log("postId: ", comment.postId);
          return (
            <div key={i}>
              <div className="userInfo">
                <p className="commentName">Name: {comment.name}</p>
                <p className="commentEmail">Email: {comment.email}</p>
              </div>
              <p>
                {comment.body}
              </p>
            </div>
          );
        })}
      </div>
    );
  };
  
  export default Comments;
  