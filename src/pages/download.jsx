import { Box, Heading, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import DownloadCard from '../components/downloadCard/downloadCard'

const Download = () => {



  useEffect(() => {
    window.scroll(0,0)
  }, [])
  return (
   <Box display={'flex'} flexDirection={'column'} width={{base: '100%' , md: '80%'}} gap={'20px'}>
      <Box>
        <Heading fontSize={'40px'}><span style={{color: 'red'}}>Kerakli</span> yuklamalar </Heading>
        <Text fontSize={'20px'}>Siz gitHup dan shu joyda bor liohalarni yuklashingiz mumkun bo’ladi</Text>
      </Box>

      <Box display={'flex'} gap={'20px'} flexWrap={'wrap'} justifyContent={'flex-start'} >
        <DownloadCard />
        <DownloadCard />
        <DownloadCard />
        <DownloadCard />
        <DownloadCard />
        <DownloadCard />
        <DownloadCard />
        <DownloadCard />
        <DownloadCard />
        <DownloadCard />
        <DownloadCard />
        <DownloadCard />
        <DownloadCard />
        <DownloadCard />
        <DownloadCard />
      </Box>

   </Box>
  )
}

export default Download