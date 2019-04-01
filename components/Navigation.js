import Head from 'next/head'
import Link from 'next/link'

import { Navbar, Nav } from 'react-bootstrap'

const Navigation = () => {
  return (
    <div>

      <Head>
        <title>NextJS</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
          integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
          crossorigin="anonymous"
        />
      </Head>

      <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
          <Link href="/"><a>Home</a></Link>
        </Nav>
        <Nav className="mr-auto">
          <Link href="/about"><a>About</a></Link>
        </Nav>
      </Navbar>

    </div>
  )
}

export default Navigation