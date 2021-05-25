import Image from 'next/image'
import styles from '../styles/Home.module.css'


const CustomerDetali = () => {
    return (
        <>
            <div className={styles.cust}>
                <div className={styles.cust_disp}>
                    <Image
                        src="/cus/customer_1.png" alt="Picture of the author"
                        width={300}
                        height={300}>
                    </Image>
                    <Image
                        src="/cus/customer_2.png" alt="Picture of the author"
                        width={300}
                        height={300}>
                    </Image>
                    <Image
                        src="/cus/customer_3.png" alt="Picture of the author"
                        width={300}
                        height={300}>
                    </Image>
                </div>
                <div className={styles.cust_disp}>
                    <Image
                        src="/cus/customer_4.png" alt="Picture of the author"
                        width={300}
                        height={300}>
                    </Image>
                    <Image
                        src="/cus/customer_5.png" alt="Picture of the author"
                        width={300}
                        height={300}>
                    </Image>
                    <Image
                        src="/cus/customer_6.png" alt="Picture of the author"
                        width={300}
                        height={300}>
                    </Image>
                </div>
            </div>
        </>
    );
}

export default CustomerDetali;