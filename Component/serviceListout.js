import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ServiceBanner from './serviceBanner'

const ServiceListout = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className={styles.services}>
                        <div className={styles.serv_title} style={{ marginTop: "60px" }}>
                            <h2>Our Services</h2>
                        </div>
                        <div className={styles.serv_content}>
                            <ServiceBanner />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ServiceListout;