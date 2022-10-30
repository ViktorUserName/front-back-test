import React from 'react';
import {Link} from "react-router-dom";
import s from './Header.module.scss';

const Header: React.FC = () => {
    return (
        <header>
                <div className={s.headerContent}>
                    <nav className={s.headerNav}>
                        <ul className={s.headerNavUl}>
                            <li>
                                <Link to={'/'}>Main</Link>
                            </li>
                            <li>
                                <Link to={'/cards'}>Cards</Link>
                            </li>
                        </ul>
                        {/* <ul>
                            <li>
                                <Link></Link>
                            </li>
                        </ul> */}
                    </nav>
                </div>
        </header>
    );
};

export default Header;