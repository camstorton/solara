import NavItem from './NavItem';
import React from 'react';
import styles from './NavBar.module.css';

function NavBar(props: any) {
    return (
        <div className={styles.navbar}
             style={{ width: '25%' }}>
            <NavItem name='Site and Module Data' href='/workflow/page1'/>
            <NavItem name='DC String Data/ Ampacity Inputs' href='/workflow/page2'/>
            <NavItem name='AC String Data / Ampacity Inputs' href='/workflow/page4'/>
            <NavItem name='DC Wire Sizing' href='/workflow/page3'/>
            <NavItem name='AC Wire Sizing' href='/workflow/page5'/>
        </div>
    );
};

export default NavBar;
