import "./App.css";
import { Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home.jsx";
import PostPage from "./pages/PostPage.jsx";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
// import { BsInstagram } from "react-icons/ai";

export default function App(props) {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => response.json())
      .then((json) => setPostList(json));
  }, []);

  return (
    <div className="App">
      <header>
        <h1>React Forum</h1>
      </header>
      
      <Switch>
        <Route exact path="/" render={() => <Home postList={postList} {...props} />} />
        <Route path="/post/:id" render={() => <PostPage {...props} />} />
      </Switch>
      <footer>
        <p>Copyright 2022 </p>
        <div className="footerIcons"><a href="https://github.com/EmmaAslan">
          <BsGithub /> </a>
        <a href="https://www.instagram.com/emmawofflan/" > <BsInstagram /> </a>
        <a href="https://www.linkedin.com/in/emma-kanewoff-b9095617b/" > <BsLinkedin /></a> </div>
        
      </footer>
    </div>
  );
}
