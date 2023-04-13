const Nav = () => {
    return(
        <nav>
          <div className="first-nav-band">
            <div className="side-menu">
              <button className="menu-btn">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAYUlEQVR4nO3WyQnAMAwFUZcXp/+zDMF9TDrQJcYLmdfBRwimFEmSBgFuoLG/BtRsyMM5+i+GVCDYXwDX51+SJEmaCDN+iZ5dxIyfLMx4SZJ0Gsz4JXp2ETN+sjDjJUlloBfbFyzbu4GNjwAAAABJRU5ErkJggg=="/>
              </button>
              <div className="">

              </div>
            </div>

            <div className="logo">
              <img src="https://1000marche.net/wp-content/uploads/2020/03/Amazon-logo.png" alt="" />
            </div>

            <div className="sign-in">
              <a href="#">
                {"Sign in>"}
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABgklEQVR4nM3UTUtUcRQG8LFcCGFtNKS2lbsQa2GtXLrKRdE3SAMRN73ZvnClEC1rFxrUJsaF0TLaDfgBhPwGhS8UGPSLg2dgGsfLeO8sfODAvec853nu/+WeWu00AFfwEvWMF5HrlfgTHGQ0Mprvj6uKP3SITxhpyV/E+6w9KCt+Hj/xFWc61M/iG35gsIzB/fzCiQLO7eTcK2PwLJsHCjgDyXlaxmA+m0cKOJeSM1fGYCyb5ws4C8m5fmKDFPiCHdzqULuJXWyUEk+Ry9jGH7zGHUzjFX7je2xTaYM0GcbbFGwint9gqJJ4m9E53MB4PPdCcBB3sYT1HBFbGY3MLSWn+x8No1jDr5btaOSQe5dRz1xz24K7Gr1Fwn14ngcaN2c5bg/6C3r6k7OSPdG7GFrHTc3AhzjYrpf8/2WI3sCj9uIF7CfhyGDrFtGLj9iLYdlaiGUGprpWOwahcWRIYjKTk7WK0EkL1/AXmzkeqsRmal1td57F5x4YbGCm6k6cHvwD2bC0SCips1kAAAAASUVORK5CYII="/>
              </a>
            </div>

            <div className="cart">
              <img src="" alt="" />
            </div>
          </div>

          <div className="search-nav-band">
            <div className="search-bar">

            </div>
          </div>
            
          <div classname="nav-tags-band">
            {/* dare un nome */}
            <ul className="nav-tags">
              <li>Deals</li>
              <li>Amazon Basic</li>
              <li>Best Sellers</li>
              <li>Video</li>
              <li>Livestreams</li>
              <li>Books</li>
              <li>New Releases</li>
              <li>Home</li>
              <li>PC</li>
              <li>Health & Household</li>
              <li>Gift Cards</li>
              <li>Music</li>
              <li>Lists</li>
            </ul>
          </div>
        </nav>
    )
}

export default Nav;