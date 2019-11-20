import React from 'react'
import Card from './Card'
import img1 from '../media/users/100_1.jpg'
import img2 from '../media/users/100_2.jpg'
import img3 from '../media/users/100_3.jpg'

const users = [
    {
        "name": "Luke Davids",
        "job_title": "Angular Developer",
        "image": img1,
    },
    {
        "name": "Ana Larsons",
        "job_title": "Art Director",
        "image": img2,
    },
    {
        "name": "Cody Morgan",
        "job_title": "Web Developer",
        "image": img3,
    }
]

class Users extends React.Component {
    render() {
        return (
            <div className="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid">
                <div className="row">
                   {
                       users.map((e, i) => <Card key={i} data={e} />)
                   } 
                </div> 
            </div>
        )
    }
}

export default Users