import s from './Nav.module.css'
import {NavLink} from "react-router-dom";
import PopularUsers from "./PopularUsers/PopularUsers";

const Nav = (props) => {
    return (
        <nav className={s.nav}>
            <NavLink to="/profile" className={({ isActive }) => isActive ? `${s.item} ${s.active}` : s.item}><span>Profile</span></NavLink>
            <NavLink to="/dialogs" className={({ isActive }) => isActive ? `${s.item} ${s.active}` : s.item}><span>Message</span></NavLink>
            <NavLink to="/music" className={({ isActive }) => isActive ? `${s.item} ${s.active}` : s.item}><span>Music</span></NavLink>
            <NavLink to="/news" className={({ isActive }) => isActive ? `${s.item} ${s.active}` : s.item}><span>News</span></NavLink>
            <NavLink to="/settings" className={({ isActive }) => isActive ? `${s.item} ${s.active}` : s.item}><span>Settings</span></NavLink>

            <PopularUsers state={props.state} />
        </nav>
    )
}

export default Nav;