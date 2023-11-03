import { Box, Button, Heading, Input, Stack, Text, Textarea } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react'
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import { ThreeCircles } from 'react-loader-spinner'
const Contact = () => {
    const [skelet , setSkelet] = useState(true)

    setTimeout(() => {
        setSkelet(false)
    } , 1000)

    useEffect(() => {
        window.scroll(0,0)
      }, [])
  return (
    <Box>
        {skelet ? (
            <Box width={{base: '100%' , md: '80%'}} display={'flex'} flexDirection={'column'} gap={'50px'}>
                <Stack width={'100%'}>
                    <Skeleton height='50px' />
                    <Skeleton height='50px' />
                   
                </Stack>

                <Stack width={'100%'}>
                    <Skeleton height='50px' />
                    <Skeleton height='50px' />
                    <Skeleton height='50px' />
                    <Skeleton height='50px' />
                </Stack>
            </Box>

        ): (
            <Box display={'flex'} flexDirection={'column'} gap={'20px'} width={{base: '100%' , md: '80%'}}>
                <Box>
                    <Box>
                        <Heading fontSize={'40px'}> <span style={{color: 'red'}}>Yagona</span> Bog’lanish Joyi</Heading>
                    </Box>

                    <Box>
                        <Text fontSize={'20px'}>Platformaga oid harqanday savollarga javob olasz!</Text>
                    </Box>
                </Box>
                <Box width={'100%'} rounded={'20px'} display={'flex'} gap={'30px'} alignItems={'center'} justifyContent={'space-between'} p={'20px'} boxShadow='dark-lg' bg={'transparent'} >
                    <Box width={'100%'} className='input' display={'flex'} flexDirection={'column'} gap={'20px'}>
                        <FormControl>
                            <FormLabel>Ismingiz</FormLabel>
                            <Input type='text' placeholder='MOdevco' bg={'#233242'} border={'none'} height={'50px'} />
                        </FormControl>

                        <FormControl>
                            <FormLabel>Emailingiz</FormLabel>
                            <Input type='text' placeholder='modevco@gmail.com' bg={'#233242'} border={'none'} height={'50px'} />
                        </FormControl>


                        <FormControl>
                            <FormLabel>Xabaringiz</FormLabel>
                            <Textarea bg={'#233242'} border={'none'}  placeholder='Xabaringiz...' />
                        </FormControl>


                        <Button  colorScheme='teal' variant='outline'>
                            Jo’natish
                        </Button>
                    </Box>

                    <Box className='contactSpiner'>
                        <ThreeCircles
                            height="300"
                            width="300"
                            color="#8C52FF"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                            ariaLabel="three-circles-rotating"
                            outerCircleColor=""
                            innerCircleColor=""
                            middleCircleColor=""
                        />
                    </Box>
                </Box>
            </Box>
        )}


    </Box>
  )
}

export default Contact