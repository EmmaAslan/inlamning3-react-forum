import {BsPersonCircle, BsClock} from "react-icons/bs";

const Author = () => {
    return (
        <div className="author">
            <div className="authorName">
                <p><BsPersonCircle/>Author Namesson</p>
            </div>
            <div>
                <p className="authorDate">Published: February 8, 2022 <BsClock/></p>
            </div>
        </div>
    )
}

export default Author;