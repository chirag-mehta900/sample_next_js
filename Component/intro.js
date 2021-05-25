import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Intro = () => {
    return (
        <>
            <section style={{ marginTop: "60px" }}>
                <div className="container" style={{ paddingBottom: "50px" }}>
                    <div className={styles.intro_box}>
                        <div className={styles.intro_image}>
                            <Image
                                src="/intro.png" alt="Picture of the author"
                                width={300}
                                height={450}>
                            </Image>
                        </div>
                        <div className={styles.intro_content}>
                            <h2>Online / Offline</h2>
                            <p>Having an online presence is no longer optional, it is an obligation. If you want your company to live and grow, you have to digitize yourself.</p>
                            <p>As? With a strategy, a tailor-made plan. That allows your company to grow and be known.</p>
                            <p>Like every company, every strategy is different, Moonshot agency was born to understand all aspects of this transformation.</p>
                            <div className={styles.content_button}>
                                <button>Make A Call</button>
                                <button>Contact Us</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Intro;