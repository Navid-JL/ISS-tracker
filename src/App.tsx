import { Fragment } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { Container } from "@chakra-ui/react";

const App = () => {
    return (
        <Fragment>
            <Header />
            <Main />
            <Footer />
        </Fragment>
    );
};
export default App;
