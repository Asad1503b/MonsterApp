import React, { Component } from 'react'
import { CardList } from './Component'
export class ContentDataa extends Component {
    constructor() {
        super()
        // this.state = {
        //     monsters: [
        //         {
        //             name: "Asad",
        //             id: 101
        //         },
        //         {
        //             name: "Akbar",
        //             id: 102
        //         },
        //         {
        //             name: "Mujahid",
        //             id: 103
        //         },
        //         {
        //             name: "Andrew",
        //             id: 104
        //         },
        //         {
        //             name: "Devil",
        //             id: 105
        //         },
        //         {
        //             name: "Sam",
        //             id: 106
        //         },
        //         {
        //             name: "Andy",
        //             id: 107
        //         },
        //         {
        //             name: "samantha",
        //             id: 108
        //         }
        //     ]
        // }

        this.state = {
            monsters: [

            ]
        }
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())    //taking response from Api
            .then(users => this.setState({ monsters: users })) //converting that response to Json format and providing to MonsterNames 
    }
    render() {
        return (
            <div >
                <CardList monsters={this.state.monsters} />
                {/* 
                <CardList names={this.state.Names}>
                    {this.state.Names.map(Name => (         //every name is getting inside of Name by itterating as Name.name
                        <h1 key={Name.id}>{Name.name}</h1>))}
                </CardList> */}



            </div>
        )
    }
}