import Banner from "./Banner"
import Intro from "./intro"
import Services from "./service"

const Landing = () => {
    return (
        <>
            <section>
                <Banner />
                <Intro />
                <Services />
            </section>
        </>
    );
}

export default Landing;