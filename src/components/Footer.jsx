import "../App.css";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer = () => {
    return (
        <div className="footer">
            <small> &copy; 2022 Emma Kanewoff </small>
            <div className="footerIcons">
                <a href="https://github.com/EmmaAslan"><BsGithub /> </a>
                <a href="https://www.instagram.com/emmawofflan/"><BsInstagram /> </a>
                <a href="https://www.linkedin.com/in/emma-kanewoff-b9095617b/" ><BsLinkedin /> </a> 
            </div>
        </div>
    )
}

export default Footer;