const SideMenu = () => {
    const popupSideMenuHandler = (e) => {
        const openBtn = e.target.closest('.side-menu');
        const popupSideMenu = openBtn.querySelector(".popup-side-menu");
        const menuContainer = popupSideMenu.querySelector('.menu-container');
        const closeBtn = popupSideMenu.querySelector('.side-menu-close-btn');
        const imgStatus = closeBtn.querySelector("img");
        
        if(popupSideMenu.className === "popup-side-menu visible"){
          menuContainer.className = "menu-container close-menu-container";
          imgStatus.className = "img-hidden";
          return popupSideMenu.className = "popup-side-menu hidden";
        }
        menuContainer.className = "menu-container open-menu-container";
        imgStatus.className = "img-visible";
        return popupSideMenu.className = "popup-side-menu visible";
      }

    const topDepartementsVisibilityHandler = (e) => {
        const topDepartementsOther = e.target.closest(".top-departements-other");
        const topDepartementsOtherContainer = topDepartementsOther.querySelector(".top-departements-other-categories-container");
        
        if(topDepartementsOtherContainer.style.height === "23rem"){
          e.target.innerHTML= "See All ˅ "
            return topDepartementsOtherContainer.style.height= "0rem";
        }
          e.target.innerHTML= "See Less ˄ "
        return topDepartementsOtherContainer.style.height= "23rem";
    }

    const topDepartementsOtherSubMenuHandler = (e) => {
      const menu = e.target.closest("menu");
      const li = e.target.closest("li");
      const topDepartementsOtherSubMenu = li.querySelector(".top-departements-other-sub-menu")
      console.log(menu);
      menu.style.transform = "translateX(-100vw)"
      return topDepartementsOtherSubMenu.style.transform = "translateX(-1.5vw)"
    }
    
      return(
        <div className="side-menu">
              <button onClick={(e) => {popupSideMenuHandler(e)}}>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAYUlEQVR4nO3WyQnAMAwFUZcXp/+zDMF9TDrQJcYLmdfBRwimFEmSBgFuoLG/BtRsyMM5+i+GVCDYXwDX51+SJEmaCDN+iZ5dxIyfLMx4SZJ0Gsz4JXp2ETN+sjDjJUlloBfbFyzbu4GNjwAAAABJRU5ErkJggg=="/>
              </button>
              <div className="popup-side-menu hidden">
                <div className="menu-container close-menu-container">
                  <menu>
                    <div className="menu-header">
                      <div className="menu-header-top">
                        <div className="sign-in">
                          <a href="#">
                            <p>{"Sign in"}</p>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABgklEQVR4nM3UTUtUcRQG8LFcCGFtNKS2lbsQa2GtXLrKRdE3SAMRN73ZvnClEC1rFxrUJsaF0TLaDfgBhPwGhS8UGPSLg2dgGsfLeO8sfODAvec853nu/+WeWu00AFfwEvWMF5HrlfgTHGQ0Mprvj6uKP3SITxhpyV/E+6w9KCt+Hj/xFWc61M/iG35gsIzB/fzCiQLO7eTcK2PwLJsHCjgDyXlaxmA+m0cKOJeSM1fGYCyb5ws4C8m5fmKDFPiCHdzqULuJXWyUEk+Ry9jGH7zGHUzjFX7je2xTaYM0GcbbFGwint9gqJJ4m9E53MB4PPdCcBB3sYT1HBFbGY3MLSWn+x8No1jDr5btaOSQe5dRz1xz24K7Gr1Fwn14ngcaN2c5bg/6C3r6k7OSPdG7GFrHTc3AhzjYrpf8/2WI3sCj9uIF7CfhyGDrFtGLj9iLYdlaiGUGprpWOwahcWRIYjKTk7WK0EkL1/AXmzkeqsRmal1td57F5x4YbGCm6k6cHvwD2bC0SCips1kAAAAASUVORK5CYII="/>
                          </a>
                        </div>
                      </div>
                      <div className="menu-header-title">
                        <a href="">
                          <p className="menu-title-line-1">Browse</p>
                          <p className="menu-title-line-2">Amazon</p>
                        </a>
                      </div>
                    </div>
                    <div className="menu-home-container">
                      <a href="">
                        <p>Amazon Home</p>
                        <img src="https://cdn0.iconfinder.com/data/icons/set-app-incredibles/24/Home-01-512.png" alt="" />
                      </a>
                    </div>
                    <div className="menu-trending">
                      <p className="menu-sez-title">
                        Trending
                      </p>
                      <ul>
                        <li>
                          <a href="">
                            Movers & Shakers
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="menu-top-departements">
                      <p className="menu-sez-title">
                        Top Departements
                      </p>
                      <ul>
                        <li>
                          <a href="">
                            Home
                          </a>
                        </li>
                        <li>
                          <a href="">
                            Health & Household
                          </a>
                        </li>
                        <li>
                          <a href="">
                            Book
                          </a>
                        </li>
                        <li>
                          <a href="">
                            Pc
                          </a>
                        </li>
                        <li>
                          <div className="top-departements-other">
                            <div className="top-departements-other-categories-container">
                              <ul className="top-departements-other-categories">
                                  <li>
                                    <p onClick={(e)=>{topDepartementsOtherSubMenuHandler(e);}}>
                                      Amazon Music
                                    </p>
                                    <div className="top-departements-other-sub-menu">
                                      <button>
                                        x
                                      </button>
                                    </div>
                                  </li>
                                  <li>
                                  <a href="">
                                      Prime Video
                                  </a>
                                  </li>
                                  <li>
                                  <a href="">
                                      Books
                                  </a>
                                  </li>
                                  <li>
                                  <a href="">
                                      Echo & Alexa
                                  </a>
                                  </li>
                                  <li>
                                  <a href="">
                                      Fire TV
                                  </a>
                                  </li>
                                  <li>
                                  <a href="">
                                      Kindle
                                  </a>
                                  </li>
                              </ul>
                            </div>
                            <button className="visibility-other-btn" onClick={(e) => {topDepartementsVisibilityHandler(e)}}>See All ˅</button>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </menu>
                </div>
                <button className="side-menu-close-btn" onClick={(e) => {popupSideMenuHandler(e)}}>
                  <img className="img-hidden" src="https://www.queryly.com/images/whitecloseicon.png" alt="" />
                </button>
              </div>
            </div>
      )
}

export default SideMenu;