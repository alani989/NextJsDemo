import React from 'react'
import { Table } from 'react-bootstrap'
import { MyContext } from '../contextAPI/dummy-context'

export default class MyTable extends React.Component {

    render() {
        return (
            <MyContext.Consumer>
                {(data) => {
                    return (
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Team</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((team, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{team}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table>
                    )
                }}
            </MyContext.Consumer>
        )
    }
}