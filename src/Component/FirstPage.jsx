import React, { useEffect, useState } from 'react'
import './FirstPage.css';


export function FirstPage() {

    const [hotals, setHotals] = useState([]);

    // useEffect(() => {
    //     const fetchHotal = () => {
    //       try {
    //         fetch(`http://localhost:8080/hotal/get`);
    //         const data = await response.json();
    //         setHotals(data);
    //       } catch (error) {
    //         console.error('Error occurred while fetching hotal data', error);
    //       }
    //     };

    //     fetchHotal();
    //   }, []);

    useEffect(() => {
        fetch("http://localhost:8080/hotal/get")
            .then((data) => data.json())
            .then((data) => { setHotals(data) })
            .catch((e) => console.log(e))
    }, [])



    return (


        <>
            <div className='custom-dropdown'>
                <div className='fir'>
                    <label>Select the city</label>
                    <select className="form-select ">
                        <option value="" className='dd1'>Select City</option>
                        <option value="Karachi">Karachi</option>
                        <option value="Lahore">Lahore</option>
                        <option value="Islamabad">Islamabad</option>
                    </select>
                </div>
                <div className='sec'>
                    <label>Select the Experience</label>
                    <select className="form-select">
                        <option value="" className='dd2'>Select Experience</option>
                        <option value="Karachi">budget</option>
                        <option value="Lahore">bussiness</option>
                        <option value="Islamabad">Luxury</option>
                    </select>
                </div>
                <div className='pool'>pool<input type="checkbox" /></div>
                <button type="button" style={{ padding: '20px' }} class="btn btn-secondary btn-lg" disabled>Search</button>
            </div>


            <div style={{ display: 'flex', }}>
            {hotals.map((h) => (
                <div class="card" style={{ width: '18rem' }}>
                    <img src={h.imageLink} class="card-img-top" />
                   
                        <div class="card-body">
                            <h5 class="card-title">Card title: {h.nameOfHotal}</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                   
                </div>
                ))}

            </div>


        </>
    )
}
