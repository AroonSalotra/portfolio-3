import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
    return (
        <div>
            <h2>Contact</h2>
            <div className="contact-btns">
                <MdEmail className="icon" />
                <FaLinkedin className="icon" />
            </div>
        </div>
    )
}

export default Contact;