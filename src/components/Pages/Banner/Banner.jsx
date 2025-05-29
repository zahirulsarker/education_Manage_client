import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

import edu1 from '../../../assets/edu/edu1.jpg'
import edu2 from '../../../assets/edu/edu2.jpg'
import edu5 from '../../../assets/edu/edu5.jpg'
const Banner = () => {
  return (

      <Carousel>
               <div className="hero bg-base-200 min-h-screen">
                 <div className="hero-content flex-col lg:flex-row-reverse">
                  <img
                    src={edu1}
                    className="max-w-sm rounded-lg shadow-2xl"
                  />
                  <div>
                    <h1 className="text-5xl font-bold">Embrace the world of online learning</h1>
                    <p className="py-6">
                    If you’re new to eduManage, we’ve got good news: For a limited time, courses start at just $10.99 for new learners! Shop now.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                  </div>
                </div>
              </div>
                <div className="hero bg-base-200 min-h-screen">
                 <div className="hero-content flex-col lg:flex-row-reverse">
                  <img
                    src={edu2}
                    className="max-w-sm rounded-lg shadow-2xl"
                  />
                  <div>
                    <h1 className="text-5xl font-bold">Unlock the power of IT learning</h1>
                    <p className="py-6">
                    If you’re new to eduManage, we’ve got good news: For a limited time, courses start at just $12.99 for new learners! Shop now.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                  </div>
                </div>
              </div>
                <div className="hero bg-base-200 min-h-screen">
                 <div className="hero-content flex-col lg:flex-row-reverse">
                  <img
                    src={edu5}
                    className="max-w-sm rounded-lg shadow-2xl"
                  />
                  <div>
                    <h1 className="text-5xl font-bold">Learning Management System (LMS).</h1>
                    <p className="py-6">
                      Through a combination of lectures, readings, and discussions, students will gain a solid foundation in educational psychology.
                    If you’re new to eduManage, we’ve got good news: For a limited time, courses start at just $12.99 for new learners! Shop now.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                  </div>
                </div>
              </div>                          
             
            </Carousel>
    
  )
}

export default Banner