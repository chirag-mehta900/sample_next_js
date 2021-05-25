import styles from '../styles/Home.module.css'
import CustomerDetali from './customerDetail'


const Customer = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className={styles.services}>
                        <div className={styles.serv_title}>
                            <h2>Our Customers</h2>
                        </div>
                        <div className={styles.serv_content}>
                            <CustomerDetali />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Customer;