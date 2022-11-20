import { useState } from 'react'
import pages from "../data/navData";
function HeaderMenu() {

    const [showMenu, setShowMenu] = useState(false);

 console.log(pages);

    return (
        <div className="headerMenu__container">
            <div className="header-left">
                <img className="header-image" src="	https://assets.website-files.com/60ec04708eb66b625fc4fb1e/6117c1783980cfef5fb1fa31_yonk.logo.svg" width={100}></img>

            </div>
            <button onClick={() => { setShowMenu(old => !old) }} style={{ zIndex: 999 }}>TOGGLE</button>
            <div className={`headerMenu__menu ${showMenu ? 'open' : 'closed'}`}>
            <ul>
                        {pages.map((page, index) => {
                            return (<li key={index}>
                                <a href={page.href}>{page.name}</a>
                            </li>);
                        })}


                    </ul>
            </div>
        </div>
    )
}

export default HeaderMenu;