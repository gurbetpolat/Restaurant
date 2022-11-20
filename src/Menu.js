import { useState } from "react";



function Menu({ buttons = [], buttonSections = [] }) {
    const [category, setCategory] = useState("drinks");
    return (
        <div className="menu-page" id="menu">

            <div className="menu-container">
                <div className="button-contents">
                    {buttons.map((button, index) => {
                        return (<div className="buttons" key={index}>
                            <button id={button.category} onClick={
                                () => { setCategory(button.category) }}>
                                <p>{button.buttonName} </p> </button>
                        </div>);
                    })}</div>

                <div className="menu-sections">
                    {buttonSections.filter((button) => { return button.category === category }).map((section, index) => {
                        return (<div className="category" key={index}>
                            <h3>{section.name}</h3>
                            <div className="pricetext">
                                <p className="text">{section.text}</p>
                                <p className="price">{section.price}</p>
                            </div>
                            <hr />

                        </div>)
                    })
                    }
                </div>
            </div>
        </div>
    )

}

export default Menu;