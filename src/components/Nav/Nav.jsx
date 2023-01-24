import s from './Nav.module.css'
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={s.nav}>
            <NavLink to="/profile" className={({ isActive }) => isActive ? `${s.item} ${s.active}` : s.item}><span>Profile</span></NavLink>
            <NavLink to="/dialogs" className={({ isActive }) => isActive ? `${s.item} ${s.active}` : s.item}><span>Message</span></NavLink>
            <NavLink to="/music" className={({ isActive }) => isActive ? `${s.item} ${s.active}` : s.item}><span>Music</span></NavLink>
            <NavLink to="/news" className={({ isActive }) => isActive ? `${s.item} ${s.active}` : s.item}><span>News</span></NavLink>
            <NavLink to="/settings" className={({ isActive }) => isActive ? `${s.item} ${s.active}` : s.item}><span>Settings</span></NavLink>
        </nav>
    )
}

export default Nav;