import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ServiceSlider from './serviceSlider'

const Services = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className={styles.services}>
                        <div className={styles.serv_title}>
                            <h2>Our Services</h2>
                        </div>
                        <div className={styles.serv_content}>
                            <ServiceSlider />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Services;