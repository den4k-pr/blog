import { useState } from "react"
import { Link } from "react-router-dom"


export const Header = () => {
    const [burger, setBurger] = useState(false)

    const HendleClothe = () => {
        setTimeout(() => {
            setBurger(false)
        }, 500)
    }

    return(
        <header className="header">
            <div className="header__wrapper">
                <Link to="/" className="header__wrapper-logo">
                    <img src="/images/logo.png" alt="" />
                </Link>
                <button onClick={() => setBurger(true)} class={`burgerButton`}>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </button>
                {burger && <button onClick={() => setBurger(false)} class="burgerButtonClothe">
                    <div class="line"></div>
                    <div class="line"></div>
                </button>}
                <ul style={{transform: !burger ? "translateY(-100%)" : "translateY(0%)"}} className={`header__wrapper-list`}>
                    <li onClick={HendleClothe} className="header__wrapper-list-link">
                        <Link to="/">Strona główna</Link>
                    </li>
                    <li onClick={HendleClothe} className="header__wrapper-list-link">
                        <Link to="/about">O nas</Link>
                    </li>
                    <li onClick={HendleClothe} className="header__wrapper-list-link">
                        <Link to="/privacy">Polityka prywatności</Link>
                    </li>
                </ul>
                <ul className="header__wrapper-listMedia">
                    <li className="header__wrapper-listMedia-link">
                        <Link to="https://github.com/den4k-pr">
                            <img src="/images/github.svg" alt="" />
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}
