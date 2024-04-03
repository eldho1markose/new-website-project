import React from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'

import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'

const PlayVideo = () => {
  return (
    <div className='play-video'>
        <video src={video1} controls autoPlay muted></video>
        <h3>How to plan the holidays</h3>
        <div className="play-video-info">
            <p>30k Views ; 4 days ago</p>
            <div>
                <span>
                    <img src={like} alt="" />
                    1k
                </span>
                <span>
                    <img src={dislike} alt="" />
                    25
                </span>
                <span>
                    <img src={share} alt="" />
                    Share
                </span>
                <span>
                    <img src={save} alt="" />
                    Save
                </span>
            </div>
        </div>
        <hr/>
        <div className="publisher">
            <img src={jack} alt="" />
            <div>
                <p>
                    RoyalInstitution
                </p>
                <span>2M Subscribers</span>
            </div>
            <button>Subscribe</button>
        </div>
        <div className="vid-description">
            <p>List of travel destinations</p>
            <p>Subscribe the channel to have more travel videos</p>
            <hr />
            <h4>250 comments</h4>
            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Ryan Philip <span>2 days ago</span></h3>
                    <p>nice video</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>100</span>
                        <img src={dislike} alt="" />
                        
                       </div> 
                   
                </div>
            </div>

        
        <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>James antonio <span>5 days ago</span></h3>
                    <p>good</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>200</span>
                        <img src={dislike} alt="" />
                        
                        
                   
                </div>
            </div>

        </div>
        </div>
    </div>
  )
}

export default PlayVideo