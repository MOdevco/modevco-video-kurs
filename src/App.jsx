import { Box } from '@chakra-ui/react'
import Navbar from './components/navbar/navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Sidebar from './components/sidebar/sidebar'
import Download from './pages/download'
import Contact from './pages/contact'
import { useEffect, useState } from 'react'
import Faq from './pages/faq'
import Footer from './components/footer/footer'
import AllLessons from './pages/allLessons'
import ModevcoAdminPanelAdmin from './pages/modevcoAdmin-panel-admin'


function App() {
  const [all , setAll] = useState(true)

  useEffect(() => {
    window.scroll(0,0)
  }, [])

  useEffect(() => {

    if(window.location.pathname.includes('/modevcoAdmin-panel-admin')) {
      setAll(false)
    } 
  } , [])


  
 

  return (
    <Box>
      <Box pb={'85px'}>
        <Navbar />
      </Box>

      <Box color={'white'} display={'flex'} minHeight={'77.2vh'}>
      {all && <Box pr={'550px'} className='sidebar'>
          <Sidebar />
        </Box>}

        <Box pt={'50px'} className='wrapper' width={'100%'}>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/allLessons' element={<AllLessons />}></Route>
            <Route path='/download' element={<Download />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/faq' element={<Faq />}></Route>
            <Route path='/:modevcoAdmin-panel-admin' element={<ModevcoAdminPanelAdmin />}></Route>
          </Routes>
        </Box>

       
      </Box>

      
      <Box pt={'40px'} >
        <Footer />
      </Box>

    </Box>
  )
}

export default App
