import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [active, setActive] = useState('');
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`navbar ${scrolled ? 'scrolled' : ''}`}
        >
            <div className='navbar-container'>
                <Link
                    to='/'
                    className='navbar-logo'
                    onClick={() => {
                        setActive('');
                        window.scrollTo(0, 0);
                    }}
                >
                    <span className="logo-text">Dev Patel</span>
                    <span className="logo-sub">| CS Student at Trent University</span>
                </Link>

                <ul className='nav-links'>
                    <li className={`${active === 'About' ? 'active' : ''}`} onClick={() => setActive('About')}>
                        <a href="#about">About</a>
                    </li>
                    <li className={`${active === 'Work' ? 'active' : ''}`} onClick={() => setActive('Work')}>
                        <a href="#work">Work</a>
                    </li>
                    <li className={`${active === 'Contact' ? 'active' : ''}`} onClick={() => setActive('Contact')}>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>

                <div className='mobile-menu'>
                    <div className="hamburger" onClick={() => setToggle(!toggle)}>
                        <div className={`line ${toggle ? 'open' : ''}`} />
                        <div className={`line ${toggle ? 'open' : ''}`} />
                        <div className={`line ${toggle ? 'open' : ''}`} />
                    </div>

                    <div className={`mobile-dropdown ${toggle ? 'show' : ''}`}>
                        <ul className='mobile-nav-links'>
                            <li onClick={() => { setToggle(!toggle); setActive('About'); }}><a href="#about">About</a></li>
                            <li onClick={() => { setToggle(!toggle); setActive('Work'); }}><a href="#work">Work</a></li>
                            <li onClick={() => { setToggle(!toggle); setActive('Contact'); }}><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
