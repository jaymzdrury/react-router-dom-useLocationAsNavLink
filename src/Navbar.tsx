import {useLocation, useNavigate} from 'react-router-dom'
function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()

  const match = (route: string) => route === location.pathname ? true : false

  const Link = ({route, children}:{route: string, children: (isActive: object, nav: () => void) => JSX.Element}) => {
    const isActive = match(route) ? {color: 'blue'} : {color: 'red'}
    const link = () => navigate(route)
    return children(isActive, link)
  }
  
  return (
    <ul>
      <Link route='/'>
        {(isActive, link) => (<li style={isActive} onClick={link}>Main</li>)}
      </Link>
      <Link route='/about'>
        {(isActive, link) => (<li style={isActive} onClick={link}>About</li>)}
      </Link>
      <Link route='/profile'>
        {(isActive, link) => (<li style={isActive} onClick={link}>Profile</li>)}
      </Link>
    </ul>
  )
}

export default Navbar