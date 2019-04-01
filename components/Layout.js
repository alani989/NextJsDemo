import Navigation from './Navigation'

const Layout = (props) => {
  return (
    <div>
      <Navigation />
      <div className='container greyBackground'>
        {props.children}
      </div>
    </div>
  )
}

export default Layout