import Banner from "./Banner"
import Customer from "./customer"
import Intro from "./intro"
import Services from "./service"
import ServiceListout from "./serviceListout"
import Work from "./work"

const Landing = () => {
    return (
        <>
            <section>
                <Banner />
                <Intro />
                <Services />
                <ServiceListout />
                <Customer />
                <Work />
            </section>
        </>
    );
}

export default Landing;