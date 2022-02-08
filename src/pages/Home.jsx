import { Link } from "react-router-dom";
import {useState} from "react"
import ReactPaginate from "react-paginate";

const Home = ({ postList }) => {
  const [pageNumber, setPageNumber] = useState(0);
  const postsPerPage = 10;
  //Sidor vi har besökt hittills
  const pagesVisited = pageNumber * postsPerPage;

  //Hur många objekt vi visar per sida
  const displayPosts = postList.slice(pagesVisited, pagesVisited + postsPerPage).map((post, i) => {
    return (
    <Link key={i} to={`/post/${post.id}`}>
      <p className="postList">{post.title}</p>
    </Link>
    );
  })

  //Avrundar numret uppåt.. 
  const pageCount = Math.ceil(postList.length / postsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  }

  return (
    <div className="divPostList">
      {displayPosts}
      <ReactPaginate
        breakClassName={"breakClassName"}
        previousLabel={" < "}
        nextLabel={" > "}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
        marginPagesDisplayed={10}
      />
    </div>
  );
};

export default Home;