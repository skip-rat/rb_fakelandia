import { Outlet } from "react-router-dom";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import '../layouts/main_layout.css';

const MainLayout : React.FC = () => <>
    <section className="layout">
        <Header />
        <main>
            <Outlet />
        </main> 
        <Footer /> 
    </section>
</>;

export default MainLayout; 