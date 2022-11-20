import { useEffect, useState } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import request from "./helpers/request"



function About() {



    const [abouts, setAbouts] = useState([]);
    useEffect(() => {
        
       request.get("/about").then((result) => {
       

       console.log(result.data.abouts)

     setAbouts(result.data.abouts)
       }).catch((err) => {
        console.log(err);
       });
    }, []);
    return (
        <div id="about" className="about-page">

            {
                abouts.map((value, index) => {
                    return (
                        <div className="about" key={index}>
                            <div className="about-left" style={{ order: index % 2 === 0 ? 1 : 2 }}>
                                <h3>{value.title}</h3>
                                <p>{value.text}</p>

                                <p>{value.text}</p>

                                <button>{value.buttonText}</button>
                            </div>
                            <div className="about-right" style={{ order: index % 2 === 0 ? 2 : 1 }}>
                                <AnimationOnScroll animateIn="animate__bounceIn"> <img src={value.image} alt="" style={{ transform: index % 2 === 0 ? "rotate(-5deg)" : "rotate(5deg)" }} /></AnimationOnScroll>
                            </div>

                        </div>
                    );
                })
            }

        </div>
    );
}

export default About;