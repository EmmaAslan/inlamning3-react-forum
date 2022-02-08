import "./App.css";
import { Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home.jsx";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PostPage from "./pages/PostPage.jsx";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

export default function App(props) {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => response.json())
      .then((json) => setPostList(json));
  }, []);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" render={() => <Home postList={postList} {...props} />} />
        <Route path="/post/:id" render={() => <PostPage {...props} />} />
      </Switch>
      <Footer />
    </div>
  );
}
