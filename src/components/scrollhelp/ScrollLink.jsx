import { Link, useLocation } from 'react-router-dom'

function ScrollLink({ to, children, ...props}) {
  const location = useLocation();
  return (
    <Link to={to} {...props} onClick={() => {
        window.scrollTo(0, 0);
    }}>
      {children}
    </Link>
  )
}

export default ScrollLink
