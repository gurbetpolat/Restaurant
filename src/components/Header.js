


function Header({ pages = [] }) {

    return (
        <div className="header-page">
            <div className="header-container">
                <div className="header-left">
                    <img className="header-image" src="	https://assets.website-files.com/60ec04708eb66b625fc4fb1e/6117c1783980cfef5fb1fa31_yonk.logo.svg"></img>

                </div>
                <div className="header-right">

                    <ul>
                        {pages.map((page, index) => {
                            return (<li key={index}>
                                <a href={page.href} className="header__link">{page.name}</a>
                            </li>);
                        })}


                    </ul>
                   
                </div>


            </div>
        </div>
    )
}

export default Header;