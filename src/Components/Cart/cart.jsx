import React from 'react'
import './cart.css'
import bed from '../../images/bed.png'
import bathroom from '../../images/bathroom.svg'
import area from '../../images/area.svg'
import favourite from '../../images/favourite.svg'
import villa from '../../images/v1.jpeg'
const cart = () => {
    return (
        <div className='cart'>
            <div className="cart-container">
                <img className='image' src={villa} alt="" />
                <div className="details">
                    <h1 >Jainam House</h1>
                    <p className='address' >Silicon city 204 A</p>
                    <p className='address' >Indore</p>
                    <p className='address' >Flat</p>
                        <p style={{ color: "#33ccff", fontSize: "18px", marginTop: "5px" }}>₹24,000 <span style={{ color: "gray", fontSize: "15px" }}>/month</span></p>
                    <div className="detail-Item">
                        <div className="detailitem"><img className='logoImg' src={bed} alt="" /> <span style={{ color: 'gray', fontSize: "15px" }} > 3 Beds </span>
                        </div>
                        <div className="detailitem"><img className='logoImg' src={bathroom} alt="" /> <span style={{ color: 'gray', fontSize: "15px" }} > 4 Bathrooms </span></div>
                        <div className="detailitem"><img className='logoImg' src={area} alt="" /><span style={{ color: 'gray', fontSize: "15px" }}>7*2m <sup>2</sup></span></div>
                    </div>
                    <p className="info">This House is furnished with all the facilities <br />includes the maintainance of the Colony</p>
                </div>
                <div className="map">

                <div class="mapouter"><div class="gmap_canvas"><iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=309&amp;height=764&amp;hl=en&amp;q=indore&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>
                </div>
                </div>
            </div>

        </div>
    )
}

export default cart
