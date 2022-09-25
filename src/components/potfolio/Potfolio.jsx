import React from 'react'
import './potfolio.css'
import IMG1 from '../../assets/img1.jpg'
import IMG2 from '../../assets/img2.jpg'
import IMG3 from '../../assets/img3.jpg'
import IMG4 from '../../assets/img4.jpg'
import IMG5 from '../../assets/img5.png'
import IMG6 from '../../assets/img6.jpg'
// this const includes data that we are hoing to use to map using the id, image, title as key.
// DONOT USE IN PRODUCTION
const data =[
  {
    id: 1,
    image: IMG1,
    title:'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'

  },
  {
    id: 2,
    image: IMG2,
    title:'Charts templates & infographics in Figma',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16580766-Orion-UI-kit-Charts-templates-infographics-in-Figma'

  },
  {
    id: 3,
    image: IMG3,
    title:'Figma dashbpoard UI kit for data design web apps',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'

  },
  {
    id: 4,
    image: IMG4,
    title:'Maintaining tasks and tracking progress',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16955822-Maintaining-tasks-and-tracking-progress'

  },
  {
    id: 5,
    image: IMG5,
    title:'Charts templates & infographics in Figma',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16541289-Orion-UI-kit-Charts-templates-infographics-in-Figma'

  },
  {
    id: 6,
    image: IMG6,
    title:'Charts templates & infographics in Figma',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/15887665-Orion-UI-kit-Charts-templates-infographics-in-Figma'

  }
]

const Potfolio = () => {
  return (
    <section id='potfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {
          data.map(({id,image, title, github, demo}) =>{
            return (
              <article key={id} className="portfolio_item">
                <div className="portfolio_item-image">
                    <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="porfolio_item-cta">
                   <a href={github} className='btn' target='_blank' rel='noopener noreferrer'>Github</a>
                   <a href={demo} className='btn btn-primary' target='_blank' rel='noopener noreferrer'>Live Demo</a>
                </div>
         
              </article>

            )
            
          })
        }
        
        
      </div>

    </section>
  )
}

export default Potfolio