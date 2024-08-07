
import logoImg from '@/assets/logo.png';
import Image from 'next/image';
import classes from './main-header.module.css'
import Link from 'next/link';
import MainHeaderBackground from './main-header-background';
import NavLink from './nav-link';

export default function MainHeader() {
    return (
        <>
        <MainHeaderBackground />
        <header className={classes.header}>
            <Link className={classes.logo} href="/">

                <Image src={logoImg} alt='food' />
                NextLevel Food
            </Link>

            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink href="/meals">Browse Meals</NavLink>
                    </li>
                    <li>
                        <NavLink href="/community">Foodie Community</NavLink>
                    </li>
                </ul>
            </nav>

        </header>
        </>
    );
}