import {Box} from '@chakra-ui/react'
import { Card, Badge, CardBody,Image, CardFooter , Text , Button , Stack , Divider , Heading , ButtonGroup } from '@chakra-ui/react'

const MinCard = () => {
  return (

    <Box minHeight={'20vh'} boxShadow='dark-lg'>
        
        <Card maxW='xl' bg={'transparent'}>
            <Box>
                <Badge width={'50px'} textAlign={'center'} m={'10px'} colorScheme='green'>
                    New
                </Badge>
                <Badge>Front-end</Badge>
            </Box>

            <CardBody>
                <Image
                src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                alt='Green double couch with wooden legs'
                borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>Living room Sofa</Heading>
                </Stack>
            </CardBody>
            <Divider  color={'gray.700'} />
            <CardFooter width={'100%'}>
                <ButtonGroup spacing='2'  display={'flex'} width={'100%'} alignItems={'center'} justifyContent={'space-between'}>
                    <Button  colorScheme='teal' variant='outline'>
                        KIRISH
                    </Button>
                    <Box fontSize={'20px'}>
                        <del><span style={{color: 'red'}}>200.000</span></del> Bepul
                    </Box>
                </ButtonGroup>
            </CardFooter>
        </Card> 

    </Box>
  )
}

export default MinCard