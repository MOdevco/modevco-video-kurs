import { Box, Button, ButtonGroup, Divider, Heading, Image, SimpleGrid, Skeleton, SkeletonCircle, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Triangle } from 'react-loader-spinner'
import { BiCloudDownload } from 'react-icons/bi'
const DownloadCard = () => {
    const [selektion , setSelektion] = useState(true)

    setTimeout(() => {
        setSelektion(false)
    } , 1000)
  return (
    <Box  width={{md: '100%' , base: '100%' , lg: '30%'}}>
        {selektion ? (
            <Box display={'flex'} flexDirection={'column'} gap={'10px'}>
                <Box display={'flex'} width={{base: '100%' , md: '324px'}} flexDirection={'column'} gap={'5px'}>
                    <Skeleton height='30px' />
                    <Skeleton height='30px' />
                    <Skeleton height='30px' />
                    <Skeleton height='30px' />
                    <Skeleton height='30px' />
                </Box>
            </Box>
        ): (
            <Box  boxShadow='dark-lg'_hover={{bg: '#0A1620' , transition: '0.5s'}}>
                <Card bg={'transparent'} width={'100%'}>
                    <CardBody>
                        <Stack spacing='1'>
                            <Triangle
                            height="80"
                            width="80"
                            color="#8C52FF"
                            ariaLabel="triangle-loading"
                            wrapperStyle={{}}
                            wrapperClassName=""
                            visible={true}
                            />
                            <Text>
                            Html va css dagi loihani yuklash
                            </Text>
                        </Stack>
                    </CardBody>
                    <CardFooter width={'100%'}>
                        <ButtonGroup spacing='2'>
                            <Button colorScheme='teal' width={'100%'} display={'flex'} alignItems={'center'}  gap={'10px'} variant='outline'>
                                Yuklash
                                <BiCloudDownload fontSize={'25px'} />
                            </Button>
                        </ButtonGroup>
                    </CardFooter>
                </Card>
            </Box>
        )}

    </Box>
  )
}

export default DownloadCard