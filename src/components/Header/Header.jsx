import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <a href="/" className={s.logo}>
                <img src="/logo.png" alt="" />
            </a>
        </header>
    )
};

export default Header;