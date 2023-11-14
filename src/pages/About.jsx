import { AboutContact } from "../components/about/contact"
import { AboutInfo } from "../components/about/info"

export const About = () => {
    return(
        <section className="about">
            <AboutInfo />
            <AboutContact />
        </section>
    )
}