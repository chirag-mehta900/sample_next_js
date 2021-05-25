import Image from 'next/image'
import { Nav } from 'react-bootstrap';
import styles from '../styles/Footer.module.css'


const Footer = () => {
    return (
        <>
            <section className={styles.f_footer}>
                <div className="container">
                    <div className={styles.footer_box}>
                        <div>
                            <Image
                                src="/Logo.png" alt="Picture of the author"
                                width={100}
                                height={100}>
                            </Image>
                        </div>
                        <div className={styles.footer_content}>
                            <Nav defaultActiveKey="/" as="ul">
                                <Nav.Item as="li">
                                    <Nav.Link href="/" className={styles.nav_content}>Home</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link eventKey="link-1" className={styles.nav_content}>Services</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link eventKey="link-2" className={styles.nav_content}>Portfolio</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link eventKey="link-2" className={styles.nav_content}>Who we are</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <div className={styles.footer_content_down}>
                                <p>chirag.smartypantstech@gmail.com</p>
                            </div>
                        </div>
                        <div className={styles.footer_follow}>
                            <h2>Follow me on</h2>
                            <div className={styles.social_media}>
                                <div className={styles.social_media_box}>
                                    <Image src="/Mask Group 1.svg" width={20} height={20}></Image>
                                </div>
                                <div className={styles.social_media_box}>
                                    <Image src="/Mask Group 2.svg" width={20} height={20}></Image>
                                </div>
                                <div className={styles.social_media_box}>
                                    <Image src="/Mask Group 3.svg" width={20} height={20}></Image>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Footer;