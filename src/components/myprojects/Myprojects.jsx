import React from 'react'
import './myprojects.css'
import IMG1 from '../../assets/selenium.png'
import IMG2 from '../../assets/cypress.jpeg'
import IMG3 from '../../assets/gatling.png'
import IMG4 from '../../assets/restassured.jpeg'
import IMG5 from '../../assets/cucumber.png'

const Myprojects = () => {
  return (
    <section id='myprojects'>

      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG1} alt="" />
            </div>
            <h3>Selenium</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com/Innocento/ui-selenium-automation" target="_blank" rel='noreferrer' className='btn'>Github</a>
            </div>
              
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG2} alt="" />
            </div>
            <h3>Cypress</h3>
    
            <div className="portfolio__item-cta">
              <a href="https://github.com/Innocento/Solutech-SDET" target="_blank" rel='noreferrer' className='btn'>Github</a>  
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG4} alt="" />
            </div>
            <h3>RestAssured</h3>
            <div className="portfolio__item-cta">
              <a href="https://innocento.github.io/website/" target="_blank" rel='noreferrer' className='btn'>Github</a>  
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG3} alt="" />
            </div>
            <h3>Gatling</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com/Innocento/k6-tut" target="_blank" rel='noreferrer' className='btn'>Github</a>  
            </div>
            
        </article>

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG5} alt="" />
            </div>
            <h3>Cucumber BDD</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com/Innocento/Solutech-SDET" target="_blank" rel='noreferrer' className='btn'>Github</a>
            </div>
              
        </article>

      </div>
    </section>
  )
}

export default Myprojects