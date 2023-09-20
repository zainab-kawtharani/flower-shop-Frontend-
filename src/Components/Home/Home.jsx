import React from 'react'
import './Home.css'
import { images } from '../../constants'

const Home = () => {
  return (
    <div className='home' id='home'>
        <h1 className='h1-qoute'>–Flowers are God’s finest creatures without souls–</h1>
        <div className='home-definition'>
             <div className='home-text'>
                <h1>SpecialFlowers</h1>
                <p>Is a gift-giving and flower shop, providing customers around the Lebanon with a marketplace of beautiful bouquets, long-lasting plants, and gourmet gift baskets. Shop our collections to find the right gift for any occasion and give them something unforgettable today. From birthdays to holidays to the moments you want to give a thoughtful gift.</p>
                <br/>
                <h2>We will open on January 2024, stay tuned!!</h2>
                <p>For More Information, do not hesitate contact us.</p>
                <form className='home-form'>
                  <input type='email' name='Email' placeholder='Email'/>
                  <textarea type='text' name='Message' cols='20' rows='10' placeholder='Your Message'/>
                  <button type='submit'>Submit</button>
                </form>
               </div>
             <div className='home-img'>
                <img src={images.flower16} alt='flower'/>

              </div>
        </div>
        
    </div>
  )
}

export default Home
