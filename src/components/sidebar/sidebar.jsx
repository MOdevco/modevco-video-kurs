import {Box , Button, Text } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import {AiOutlineHome, AiOutlineLaptop, AiOutlineUser} from 'react-icons/ai'
import {FaQuestionCircle} from 'react-icons/fa'
import {BiBrain, BiCloudDownload} from 'react-icons/bi'

const Sidebar = () => {
  return (
    <Box width={'350px'} className='sidebar' px={'40px'} borderRight={'1px'} borderColor={'#2B2929'}  pt={'200px'} height={'100vh'} position={'fixed'} top={0} left={0} bg={'#050E17'}>
        <Box display={'flex'} flexDirection={'column'} gap={'40px'}>
            <NavLink  style={({isActive}) => {return{background: isActive ? '#8C52FF' : '#0A1624' }}} to={'/'}>
                <Text height={'47px'} width={'100%'} display={'flex'} justifyContent={'flex-start'} p={'20px'} fontWeight={'bold'} alignItems={'center'} rounded={'50px'} gap={'20px'}  fontSize={'20px'}  >
                    <AiOutlineHome />
                    Bosh Sahifa
                </Text>
            </NavLink>

            <NavLink style={({isActive}) => {return{background: isActive ? '#8C52FF' : '#0A1624' }}} to={'/allLessons'}>
                <Text height={'47px'} width={'100%'}  display={'flex'} justifyContent={'flex-start'} p={'20px'} fontWeight={'bold'} alignItems={'center'} gap={'20px'}  fontSize={'20px'}  >
                    <AiOutlineLaptop />
                    Dasturlash Darslari
                 </Text>
            </NavLink>

            <NavLink  style={({isActive}) => {return{background: isActive ? '#8C52FF' : '#0A1624' }}} to={'/contact'}>
                <Text height={'47px'} width={'100%'} display={'flex'} justifyContent={'flex-start'} p={'20px'} fontWeight={'bold'} alignItems={'center'} rounded={'50px'} gap={'20px'}  fontSize={'20px'}  >
                    <AiOutlineUser />
                    A’loqa
                 </Text>
            </NavLink>

            <NavLink style={({isActive}) => {return{background: isActive ? '#8C52FF' : '#0A1624' }}} to={'/faq'}>
               <Text height={'47px'} width={'100%'} display={'flex'} justifyContent={'flex-start'} p={'20px'} fontWeight={'bold'} alignItems={'center'} rounded={'50px'} gap={'20px'}  fontSize={'20px'}  >
                    <FaQuestionCircle />
                    Faq
                </Text>
            </NavLink>

            <NavLink style={({isActive}) => {return{background: isActive ? '#8C52FF' : '#0A1624' }}} to={'/download'}>
                <Text height={'47px'} width={'100%'} display={'flex'} justifyContent={'flex-start'} p={'20px'} fontWeight={'bold'} alignItems={'center'} rounded={'50px'} gap={'20px'}  fontSize={'20px'}  >
                    <BiCloudDownload />
                   Kerakli Yuklamalar
                 </Text>
            </NavLink>

            <NavLink  >
                <Text height={'47px'} width={'100%'} bg={'#0A1624'} display={'flex'} justifyContent={'flex-start'} p={'20px'} fontWeight={'bold'} alignItems={'center'}  gap={'20px'}  fontSize={'20px'}  >
                    <BiBrain />
                    Logika Masalalar
                 </Text>
            </NavLink>
        </Box>




    </Box>
  )
}

export default Sidebar