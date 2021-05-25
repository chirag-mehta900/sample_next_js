import Image from 'next/image'
import styles from '../styles/Home.module.css'


const Banner = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className={styles.banner}>
                        <Image
                            src="/banner.png" alt="Picture of the author"
                            width={600}
                            height={400}>
                        </Image>
                    </div>
                    <div className={styles.banner_content}>
                        <p>another boring web acency</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Banner;