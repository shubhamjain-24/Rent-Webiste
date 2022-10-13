import './filter.css';
import img from "../../images/h6.jpg"
import Navbar from '../Navbar/Navbar';

function App() {


    return (
        <>
            <Navbar />
            <section className='filter'>
                <div className="filter-img">
                    <img src={img} alt="" />
                    <div className="shadow">
                    </div>
                   
                </div>
            </section>


        </>
    );
}

export default App;