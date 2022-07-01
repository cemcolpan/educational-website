import React from 'react'
import './hero.css'
import Title from '../../common/title/Title'

export const Hero = () => {
  return (
    <>
       <section className="hero">
        <div className="container">
            <div className="row">
                <Title subtitle='WELCOME TO ACDAEMIA' title='Best Online Education'/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem expedita autem facere nostrum consectetur qui, iure reprehenderit animi reiciendis, inventore corporis porro iusto. Voluptate, laborum quo. Voluptates ad aliquam fugiat?</p>
                <div className="button">
                    <button className="primary-btn">
                        GET START NOW <i className='fa fa-long-arrow-alt-right'></i>
                    </button>
                    <button>
                        VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
                    </button>
                </div>
            </div>
        </div>
       </section>
       <div className="margin"></div>
    </>
  )
}

export default Hero