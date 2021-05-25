import Image from 'next/image'
import styles from '../styles/Header.module.css'
import { Nav, NavLink } from 'react-bootstrap'

const Header = () => {
    return (
        <>
            <section className={styles.topnav}>
                <div className="container">
                    <div className={styles.logo_pages}>
                        <div className="logo">
                            <Image
                                src="/Logo.png" alt="Picture of the author"
                                width={100}
                                height={100}>
                            </Image>
                        </div>
                        <div className="">
                            <Nav defaultActiveKey="/" as="ul">
                                <Nav.Item as="li">
                                    <Nav.Link href="/" className={styles.nav_content}>Home</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link href="/about" className={styles.nav_content}>Services</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link eventKey="link-2" className={styles.nav_content}>Portfolio</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link eventKey="link-2" className={styles.nav_content}>Who we are</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Header;