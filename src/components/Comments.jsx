const Comments = (props) => {
    //console.log(props.comment);
    console.log("id: ", props.id);
  
    return (
      <div className="divComments">
        {props.comment.map((comment) => {
          //console.log(comment);
          console.log("postId: ", comment.postId);
          return (
            <div>
              <div className="userInfo">
                <p className="commentName">Name: {comment.name}</p>
                <p className="commentEmail">Email: {comment.email}</p>
              </div>
              <p >
                {comment.body}
              </p>
            </div>
          );
        })}
      </div>
    );
  };
  
  export default Comments;
  