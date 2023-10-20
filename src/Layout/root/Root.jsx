import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';
import AddProducts from "../../components/add_products/AddProducts";



const Root = () => {
    return (
        <div>
            <div className='max-w-6xl mx-auto'>
                <Header></Header>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <ToastContainer /> 

        </div>
    );
};

export default Root;