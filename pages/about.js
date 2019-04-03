import { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import { DetailsDiv } from '../components/DetailsDiv'

const About = () => {
  const [data, setData] = useState(null)
  const [detailsDiv, setDetailsDiv] = useState(false)
  const [graphQLData, setGraphQLData] = useState()

  const fetchData = async () => {
    const response = await fetch(`https://api.randomuser.me/`)
    const data = await response.json()
    const [item] = data.results
    setData(item)
  }

  const fetchDataGraphQL = async () => {
    const response = await fetch(`http://localhost:4000/test`)
    const data = await response.json()
    setGraphQLData(data)
  }



  useEffect(() => {
    fetchData()
    fetchDataGraphQL()
  }, [])

  const refreshData = () => {
    fetchData()
  }

  console.log(graphQLData)

  return (
    <Layout>
      <div>
        <h1>
          This is the About page
        </h1>
        <br ></br>
        <div>
          <button onClick={() => setDetailsDiv(!detailsDiv)}>
            {!detailsDiv ? 'Show Me' : 'Hide Me'}
          </button>
          <button onClick={() => refreshData()}>
            Refresh
        </button>
        </div>
        {detailsDiv && <DetailsDiv data={data} />}
      </div>
    </Layout>
  )
}

export default About