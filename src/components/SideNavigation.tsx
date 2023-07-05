import { NavLinks, LinkType } from './NavigationData'
import { Link, useLocation } from 'react-router-dom'
import { VscDebugStart } from 'react-icons/vsc'
import { GiFinishLine } from 'react-icons/gi'
const SideNavigation = () => {
  const location = useLocation()

  return (
    <nav className="nav">
      {NavLinks.map((val: LinkType) => (
        <div className="link-div" key={val.finalLink + val.startLink}>
          <Link
            className="link-btn"
            to={val.startLink}
            style={{
              backgroundColor:
                location.pathname === `/${val.startLink}` ? '#4713867a' : '',
              color: location.pathname === `/${val.startLink}` ? 'white' : '',
            }}
          >
            {val.startTitle} <VscDebugStart style={{ color: '#133d86' }} />
          </Link>
          <Link
            className="link-btn"
            to={val.finalLink}
            style={{
              backgroundColor:
                location.pathname === `/${val.finalLink}` ? '#4713867a' : '',
              color: location.pathname === `/${val.finalLink}` ? 'white' : '',
            }}
          >
            {val.finalTitle} <GiFinishLine />
          </Link>
        </div>
      ))}
    </nav>
  )
}

export default SideNavigation
