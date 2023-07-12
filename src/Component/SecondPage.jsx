import React from 'react'
import { useEffect , useState} from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


const SecondPage = () => {

    const [hotalDetail, setHotalDetail] = useState([]);
    const {id}=useParams();

    useEffect(() => {
        fetch(`http://localhost:8080/hotal/get/${id}`)
            .then((data) => data.json())
            .then((data) => { setHotalDetail(data) })
            .catch((e) => console.log(e))
    }, [id])
  return (

    <div>
      <div className='card col-md-6 offset-md-3'>
        <h3 className='text-center'>View Hotal Details</h3>
        <div className='card-body'>
          <div className='row'>
            <label>Hotal Name:</label>
            <div><strong>{hotalDetail.nameOfHotal}</strong></div>
          </div>
          <div className='row'>
            <label>Hotal Image:</label>
            <div><img src={hotalDetail.imageLink} width="400px" height="400px"/></div>
          </div>
          <div className='row'>
            <label>Discription:</label>
            <div><strong>{hotalDetail.longDiscription}</strong></div>
          </div>
          <Link to={`/ThirdPage/${hotalDetail.id}`}>
          <button>book</button>
          </Link>
          {/* Add more details as needed */}
        </div>
      </div>
    </div>
    
  )
}

export default SecondPage

//nav("/home")