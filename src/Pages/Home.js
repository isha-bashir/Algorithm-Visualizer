import React from 'react'
import Card from '../components/Card';
import Navbar from '../components/Navbar'
import '../styles/home.css';
import img2 from '../icons/sort-algo.png';
import img4 from '../icons/nqueens.png';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container">
      <Navbar msg={'Algorithms Visualizer'}></Navbar>
      <h2 style={{"textAlign": "center", color: '#1e293b', padding: '8px'}}>A Better Visualization Of Different Algorithms</h2>

      <div className='cards-container'>
        <Link className='no_underline' to="/sorting">
          <Card array={[img2,"Sorting Algorithms"]}/>
        </Link>
        <Link className='no_underline' to="/nqueens">
          <Card array={[img4,"N queens problem"]}/>
        </Link>
      </div>

    </div>
  )
}

export default Home;