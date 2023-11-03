import { Box, Divider, Heading } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import MaxCard from '../components/maxCard/maxCard'
import LikeCounter from '../components/likeCounter/likeCounter'
import Coments from '../components/coments/coments'
import ComentUsers from '../components/comentUsers/comentUsers'

const AllLessons = () => {


  useEffect(() => {
    window.scroll(0,0)
  }, [])


  return (
   <Box display={'flex'} flexDirection={'column'} gap={'20px'}>
    <Box><Heading><span style={{color: 'red'}}>Barcha </span>Dasturlash Kurslar</Heading></Box>

    <Box display={'flex'} gap={'20px'} flexWrap={'wrap'} width={{base: '100%' , md: '80%'}} justifyContent={'space-between'}>
      <MaxCard />
      <MaxCard />
      <MaxCard />
      <MaxCard />
      <MaxCard />
      <MaxCard />
      <MaxCard />
    </Box>


    <Box pt={'30px'}>
      <LikeCounter />
    </Box>

    <Box pt={'30px'}>
      <Coments />
    </Box>

    <Box width={'80%'} mt={'30px'}>
      <Divider />
    </Box>

    <Box>
      <Box>
        <Heading fontSize={{base: '20px' , md: '30px' }}>Foidalanuvchilarimizdan Izoxlar</Heading>
      </Box>
      <ComentUsers />
    </Box>
   </Box>
  )
}

export default AllLessons