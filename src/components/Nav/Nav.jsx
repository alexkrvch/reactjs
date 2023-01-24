import s from './Nav.module.css'

const Nav = () => {
    return (
        <nav className={s.nav}>
            <a href="/profile" className={`${s.item} ${s.active}`}><span>Profile</span></a>
            <a href="/dialogs" className={s.item}><span>Message</span></a>
            <a href="/music" className={s.item}><span>Music</span></a>
            <a href="/news" className={s.item}><span>News</span></a>
            <a href="/settings" className={s.item}><span>Settings</span></a>
        </nav>
    )
}

export default Nav;