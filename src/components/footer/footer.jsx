import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { AiFillYoutube, AiOutlineCopyright, AiOutlineInstagram } from 'react-icons/ai'
import { BiLogoTiktok } from 'react-icons/bi'

const Footer = () => {
  return (
    <Box color={'white'} width={'100%'} borderTop={'1px'} display={'flex'} justifyContent={'flex-start'} alignItems={'center'} borderColor={'#2B2929'} height={'10vh'} bg={'#050E17'} >
        <Box pl={{base: '0px' , md: '280px'}} className='wrapper' display={'flex'} alignItems={'flex-start'} flexDirection={{base: 'column' , md: 'row'}} justifyContent={'space-between'} width={{base: '100%' , md: '80%'}}>
            <Box>
                <Text color={'gray.600'} fontSize={'20px'}>Modevco barcha huquqlardan himoyalangan</Text>
            </Box>

            <Box display={'flex'} justifyContent={'center'} flexDirection={{base: 'row' , md: 'column'}} gap={'10px'} alignItems={'center'}>
                <Box display={'flex'} fontSize={'20px'} gap={'10px'} color={'gray.600'}>
                    <AiOutlineInstagram />
                    <BiLogoTiktok />
                    <AiFillYoutube />
                </Box>
                <Box  display={'flex'}   color={'gray.600'} alignItems={'center'}>
                    <AiOutlineCopyright />
                    <Text>2023</Text>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Footer