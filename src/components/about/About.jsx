import React from 'react'
import './about.css'
import myImage from '../../assets/profilepic.jpeg'
import {GiGraduateCap} from 'react-icons/gi'
import {BsBookmarkStar} from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>
      
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

          <div className="about__me">
            <div className="about__me-image">
                <img src={myImage} alt="Me" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">

              <article className='about__card'>
                  <GiGraduateCap className='about__icon'/>
                  <h5>Degree</h5>
                  <small>Bsc. Computer Science<br /><i>Egerton University.</i></small>
              </article>

              <article className='about__card'>
                  <BsBookmarkStar className='about__icon'/>
                  <h5>ISTQB</h5>
                  <small>CTFL Certified</small>
              </article>

            </div>
            <p>
                    I'm an ISTQB certified <b>Quality Assurance Engineer</b> with over 6 years of experience  
                    in both Manual and Automation Testing         
            </p>

          </div>
      </div>
    </section>
  )
}

export default About