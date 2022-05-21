import Link from 'next/link';
import React from 'react';
import styles from './NavItem.module.css';

function NavItem(props: any) {
    return (
        <Link href={props.href}>
            <div className={styles.navitem}>
                <h2>{props.name}</h2>
            </div>
        </Link>
    );
};

export default NavItem;