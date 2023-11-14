import { Link } from "react-router-dom"


export const Footer = () => {
    return(
        <footer className="footer">
            <span className="footer-text">© 2023 blog-den.vercel.app | <Link to="/privacy">Политика конфиденциальности</Link></span>
        </footer>
    )
}