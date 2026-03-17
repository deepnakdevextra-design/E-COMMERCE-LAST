import React ,{Fragment}from 'react'
import Topbar from '../Components/Topbar'
import Navbar from '../Components/Navbar'
import Main from '../Components/Main'
import Bottombar from '../Components/Bottombar'
import Product from "../Components/Product"
import Pdt2 from '../Components/pdt2'
import Pdt3 from '../Components/pdt3'
import Revew from '../Components/Revew'
import Feature from '../Components/Feature'




export default function Home() {
  return (
   <Fragment>
       <Topbar></Topbar> 
       <Navbar></Navbar>
       <Main></Main>
       <Bottombar></Bottombar>
       <Product></Product>
       <Pdt2></Pdt2>
       <Pdt3></Pdt3>
       <Revew></Revew>
       <Feature/>
   </Fragment>
  )
}
