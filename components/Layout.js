import Navigation from './Navigation'

const Layout = (props) => {
  return (
    <div>
      <Navigation />
      <div className='p-4'>
        {props.children}
      </div>
    </div>
  )
}

export default Layout