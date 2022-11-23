import {useLocation, useNavigate} from 'react-router-dom'
function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()

  const match = (route: string) => route === location.pathname ? true : false

  const Link = ({route, children}:{route: string, children: (isActive: object, nav: () => void) => JSX.Element}) => {
    const isActive = match(route) ? {color: 'blue'} : {color: 'red'}
    const goToLink = () => navigate(route)
    return children(isActive, goToLink)
  }
  
  return (
    <ul>
      <Link route='/'>
        {(isActive, goToLink) => (<li style={isActive} onClick={goToLink}>Main</li>)}
      </Link>
      <Link route='/about'>
        {(isActive, goToLink) => (<li style={isActive} onClick={goToLink}>About</li>)}
      </Link>
      <Link route='/profile'>
        {(isActive, goToLink) => (<li style={isActive} onClick={goToLink}>Profile</li>)}
      </Link>
    </ul>
  )
}

export default Navbar