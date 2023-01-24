import s from './Nav.module.css'

const Nav = () => {
    return (
        <nav className={s.nav}>
            <a href="rl/src/components#" className={`${s.item} ${s.active}`}><span>Profile</span></a>
            <a href="rl/src/components#" className={s.item}><span>Message</span></a>
            <a href="rl/src/components#" className={s.item}><span>Music</span></a>
            <a href="rl/src/components#" className={s.item}><span>News</span></a>
            <a href="rl/src/components#" className={s.item}><span>Settings</span></a>
        </nav>
    )
}

export default Nav;