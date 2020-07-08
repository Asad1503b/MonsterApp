import React from 'react'
import './CardStylee.css'
import { Card } from './CardComponent'
export const CardList = (props) => {
    return (
        <div className="card-list">
            {props.monsters.map(monster =>
                (
                    <Card key={monster.id} monster={monster} />
                )
            )
            }
        </div>
    )
}