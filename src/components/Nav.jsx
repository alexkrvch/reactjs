import s from './Nav.module.css'

const Nav = () => {
    return (
        <nav className={s.nav}>
            <a href="#" className={`${s.item} ${s.active}`}><span>Profile</span></a>
            <a href="#" className={s.item}><span>Message</span></a>
            <a href="#" className={s.item}><span>Music</span></a>
            <a href="#" className={s.item}><span>News</span></a>
            <a href="#" className={s.item}><span>Settings</span></a>
        </nav>
    )
}

export default Nav;