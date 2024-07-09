import React from 'react'
import Lottie from "lottie-react";
import animationData from '../SvgAssets/animation_lk796xeb.json'
import mailPlane from '../SvgAssets/animation_lk79ibml.json'

function Contact() {
  return (
    <>
    <section className='contact-main-sec'>
        <div className='contact-section'>
        <div className='con-png-1'><Lottie className='mailplane' animationData={mailPlane}/></div>
        <div className='contact-left-div'>
            <div className='con-left-head'>
                <h1>WANA CHAT OVER?</h1>
            </div>
            <div className='contact-left-div-form'>
                <form action="/">
                    <label htmlFor="My Name Is">My Name Is</label>
                    <br />
                    <input type="text" placeholder='your name' />
                    <br />
                    <label htmlFor="/">You Can Contact me..</label>
                    <br />
                    <input type="text" placeholder='your phone-no'/>
                    <br />
                    <label htmlFor="/">Or By Email at</label>
                    <br />
                    <input type="text" placeholder='your email'/>

                </form>
            </div>
        </div>
        <div className='contact-right-div'>
            <div className='contact-right-div-info'>
                <h3>GIVE US A CALL!</h3>
                <h6>+918637024370</h6>
                <Lottie className='astronot' animationData={animationData}/>
            </div>

            <div className='contact-right-div-info'>
                <h3>WRITE WITH US</h3>
                <h6>santanurajbhar27@gmail.com</h6>
            </div>

            <div className='contact-right-div-info'>
                <h3>COME AND SEE US</h3>
                <h6>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, soluta.</h6>
            </div>
        </div>
    </div >
        <button className='con-btn'>SEND MESSAGE</button>
    </section>
    </>
  )
}

export default Contact