import {Link, NavLink, useNavigate} from "react-router-dom";
import 'styles/_nav.scss'

export default function Nav() {

    interface Navbar {
        name: string
        url: string
    }

    return (
        <nav role="navigation" className={"navbar"}>
            <Link to={"/"}>스몰스 관리자</Link>
            <ul className="navbar__menu">
                <li className="navbar__menu__item">
                    <Link to={""}>시스템 관리</Link>
                </li>

            </ul>
        </nav>
    )
}