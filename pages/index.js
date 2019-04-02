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
        <div className='pt-3'>
          <MyTable />
        </div>
      </Layout>
    </MyContext.Provider>
  )
}

export default Home