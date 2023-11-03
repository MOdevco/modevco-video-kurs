import { Box, Button, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'

const LikeCounter = () => {
  return (
    <Box width={{base: '100%' , md: '80%'}} rounded={'10px'} bg={'transparent'} shadow={'dark-lg'} p={'20px'}>

       <Box display={'flex'} flexDirection={{base: 'column' , md: 'row'}} justifyContent={'space-between'} alignItems={{base: 'flex-start' , md: 'center'}}>
            <Box display={'flex'} gap={'40px'}>
                <Box display={'flex'} alignItems={'center'} fontSize={'30px'}>
                    <AiOutlineLike />
                    <Text>10</Text>
                </Box>

                <Box display={'flex'} alignItems={'center'} fontSize={'30px'}>
                    <AiOutlineDislike />
                    <Text>12</Text>
                </Box>
            </Box>


            <Box>
                <Box display={'flex'} alignItems={'center'} gap={'20px'}>
                    <Input type='email' bg={'#233242'} border={'none'} placeholder='Email...'></Input>
                    <Button colorScheme='teal' variant='outline' width={'150px'}>Jo’natish</Button>
                </Box>
                <Text color={'red '}>Hech qanday ban yemaysiz</Text>
            </Box>
       </Box>

    </Box>
  )
}

export default LikeCounter