import React from 'react'
import {Button} from'./Button';
import './Footer.css';
import {Link} from 'react-router-dom';
function Footer() {
  return (
    <div className='footer-container' style={{color:'white'} }>
        <section className="footer-subscription">
            <p className="footer-subscription-heading">
                Join our team to get updates regarding the lates football news
            </p>
            <p className="footer-subscription-text">
                Subscribe to our channel
            </p>
            <div className="input-areas">
                <form>
                    <input type="email" name="email" placeholder="Your Email" className="footer-input"/>
                    <Button buttonStyle='btn-primary'>SUBSCRIBE</Button>
                </form>
            </div>
        </section>
        <div className="footer-links">
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                   <h2> Contact Us</h2> 
                   <Link to='sign-up'>Join our channel</Link>
                   <Link to ='/' > location</Link>
                </div>
            </div>
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                   <h2> About Us</h2> 
                   <Link to='sign-up'>How it works</Link>
                   <Link to ='/' > Testimonials</Link>
                </div>
            </div>
            <section className="social media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/' className="social-logo">
                            LET'S FOOTBALL <i class="fa-solid fa-person-running"/>
                        </Link>

                    </div>
                </div>
            </section>
        </div>
    </div>
  )
}

export default Footer;