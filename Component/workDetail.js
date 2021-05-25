import Image from 'next/image'
import styles from '../styles/Home.module.css'


const WorkDetail = () => {
    return (
        <>
            <div className={styles.work}>
                <div className={styles.work_display}>
                    <div className={styles.work_box}>
                        <h2>01</h2>
                        <div className={styles.work_content}>
                            <p>Brand Identity</p>
                            <button>View now</button>
                        </div>
                    </div>
                </div>
                <div className={styles.work_display}>
                    <div className={styles.work_box_2}>
                        <h2>02</h2>
                        <div className={styles.work_content}>
                            <p>Digital Marketing</p>
                            <button>View now</button>
                        </div>
                    </div>
                    <div className={styles.work_box_3}>
                        <h2>03</h2>
                        <div className={styles.work_content}>
                            <p>Web Developing</p>
                            <button>View now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WorkDetail;