import { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import { DetailsDiv } from '../components/DetailsDiv'

const About = () => {
  const [data, setData] = useState(null)
  const [detailsDiv, setDetailsDiv] = useState(false)

  const fetchData = async () => {
    const response = await fetch(`https://api.randomuser.me/`)
    const data = await response.json()
    const [item] = data.results
    setData(item)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Layout>
      <div>
        <h1>
          This is the About page
        </h1>
        <br ></br>
        <button onClick={() => setDetailsDiv(!detailsDiv)}>
          {!detailsDiv ? 'Show Me' : 'Hide Me'}
        </button>
        {detailsDiv && <DetailsDiv data={data} />}
      </div>
    </Layout>
  )
}

export default About