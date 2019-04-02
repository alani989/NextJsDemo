import Layout from '../components/Layout'
import { Tab } from 'semantic-ui-react'
import TabContent from '../components/TabContent'

const Test = () => {

    const getContent = () => {
        return <TabContent></TabContent>
    }

    const panes = [
        { menuItem: 'Tab 1', render: () => <Tab.Pane>{getContent()}</Tab.Pane> },
        { menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
        { menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
    ]

    return (
        <Layout>
            <Tab panes={panes} />
        </Layout >
    )

}


export default Test