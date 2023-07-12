import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ThirdPage = () => {

    const [hotals, setHotals] = useState({});
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [arrivalDate, setArrivalDate] = useState(null);
    const [departureDate, setDepartureDate] = useState(null);

    const [totalPrice, setTotalPrice] = useState(null);

    const { id } = useParams();
    const nav = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:8080/hotal/get/${id}`)
            .then((data) => data.json())
            .then((data) => { setHotals(data) })
            .catch((e) => console.log(e))
    }, [id])


    const handleSubmit = (e) => {
        e.preventDefault();

        const bookingData = {
            // id: hotals.id,
            name: name,
            address: address,
            emailAddress: emailAddress,
            arrivalDate: arrivalDate,
            departureDate: departureDate

        }

        fetch("http://localhost:8080/turist/post", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(bookingData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("hhhhhh", data);
            })
            .catch((error) => {
                console.error("ooooooo", error);
            });
        console.log('hello')
        nav(`/ForthPage/${hotals.id}`)

    };

    useEffect(()=>{
        if(arrivalDate && departureDate){
            console.log(arrivalDate, departureDate)
            const arival = new Date(arrivalDate);
            const departure = new Date(departureDate);
            const totalNights = ((departure - arival) / (1000 * 60 * 60 * 24));
            setTotalPrice(totalNights* hotals.priceOfHotal);
        }

       

    },[arrivalDate, departureDate])




    const handleName = (event) => {
        setName(event.target.value);
    }
    const handleEmailaddress = (event) => {
        setEmailAddress(event.target.value);
    }
    const handleAddress = (event) => {
        setAddress(event.target.value);
    }
    const handleArrivalDate = (event) => {
        setArrivalDate(event.target.value);
    }
    const handleDepartureDate = (event) => {
        setDepartureDate(event.target.value);
    }


    const calculatetotalPrice = () => {
        const tax =0.12
        const tax_amount=totalPrice*tax; 
        return tax_amount ;

       
    }


    return (
        <>
            <form>
                
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" class="form-control" id="name" onChange={handleName} />
                </div>
                
                <div class="mb-3">
                    <label for="address" class="form-label">Address</label>
                    <input type="text" class="form-control" id="address" onChange={handleAddress} />
                </div>
                <div class="mb-3">
                    <label for="InputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleEmailaddress} />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="arivalDate" class="form-label">Arrival Date</label>
                    <input type="date" class="form-control" id="arivalDate" onChange={handleArrivalDate} />
                </div>
                <div class="mb-3">
                    <label for="departureDate" class="form-label">Departure Date</label>
                    <input type="date" class="form-control" id="departureDate" onChange={handleDepartureDate} />
                </div>

            </form>
            <h5>Your Stay Cost Will Be:{totalPrice} </h5>
            <h5>12% Tax will be:{calculatetotalPrice()} </h5>
            <h5>subTotal:{totalPrice}*{calculatetotalPrice()}</h5>


            <Link to={`/ForthPage/${hotals.id}`}> <button type="submit" onClick={handleSubmit} class="btn btn-primary">Submit</button></Link>
        </>
    )
}

export default ThirdPage