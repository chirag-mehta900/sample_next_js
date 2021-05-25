import Image from 'next/image'
import styles from '../styles/Home.module.css'

const ServiceBanner = () => {
    return (
        <>
            <section>
                <div className={styles.serv_ban_box}>
                    <div className={styles.serv_ban_detail}>
                        <Image
                            src="/Path_313.png" alt="Picture of the author"
                            width={100}
                            height={100}>
                        </Image>
                        <h2>Brand Identity</h2>
                        <span>What:</span>
                        <p>Develop a solid and clear image to better communicate</p>
                        <span>why:</span>
                        <p>Be recognizable and know how to position yourself.</p>
                        <span>how:</span>
                        <p>Using the right distinctive elements</p>
                    </div>
                    <div className={styles.serv_ban_image}>
                        <Image
                            src="/service_banner.png" alt="Picture of the author"
                            width={590}
                            height={390}>
                        </Image>
                    </div>
                </div>
                <div className={styles.serv_ban_box}>
                    <div className={styles.serv_ban_image_2}>
                        <Image
                            src="/service_banner_2.png" alt="Picture of the author"
                            width={590}
                            height={330}>
                        </Image>
                    </div>
                    <div className={styles.serv_ban_detail_2}>
                        <Image
                            src="/Path_312.png" alt="Picture of the author"
                            width={100}
                            height={100}>
                        </Image>
                        <h2>Brand Identity</h2>
                        <span>What:</span>
                        <p>Develop a solid and clear image to better communicate</p>
                        <span>why:</span>
                        <p>Be recognizable and know how to position yourself.</p>
                        <span>how:</span>
                        <p>Using the right distinctive elements</p>
                    </div>
                </div>
                <div className={styles.call}>
                    <h2>DO YOU HAVE AN OFFLINE BUSINESS?</h2>
                    <button>Make A Call</button>
                </div>
                <div className={styles.serv_ban_box}>
                    <div className={styles.serv_ban_detail}>
                        <Image
                            src="/Path_314.png" alt="Picture of the author"
                            width={100}
                            height={100}>
                        </Image>
                        <h2>Brand Identity</h2>
                        <span>What:</span>
                        <p>Develop a solid and clear image to better communicate</p>
                        <span>why:</span>
                        <p>Be recognizable and know how to position yourself.</p>
                        <span>how:</span>
                        <p>Using the right distinctive elements</p>
                    </div>
                    <div className={styles.serv_ban_image}>
                        <Image
                            src="/service_banner_3.png" alt="Picture of the author"
                            width={590}
                            height={390}>
                        </Image>
                    </div>
                </div>
                <div className={styles.serv_ban_box}>
                    <div className={styles.serv_ban_image_2}>
                        <Image
                            src="/service_banner_4.png" alt="Picture of the author"
                            width={590}
                            height={330}>
                        </Image>
                    </div>
                    <div className={styles.serv_ban_detail_2}>
                        <Image
                            src="/Path_315.png" alt="Picture of the author"
                            width={100}
                            height={100}>
                        </Image>
                        <h2>Brand Identity</h2>
                        <span>What:</span>
                        <p>Develop a solid and clear image to better communicate</p>
                        <span>why:</span>
                        <p>Be recognizable and know how to position yourself.</p>
                        <span>how:</span>
                        <p>Using the right distinctive elements</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ServiceBanner;