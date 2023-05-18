import FirstNavBand from "./FirstNavBand";
import SearchNavBand from "./SearchNavBand";
import TagsNavBand from "./TagsNavBand";

const Nav = () => {
    return(
        <nav>
          <FirstNavBand />
          <SearchNavBand />
          <TagsNavBand />
        </nav>
    )
}

export default Nav;