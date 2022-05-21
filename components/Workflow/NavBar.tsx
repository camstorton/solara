import NavItem from './NavItem';
import React from 'react';
import styles from './NavBar.module.css';

function NavBar(props: any) {
    return (
        <div className={styles.navbar}
             style={{ width: '25%' }}>
            <NavItem name='Page One' href='/workflow/page1'/>
            <NavItem name='Page Two' href='/workflow/page2'/>
            <NavItem name='Page Three' href='/workflow/page3'/>
            <NavItem name='Page Four' href='/workflow/page4'/>
            <NavItem name='Page Five' href='/workflow/page5'/>
        </div>
    );
};

export default NavBar;