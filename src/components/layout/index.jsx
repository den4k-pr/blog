import { Footer } from "./footer"
import { Header } from "./header"


export const Layout = ({children}) => {
    return(
        <>
            <Header />
                <main className="container">{children}</main>
            <Footer />
        </>
    )
}