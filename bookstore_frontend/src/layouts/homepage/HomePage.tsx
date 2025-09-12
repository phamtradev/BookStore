import React from 'react'
import { Banner } from './components/Banner'
import { Carousel } from './components/Carousel'
import { ListBook } from '../product/ListBook'

interface HomePageProps {
  nameSearch: string;
}

export const HomePage = ({ nameSearch }: HomePageProps) => {
  return (
    <div>
      <Banner />
      <Carousel />
      <ListBook nameSearch={nameSearch} />
    </div>
  )
}
