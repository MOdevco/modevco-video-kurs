import { Box, Button, Heading, Textarea } from '@chakra-ui/react'
import React from 'react'

const Coments = () => {
  return (
    <Box width={{base: '100%' , md: '80%'}} p={'20px'} bg={'transparent'} shadow={'dark-lg'}>
        <Box display={'flex'} flexDirection={'column'} gap={'20px'}>
            <Box>
                <Heading fontSize={'20px'}>Izohingizni Yozib Qoldiring!</Heading>
            </Box>

            <Box>
                <Textarea placeholder='Izox qoldirish...' border={'none'} rows={'8'} bg={'#233242'}></Textarea>
                <Button colorScheme='teal' variant='outline' mt={'20px'} width={'200px'}>Jo’natish</Button>
            </Box>
           
        </Box>
    </Box>
  )
}

export default Coments