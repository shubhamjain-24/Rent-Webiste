import React, { useEffect, useState } from 'react'
import './card.css';
import '../filter/filter.css';
import bed from '../../images/bed.png'
import bathroom from '../../images/bathroom.svg'
import area from '../../images/area.svg'
import favourite from '../../images/favourite.svg'
// import {arr} from "../../dummydata";


const Card = () => {
    const arr = [
        {   id:1,
            image:'../images/h1.jpg',
            location:"Delhi",
            type:"House",
            BHK:"4BHK",
            price:"5K-10K",
            buy:"Rent",
            name:"Jainam House",
            address:"Near Rajiv Chock 205 A",
            beds:"4",
            bathrooms:"3",
            area:"5×7"
        },
        {   id:2,
            image:'../images/f1.jpg',
            location:"Delhi",
            type:"Flat",
            BHK:"2BHK",
            price:"20K-30K",
            buy:"Rent",
            name:"Sky View",
            address:"32 B Mayapuri",
            beds:"2",
            bathrooms:"2",
            area:"3×4"
        },
        {   id:3,
            image:'../images/f2.jpg',
            location:"Indore",
            type:"Flat",
            BHK:"1BHK",
            price:"5K-10K",
            buy:"Rent",
            name:"Vishal Residence",
            address:"19 F Silicon City ",
            beds:"1",
            bathrooms:"1",
            area:"3×3"
        },
        {   id:4,
            image:'../images/h2.jpg',
            location:"Indore",
            type:"House",
            BHK:"3BHK",
            price:"5K-10K",
            buy:"Rent",
            name:"Mannat",
            address:"208 S Scheme 140",
            beds:"3",
            bathrooms:"3",
            area:"5×7"
        },
        {   id:5,
            image:'../images/h3.jpg',
            location:"Banglore",
            type:"House",
            BHK:"4BHK",
            price:"20K-30K",
            buy:"Rent",
            name:"The Gables",
            address:"305 A Near Gandhi Swaure",
            beds:"4",
            bathrooms:"3",
            area:"8×7"
        },
        {   id:6,
            image:'../images/f3.jpeg',
            location:"Banglore",
            type:"flat",
            BHK:"3BHK",
            price:"5K-10K",
            buy:"Rent",
            name:"sparten land",
            address:"304 C House Boaard Office Colony",
            beds:"3",
            bathrooms:"3",
            area:"5×8"
        },
        {   id:7,
            image:'../images/h4.jpg',
            location:"pune",
            type:"flat",
            BHK:"2BHK",
            price:"20K-30K",
            buy:"Rent",
            name:"blue stone",
            address:"22 D Near Bombay hospital",
            beds:"2",
            bathrooms:"1",
            area:"3×9"
        },
        {   id:8,
            image:'../images/f4.jpg',
            location:"Mumbai",
            type:"flat",
            BHK:"2BHK",
            price:"5K-10K",
            buy:"Rent",
            name:"oregano height",
            address:"12 E Newyork City",
            beds:"2",
            bathrooms:"1",
            area:"5×4"
        },
        {   id:9,
            image:'../images/h5.jpg',
            location:"Indore",
            type:"house",
            BHK:"2BHK",
            price:"20K-30K",
            buy:"Rent",
            name:"Hedera House",
            address:"20 F Geeta Bahwan Sqauare",
            beds:"2",
            bathrooms:"2",
            area:"4×9"
        },
        {   id:10,
            image:'../images/f6.jpg',
            location:"Indore",
            type:"flat",
            BHK:"1BHK",
            price:"5K-10K",
            buy:"Rent",
            name:"escoraa avenue",
            address:"34 C Palsia Square",
            beds:"1",
            bathrooms:"1",
            area:"5×7"
        },
        {   id:11,
            image:'../images/h6.jpg',
            location:"Indore",
            type:"house",
            BHK:"4BHK",
            price:"5K-10K",
            buy:"Rent",
            name:"Holmeswoodt",
            address:"303 A Vijay Nagar",
            beds:"4",
            bathrooms:"3",
            area:"10×7"
        },
    ]
    const [loc,setLoc]=React.useState("");
    const [price,setPrice]=React.useState("");
    
    const locate=(e)=>{
      setLoc(e.target.value);
    }
    
    const prices=(e)=>{
      setPrice(e.target.value);
    }
    
    
    
    
    console.log(loc);
    console.log(price);

    var narr=[];

    var parr=[];
    
    for(var i=1;i<arr.length;i++){
      if(arr[i]!=narr[i]){
    console.log("o");
      }
    }
    
    narr=arr.filter(function(data){
      if( data.location===(loc)&&data.price===(price) ){
      
    
       
    return data.location,data.price
      }
    
    
    })
    const [h,setH]=React.useState(true);

    const hand=()=>{
        setH(true);
        
        
        }
        const newhand=()=>{
          setH(false);
        }
    return (
        <>
         <div className="container">
                        <div className="container-input">
                            <input type="search" name="" id="search" placeholder="Search here" />
                            <button className='search-btn'>Search</button>
                        </div>


                        <div className='sec-container'>

                            <select onChange={locate} id="location" name="location" placeholder="City" >
                                <option value="Delhi">Delhi</option>
                                <option value="Indore">Indore</option>
                                <option value="Bangalore">Bangalore</option>
                                <option value="Pune">Pune</option>

                                <option value="Mumbai">Mumbai</option>
                            </select>

                            <select id="type" name="type" disabled >
                            <option disabled selected value> --Select Type-- </option>
                                <option value="House">House</option>
                                <option value="Flat">Flat</option>

                            </select>
                            <select id="BHK" name="beds" disabled>
                            <option disabled selected value> --Select Number of Rooms-- </option>
                                <option value="1BHK">1BHK</option>
                                <option value="2BHK">2BHK</option>
                                <option value="3BHK">3BHK</option>
                                <option value="4BHK">4BHK</option>
                            </select>

                            <select id="price" onChange={prices} name="price" >
                                <option value="5K-10K">5K-10K</option>
                                <option value="20K-30K">20K-30K</option>
                                <option value="31K-50K">31K-50K</option>
                                <option value="100K-200K">100K-200K</option>
                            </select>

                            <select id="buy" name="buy" disabled>
                            <option disabled selected value> --Select Purpose-- </option>
                                <option className="value" value="BUY">BUY</option>
                                <option className="value" value="RENT">RENT</option>

                            </select>
                        </div>
                            <button className='FilterButton' onClick={newhand}>Search Filter</button>
                    </div>
        {h?(<>
        {arr.map((user)=>(
                <div className='card' key={user.id} >
                    <div className="card-image">
                        
            <img  src={user.image} alt="" />
                    </div>
            <div className="cardInfo">
                <div className="priceInfo">
                    <span className='price'>{user.price}</span> /month
                    <div className="favourite">
                        <img className='favouriteItem' src={favourite} alt="" />
                    </div>
                </div>
                <div className="TagName">
                   {user.name}
                </div>
                <div className="address">
                    {user.address}
                </div>
                < hr className='hr' />
                <div className="Details">
                    <div className="detailitem"><img className='logoImg' src={bed} alt="" /> <span style={{ color: 'gray', fontSize: "15px" }} > {user.beds} Beds </span>
                    </div>
                    <div className="detailitem"><img className='logoImg' src={bathroom} alt="" /> <span style={{ color: 'gray', fontSize: "15px" }} > {user.bathrooms} Bathrooms </span></div>
                    <div className="detailitem"><img className='logoImg' src={area} alt="" /><span style={{ color: 'gray', fontSize: "15px" }}>{user.area}m <sup>2</sup></span></div>
                </div>
            </div>
        </div>
        ))}
        </>):(<>
            {narr.map((user)=>(
                <div className='card' key={user.id} >
                    <div className="card-image">
                        
            <img  src={user.image} alt="" />
                    </div>
            <div className="cardInfo">
                <div className="priceInfo">
                    <span className='price'>{user.price}</span> /month
                    <div className="favourite">
                        <img className='favouriteItem' src={favourite} alt="" />
                    </div>
                </div>
                <div className="TagName">
                   {user.name}
                </div>
                <div className="address">
                    {user.address}
                </div>
                {console.log(narr)}
                < hr className='hr' />
                <div className="Details">
                    <div className="detailitem"><img className='logoImg' src={bed} alt="" /> <span style={{ color: 'gray', fontSize: "15px" }} > {user.beds} Beds </span>
                    </div>
                    <div className="detailitem"><img className='logoImg' src={bathroom} alt="" /> <span style={{ color: 'gray', fontSize: "15px" }} > {user.bathrooms} Bathrooms </span></div>
                    <div className="detailitem"><img className='logoImg' src={area} alt="" /><span style={{ color: 'gray', fontSize: "15px" }}>{user.area}m <sup>2</sup></span></div>
                </div>
            </div>
        </div>
        ))}
        
        </>)}
        <button style={{display:"none"}} onClick={hand}>all</button>
      <button style={{display:"none"}} onClick={newhand}>filtered</button>
        </>
    )
}

export default Card
