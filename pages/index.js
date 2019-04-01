import Layout from '../components/Layout'
import { MyContext, data } from '../contextAPI/dummy-context'
import MyTable from '../components/MyTable'

const Home = () => {
  return (
    <MyContext.Provider value={data}>
      <Layout>
        <div>
          <h1>
            This is the home page
          </h1>
        </div>
        <MyTable />
      </Layout>
    </MyContext.Provider>
  )
}

export default Home