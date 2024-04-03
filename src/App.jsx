import React,{useState,useEffect} from 'react'
import Navbar from './Components/Navbar/Navbar'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Video from './Pages/Video/Video'

function Loader() {
  return <div>Loading...</div>;
}
const App = () => {
  
  const [sidebar, setSidebar] = useState(true);
  const[videos,setVideos]=useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('https://ypapi.formz.in/api/public/videos')
      .then(response => response.json())
      .then(data =>{ setVideos(data); setLoading(false)})
      .catch(error => {console.error('Error fetching data:', error);setLoading(false)});
  }, []);

  return (
    <div>
      <h1>Videos</h1>
      {loading ? (
        <Loader />
      ) : (
      <ul>
        {videos.map(video => (
          <li key={video.id}>
            <p>{video.title}</p>
            <p>{video.description}</p>
            <p>{video.url}</p>
            {/* Render other properties of the video as needed */}
          </li>
        ))}
      </ul>
      )}
    <div>
      <Navbar setSidebar= {setSidebar} />
      <Routes>
        <Route path='/' element= {<Home  sidebar={sidebar} />} />
        <Route path='/video/:categoryId/:videoId' element={<Video/>} />
      </Routes>
      
    </div>
    </div>
  )
}

export default App
