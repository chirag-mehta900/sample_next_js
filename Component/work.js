import styles from '../styles/Home.module.css'
import WorkDetail from './workDetail'



const Work = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className={styles.services}>
                        <div className={styles.serv_title}>
                            <h2>Discover our works</h2>
                        </div>
                        <div className={styles.serv_content}>
                            <WorkDetail />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Work;