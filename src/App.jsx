import './App.css'
import Navbar from './Navbar/Navbar'
import Topbar from './Topbar/Topbar'
import Carousel from './Carousel/Carousel'
import Card from './Card/Card'
import Heading from './Heading/Heading'
import Platform from './Platform/Platform'
import Campus from './Campus/Campus'
import Courses from './Courses/Courses'
import Footer from './Footer/Footer'

function App() {

  return (
    <>
    <Topbar/>
    <Navbar/>
    <Carousel/>
    <Heading text="Academics"/>
    <Card/>
    <Platform/>
    <Campus/>
    <Courses/>
    <Footer/>
    </>
  )
}

export default App
