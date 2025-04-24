import React, { useContext } from 'react'
import { DataContext } from '../hooks/DataContext'

const Sample = () => {

    const { Artworks } = useContext(DataContext);
    return (
        <div>
            {Artworks.map(item => (
                <h1 key={item.id}>
                    {item.title}
                    <img src={item.img} alt={item.title}/>
                </h1>
            ))
            }
        </div>
    )
}

export default Sample