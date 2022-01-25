import React from 'react'
import { ISound } from '../models/models'
import ItemCard from './itemCard'

interface IProps {
  soundsList: ISound[]
}

const ItemContainer: React.FC<IProps> = ({ soundsList }) => {
  return (
    <div className="wrapper">
      {soundsList.map((item: ISound) => {
        return (
          <ItemCard
            key={item.name}
            name={item.name}
            icon={item.icon}
            id={item.id}
            price={item.price}
          />
        )
      })}
    </div>
  )
}

export default ItemContainer
