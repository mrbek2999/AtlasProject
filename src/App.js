import Navbar from "./blocks/Navbar";
import LogoPlayMarket from './files/images/ion_logo-google-playstore.svg'
import NavigatePng1 from './files/images/navigate1.png'
import NavigatePng2 from './files/images/navigate4.png'
import NavigatePng3 from './files/images/navigate3.png'
import NavigatePng4 from './files/images/navigate2.png'
import NavigatePng5 from './files/images/navigate5.png'
import restaurant from './files/images/restaurant.jpg'
import {ReactComponent as Nearby1} from './files/images/nearby1.svg'
import {ReactComponent as Nearby2} from './files/images/nearby2.svg'
import {ReactComponent as Nearby3} from './files/images/nearby3.svg'
import {ReactComponent as Nearby4} from './files/images/nearby4.svg'
import {ReactComponent as Arrow_nearby} from './files/images/nearby-arrow.svg'
import {Link} from "react-router-dom";

function App() {
    return <div>
        <Navbar/>
        <div className="bg-border">
            <div className={'container'}>
                <div className="navigate-to-atlas">
                    <div className="row">
                        <div className="col-lg-6 text-navigate">
                            <h1>Navigate to the <br/><span> Atlas </span>for VIT</h1>
                            <p>All in one resource Guide for VIT</p>
                            <Link to={'/'} className={'navigate-btn'}><img src={LogoPlayMarket} alt="LogoPlayMarket"/>Downlaod
                                App Now</Link>
                        </div>
                        <div className="col-lg-6 photo-navigate">
                            <div className="row">
                                <div className="col-lg-7">
                                    <div className="photo-block photo-block-1">
                                        <img src={NavigatePng1} alt="NavigatePng1"/>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="photo-block photo-block-2">
                                        <img src={NavigatePng2} alt="NavigatePng2"/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="photo-block photo-block-3">
                                        <img src={NavigatePng3} alt="NavigatePng3"/>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="photo-block photo-block-4">
                                        <img src={NavigatePng4} alt="NavigatePng4"/>
                                    </div>
                                </div>
                                <div className="abs-photo">
                                    <div className="photo-block photo-block-5">
                                        <img src={NavigatePng5} alt="NavigatePng5"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <section className={'restaurants-section'}>
            <div className="title-section">
                <h2>Trending</h2>
            </div>
            <div className="restaurants">
                <div className="container">
                    <div className="restaurants-block">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="card">
                                    <div className="card-image">
                                        <img src={restaurant} alt="img-card"/>
                                    </div>
                                    <div className="card-body">
                                        <div className="card-detail">
                                            <p>Open Hours : Reliance Trends</p>
                                            <p>Rs 800 for 2 people</p>
                                            <p>ETA : 5 mins from VIT</p>
                                        </div>
                                        <div className="card-btn">
                                            <Link to={'/'}>Explore</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card">
                                    <div className="card-image">
                                        <img src={restaurant} alt="img-card"/>
                                    </div>
                                    <div className="card-body">
                                        <div className="card-detail">
                                            <p>Open Hours : Reliance Trends</p>
                                            <p>Rs 800 for 2 people</p>
                                            <p>ETA : 5 mins from VIT</p>
                                        </div>
                                        <div className="card-btn">
                                            <Link to={'/'}>Explore</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card">
                                    <div className="card-image">
                                        <img src={restaurant} alt="img-card"/>
                                    </div>
                                    <div className="card-body">
                                        <div className="card-detail">
                                            <p>Open Hours : Reliance Trends</p>
                                            <p>Rs 800 for 2 people</p>
                                            <p>ETA : 5 mins from VIT</p>
                                        </div>
                                        <div className="card-btn">
                                            <Link to={'/'}>Explore</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className={'nearby-block'}>
            <div className="title-section">
                <h2>Nearby</h2>
            </div>
            <div className="nearbies">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="card">
                                <div className="card-image">
                                    <Nearby1/>
                                </div>
                                <div className="card-body">
                                    <div className="card-title">
                                        <h3>Restaurants</h3>
                                        <p>Delivering faster and more personalized support with </p>
                                    </div>
                                </div>
                                <div className="card-btn">
                                    <Link to={'/'}>Checkout <span><Arrow_nearby/></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card">
                                <div className="card-image">
                                    <Nearby2/>
                                </div>
                                <div className="card-body">
                                    <div className="card-title">
                                        <h3>Hangouts</h3>
                                        <p>Delivering faster and more personalized support with </p>
                                    </div>
                                </div>
                                <div className="card-btn">
                                    <Link to={'/'}>Checkout <span><Arrow_nearby/></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card">
                                <div className="card-image">
                                    <Nearby3/>
                                </div>
                                <div className="card-body">
                                    <div className="card-title">
                                        <h3>Utilities</h3>
                                        <p>Delivering faster and more personalized support with </p>
                                    </div>
                                </div>
                                <div className="card-btn">
                                    <Link to={'/'}>Checkout <span><Arrow_nearby/></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card">
                                <div className="card-image">
                                    <Nearby4/>
                                </div>
                                <div className="card-body">
                                    <div className="card-title">
                                        <h3>Shopping</h3>
                                        <p>Delivering faster and more personalized support with </p>
                                    </div>
                                </div>
                                <div className="card-btn">
                                    <Link to={'/'}>Checkout <span><Arrow_nearby/></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
}

export default App