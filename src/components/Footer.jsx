
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="container-footer">
            <ul>
                <li>
                    Powered by Vite (React) & Firebase
                </li>

                <li>
                    <a target="_blank" href="https://github.com/AroonSalotra">
                        <FaGithub className="icon-s clickable" />
                    </a>
                </li>

                <li>
                    © 2026 Aroon Salotra. All rights reserved.
                </li>
            </ul>
        </div>
    )
}

export default Footer;