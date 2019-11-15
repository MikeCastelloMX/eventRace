import React from 'react'
import TableRow from './TableRow'
import { URL } from '../config'

class Table extends React.Component {
    state = {
        data: [],
    }

    async componentDidMount() {
        const data = await this.fetchData(URL)
        this.setState({ data })
    }

    fetchData = async (url) => {
        const response = await fetch(url)
        return await response.json()
    }

    render() {
        return (
            <table className="table table-striped- table-bordered table-hover table-checkable" id="kt_table_1">
                <thead>
                    <tr>
                        <th>Record ID</th>
                        <th>Company Email</th>
                        <th>Company Agent</th>
                        <th>Company Name</th>
                        <th>Status</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { this.state.data.map((e, id) => <TableRow key={id} data={e} />) }
                </tbody>
            </table>
        )
    }
}

export default Table;