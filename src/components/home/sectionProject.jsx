import { Link } from "react-router-dom"


export const SectionProject = ({link, name, data, text}) => {
    return(
        <Link to={`/${link}`} className="sectionProject">
            <span className="sectionProject-data">{data}</span>
            <h3 className="sectionProject-name">{name}</h3>
            <p className="sectionProject-text">{text}</p>
        </Link>
    )
}