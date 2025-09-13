import React from 'react'
import { Banner } from './components/Banner'
import { Carousel } from './components/Carousel'
import { ListBook } from '../product/ListBook'
import { useParams } from 'react-router-dom';

interface HomePageProps {
  nameSearch: string;
}

export const HomePage = ({ nameSearch }: HomePageProps) => {

  const { id } = useParams();
  const categoryId = id ? parseInt(id) : 0;

  return (
    <div>
      <Banner />
      <Carousel />
      <ListBook nameSearch={nameSearch} maTheLoai={categoryId} />
    </div>
  )
}
