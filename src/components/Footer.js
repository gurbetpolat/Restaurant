


function Footer({ footerBottom = [], footerSections = [], footerİmage = [] }) {

    return (
        <div className="footer-page" id="concat">

            <div className="footer-container">

                <div className="footer-container-left">
                    {footerSections.map((section, index) => {
                        return (
                            <div key={index}>
                                <h2>{section.bigTitle}</h2>
                                <h3>{section.title}</h3>
                                <a alt="" href={section.link}>{section.text}</a>

                            </div>
                        );

                    })}</div>

                <div className="footer-container-right">
                    {
                        footerİmage.map((image, index) => {
                            return (
                                <div className="images" key={index}>
                                    {/* <p> {image.text}</p> */}

                                    <a alt="" href={image.link}>
                                        <img src={image.image}></img>
                                    </a>

                                </div>
                            )
                        })
                    }
                </div>


            </div>


            {footerBottom.map((bottom, index) => {

                return (
                    <div className="footer-bottom" key={index}>
                        <div className="bottom-left">
                            <p>{bottom.text}

                                <a alt="" href={bottom.link}>Powered by Webflow</a></p>
                        </div>



                        <div className="rectangle">
                            <img alt="" src={bottom.rectangleImage}></img>
                        </div>
                        <div className="circle">
                            {bottom.circle}
                        </div>

                    </div>
                );

            })}




        </div>
    )
}

export default Footer;