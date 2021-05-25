import Footer from "../Component/footer"
import Header from "../Component/header"

const Layout = ({ children }) => {
    return (
        <div className="content">
            <Header />
            { children}
            <Footer />
        </div>
    );
}

export default Layout;