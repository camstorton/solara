import Link from 'next/link';

function Header() {
    return (
        <header>
            <h1>
                <Link href='/'>
                    Solara
                </Link>
            </h1>
        </header>
    )
};

export default Header;