import React from 'react';
import Card from './Card';


const Cardlist = ({robots}) => {
    if(true) {
        throw new Error('Errorrr')
    }
    return (
        robots.map((user, i) => {
            return (
                <Card key={i} name={robots[i].name} email={robots[i].name} id={robots[i].id}/>
            )
        })
    )
}


export default Cardlist;

































// const Cardlist = ({robots}) => {
//     return (
//         robots.map((user, i) => {
//             return (
//                 <Card key= {i} name={robots[i].name} id={robots[i].id} email={robots[i].email}/>
//             )
//         })
//     )
// }


