import React from 'react'
import './Feed.css'
import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png'
import { Link } from 'react-router-dom'
const Feed = () => {
  return (
    <div className="feed">
       <Link to={`video/20/4321`} className='card'>
        <img src={thumbnail1} alt=""/>
        <h2>channel for tech</h2>
        <h3>RoyalInstitution</h3>
        <p>25k views , 2 days ago</p>
       </Link>
       <div className='card'>
        <img src={thumbnail2} alt=""/>
        <h2>childrens education channel</h2>
        <h3>Child play</h3>
        <p>105k views ,5 days ago</p>
       </div>
       <div className='card'>
        <img src={thumbnail3} alt=""/>
        <h2>Let's go out</h2>
        <h3>Holiday plans</h3>
        <p>500k views, 10 days ago</p>
       </div>
       <div className='card'>
        <img src={thumbnail4} alt=""/>
        <h2>channel for tech</h2>
        <h3>RoyalInstitution</h3>
        <p>25k views</p>
       </div>
       <div className='card'>
        <img src={thumbnail5} alt=""/>
        <h2>channel for tech</h2>
        <h3>RoyalInstitution</h3>
        <p>25k views</p>
       </div>
       <div className='card'>
        <img src={thumbnail6} alt=""/>
        <h2>channel for tech</h2>
        <h3>RoyalInstitution</h3>
        <p>25k views</p>
       </div>
       <div className='card'>
        <img src={thumbnail7} alt=""/>
        <h2>channel for tech</h2>
        <h3>RoyalInstitution</h3>
        <p>25k views</p>
       </div>
       <div className='card'>
        <img src={thumbnail8} alt=""/>
        <h2>channel for tech</h2>
        <h3>RoyalInstitution</h3>
        <p>25k views</p>
       </div>
       <div className='card'>
        <img src={thumbnail1} alt=""/>
        <h2>channel for tech</h2>
        <h3>RoyalInstitution</h3>
        <p>25k views</p>
       </div>
       <div className='card'>
        <img src={thumbnail2} alt=""/>
        <h2>channel for tech</h2>
        <h3>RoyalInstitution</h3>
        <p>25k views</p>
       </div>
       <div className='card'>
        <img src={thumbnail3} alt=""/>
        <h2>channel for tech</h2>
        <h3>RoyalInstitution</h3>
        <p>25k views</p>
       </div>
       <div className='card'>
        <img src={thumbnail4} alt=""/>
        <h2>channel for tech</h2>
        <h3>RoyalInstitution</h3>
        <p>25k views</p>
       </div>
       <div className='card'>
        <img src={thumbnail5} alt=""/>
        <h2>channel for tech</h2>
        <h3>RoyalInstitution</h3>
        <p>25k views</p>
       </div>
       <div className='card'>
        <img src={thumbnail6} alt=""/>
        <h2>channel for tech</h2>
        <h3>RoyalInstitution</h3>
        <p>25k views</p>
       </div>
       <div className='card'>
        <img src={thumbnail7} alt=""/>
        <h2>channel for tech</h2>
        <h3>RoyalInstitution</h3>
        <p>25k views</p>
       </div>
       <div className='card'>
        <img src={thumbnail8} alt=""/>
        <h2>channel for tech</h2>
        <h3>RoyalInstitution</h3>
        <p>25k views</p>
       </div>
    

    </div>
  )
}

export default Feed