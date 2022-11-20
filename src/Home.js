import { AnimationOnScroll } from 'react-animation-on-scroll';

function Home({ homeTextİmg = [], box = [] }) {
    return (

        <div className="home-page" id="home">

            {
                homeTextİmg.map((home, index) => {

                    return (
                   
                        <div className="home-upside" key={index}>
                            <div className="home-left">
                                <h1 className="bir">{home.bigTitle}</h1>
                                <h2 className="iki">{home.title}</h2>
                                <p>{home.text}</p>
                                <button>{home.buttonText}</button>
                            </div>
                            <div className="home-right">
                            <AnimationOnScroll animateIn="animate__bounceIn">   <img src={home.image} ></img></AnimationOnScroll>
                            </div>


                        </div>
                    );

                })
            }
            <div className="home-underPart">
                { box.map((kutu,index) => {
                        return (

                            <div className="box" key={index}>
                               <div className="image" ><img alt="" src={kutu.image}></img></div> 
                                <h3>{kutu.boxTitle}</h3>
                                <p>{kutu.boxText}</p>
                            </div>

                        );
                    })

                }
            </div>
        </div>


    )
}

export default Home;