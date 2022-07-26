import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { getCatFetch } from './redux/catSlice';


function App() {

  const data = useSelector((state) => state.cat.cat)
  console.log('Data in redux', data)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCatFetch())
  }, [dispatch])


  const populate = data.map(res => {
    return (<>
      <div className='col-md-3 my-3'>
        <div className='card' style={{width:'250px', overflow:'hidden', height:'400px'}}>
          <div className='card-body'>
            <img src={res.image.url} alt='image' height='180px' width='180px' className='img-fluid'></img>
            <h3>{res.name}</h3>
            <p style={{textOverflow:'ellipsis'}}>{res.description}</p>
          </div>
        </div>
      </div>
    </>)
  })

  return (
    <div className="App">

      <h1 className='mt-5'> Cat Breeds</h1>
      <p>All cats are coming redux saga async call</p>
      <div className='container'>
        <div className='row'>
            {populate}
        </div>
      </div>



    </div>
  );
}

export default App;
