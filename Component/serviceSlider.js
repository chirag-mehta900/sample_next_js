import styles from '../styles/Home.module.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const ServiceSlider = () => {
    return (
        <>
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                <div className={styles.service_slider}>
                    <div className={styles.service_slider_top}>
                        <h2>Ecommerce</h2>
                    </div>
                    <div className={styles.service_slider_bottom}>
                        <p>We design and build your ecommerce, supporting you in the management and maintenance. Structuring a plan for launching or opening it. Seo friendly.</p>
                    </div>
                </div>
                <div className={styles.service_slider}>
                    <div className={styles.service_slider_top}>
                        <h2>Digital Marketing</h2>
                    </div>
                    <div className={styles.service_slider_bottom}>
                        <p>We design and build your ecommerce, supporting you in the management and maintenance. Structuring a plan for launching or opening it. Seo friendly.</p>
                    </div>
                </div>
                <div className={styles.service_slider}>
                    <div className={styles.service_slider_top}>
                        <h2>Web Developing</h2>
                    </div>
                    <div className={styles.service_slider_bottom}>
                        <p>We design and build your ecommerce, supporting you in the management and maintenance. Structuring a plan for launching or opening it. Seo friendly.</p>
                    </div>
                </div>
                <div className={styles.service_slider}>
                    <div className={styles.service_slider_top}>
                        <h2>Server Developing</h2>
                    </div>
                    <div className={styles.service_slider_bottom}>
                        <p>We design and build your ecommerce, supporting you in the management and maintenance. Structuring a plan for launching or opening it. Seo friendly.</p>
                    </div>
                </div>
            </Carousel>;
        </>
    );
}

export default ServiceSlider;