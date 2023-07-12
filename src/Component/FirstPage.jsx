import React, { useEffect, useState } from 'react'
import './FirstPage.css';
import { Link, useParams } from 'react-router-dom';


export function FirstPage() {

    const [hotals, setHotals] = useState([]);
    const [city, setCity] = useState('');
    const [experience, setExperience] = useState('');
    const [pooll, setPooll] = useState(false);
    const { id } = useParams();


    useEffect(() => {
        fetch(`http://localhost:8080/hotal/get`)
            .then((data) => data.json())
            .then((data) => { setHotals(data) })
            .catch((e) => console.log(e))
    }, [id])

    const onSearch =()=>{
        console.log(city,experience,pooll);
        console.log(hotals);

        const filteredData = hotals.filter((hotel)=>{
            const location = hotel.cityOfHotal;
            const exper = hotel.experienceLevel;

            if(city === location.toLowerCase()){
                if(experience === exper.toLowerCase()){
                    if(pooll === hotel.pool){
                        return hotel;
                    }
                }
            }
            else{
                return null;
            }
        })

        setHotals(filteredData);
    }

    return (


        <>
            <div className='custom-dropdown'>
                <div className='fir'>
                    <label>Select the city</label>
                    <select className="form-select " value={city} onChange={e => setCity(e.target.value)}>
                        <option value="" className='dd1'>Select City</option>
                        <option value="karachi">Karachi</option>
                        <option value="lahore">Lahore</option>
                        <option value="islamabad">Islamabad</option>
                    </select>
                </div>
                <div className='sec'>
                    <label>Select the Experience</label>
                    <select className="form-select" value={experience} onChange={e => setExperience(e.target.value)}>
                        <option value="" className='dd2'>Select Experience</option>
                        <option value="budget">budget</option>
                        <option value="bussiness">bussiness</option>
                        <option value="luxury">Luxury</option>
                    </select>
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"  checked={pooll} onChange={(e)=>{setPooll(e.target.checked)}} />
                    <label class="form-check-label" for="exampleCheck1">Pool</label>


                </div>
                <button type="button" style={{ padding: '20px' }} class="btn btn-secondary btn-lg" onClick={onSearch}>Search</button>
            </div>


            <div style={{ display: 'flex', }}>
                {hotals.map((h) => (
                    <div class="card" style={{ width: '18rem' }}>
                        <img src={h.imageLink} class="card-img-top" />

                        <div class="card-body">
                            <Link to={`/second/${h.id}`}><h5 class="card-title">Hotal Name: {h.nameOfHotal}</h5></Link>
                            <p class="card-text">{h.shortDiscription}</p>
                            <Link to={`/ThirdPage/${h.id}`}>Book Now</Link>
                        </div>

                    </div>
                ))}

            </div>


        </>
    )
}
