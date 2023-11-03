
import { Box } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter , Divider, Button , ButtonGroup, Stack , Avatar , Heading , Text , Image } from '@chakra-ui/react'
import { BiCheckSquare } from 'react-icons/bi'
import {FaUserAlt} from 'react-icons/fa'
import { Man } from '../../assets'
import { Badge } from '@chakra-ui/react'
const MaxCard = () => {
  return (
   <Box cursor={'pointer'}>
        <Card maxW={{base: '100%' , md: '450px'}} bg={'#14212F'}>
            <Box>
                <Badge width={'70px'} textAlign={'center'} m={'10px'} colorScheme='pink'>
                    Papular
                </Badge>
                <Badge>Front-end</Badge>
            </Box>

            <CardBody>
                <Image
                src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                alt='Green double couch with wooden legs'
                borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading fontSize={'35px'} size='md'>Html To’liq Kurs</Heading>
                    <Box display={'flex'} alignItems={'center'} className='maxCardFooter' justifyContent={'space-between'}>
                        <Text display={'flex'} fontSize={'20px'} alignItems={'center'} gap={'10px'}>
                            <FaUserAlt />
                            Boshlang’ich 
                        </Text>
                        <Text display={'flex'} fontSize={'20px'} alignItems={'center'} gap={'10px'}>
                            <BiCheckSquare />
                            Darslar soni 11 ta
                        </Text>
                    </Box>
                </Stack>
            </CardBody>
            <Divider  color={'gray'} />
            <CardFooter>
                <ButtonGroup spacing='2' display={'flex'} alignItems={'center'} className='maxCardFooter' justifyContent={'space-between'} width={'100%'}>
                    <Box display={'flex'} alignItems={'center'} gap={'10px'}>
                        <Avatar src={Man} />
                        <Text fontSize={'20px'}>Muhammadali. A</Text>
                    </Box>
                    <Text fontSize={'20px'}>
                        <del><span style={{color: 'red'}}>200.000 </span></del>Bepul
                    </Text>
                </ButtonGroup>
            </CardFooter>
        </Card>

   </Box>
  )
}

export default MaxCard