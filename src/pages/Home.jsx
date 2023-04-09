import { Close } from '@mui/icons-material'
import React from 'react'
import Annoucne from '../components/Annoucne '
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Category from '../components/Category'
import Products from '../components/Products'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer '
export default function Home() {
    return (
        <div className='bg-[#8a4af3] font-bold text-white  iems-center justify-center' >
         <Annoucne/>
      <Navbar/>
      <Slider/>
      <Categories/>
      <Products/>
      <NewsLetter/>
      <Footer/>
        </div>
    )
}
