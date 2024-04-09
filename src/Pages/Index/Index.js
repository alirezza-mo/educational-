import React from 'react'
import Header from '../../Components/Header/Header'
import Feature from '../../Components/Features/Feature'
import LastProduct from '../../Components/LastProduct/LastProduct'
import WithUs from '../../Components/WithUs/WithUs'
import NewProduct from '../../Components/NewProduct/NewProduct'
import StartRoad from '../../Components/StartRoad/StartRoad'
import Articles from '../../Components/Articles/Articles'
import Footer from '../../Components/Footer/Footer'

function Index() {
  return (
    <>
      <Header/>
      <Feature/>
      <LastProduct/>
      <WithUs/>
      <NewProduct/>
      <StartRoad/>
      <Articles/>
      <Footer />
    </>
  )
}

export default Index