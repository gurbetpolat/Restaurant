
import { AnimationOnScroll } from 'react-animation-on-scroll';

function Jobs({ jobsSections }) {

    return (

        <div className="jobs-container" id="Jobs">

            {
                jobsSections.map((section, index) => {

                    return (
                        <div className="jobs-page" key={index}>
                            <div className="jobs-page-top">
                                <div className="jobs-top">
                                    <AnimationOnScroll animateIn="animate__bounceIn">
                                        <div className="rectangle">
                                            <h3>{section.bigTitle}</h3>
                                            <div className="jobs-date">
                                                {section.date}
                                            </div>  </div>
                                    </AnimationOnScroll>
                                    <AnimationOnScroll animateIn="animate__bounceIn">   <img src={section.image} ></img></AnimationOnScroll> </div> </div>

                            <div className="jobs-page-bottom">
                                <p>{section.text}</p>
                                <hr />
                                <div className="jobs-title">
                                    {section.title}

                                </div>
                                <div>
                                    <ul>
                                        <li>{section.li}</li>
                                        <li>{section.li}</li>
                                        <li>{section.li}</li>
                                        <li>{section.li}</li>
                                    </ul>
                                    <div className="link">
                                        <a alt="" src={section.link}>{section.link}</a>
                                    </div>
                                </div></div>


                        </div>

                    )
                })
            }



        </div>
    );

}

export default Jobs;