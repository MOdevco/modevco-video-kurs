import { Box , Text , Button , Heading} from '@chakra-ui/react'
import { AiOutlineClockCircle } from 'react-icons/ai'
import {MdLocationOn } from 'react-icons/md'
import {GiReceiveMoney} from 'react-icons/gi'
import { CirclesWithBar } from 'react-loader-spinner'
import MinCard from '../components/minCard/minCard'
import MaxCard from '../components/maxCard/maxCard'
import { useEffect } from 'react'
const Home = () => {

    useEffect(() => {
        window.scroll(0,0)
      }, [])
  return (
    <Box className='wrapper' width={'100%'} display={'flex'} flexDirection={'column'} gap={'150px'}>
        
        <Box width={{base: '100%' , md: '80%'}} position={'relative'} display={'flex'}  gap={'20px'} rounded={'20px'} p={'20px'}  bg={'#233242'}>
            <Box>
                <Text fontSize={'20px'}><span style={{color: 'red'}}>MO</span>devco - Bepul Online Kurslari</Text>
                <Text fontSize={'20px'} mt={2}>Siz Bu Joydagi O’zingiz Hohlagan Darslar va Kurslarni O’ganganingizdan So’ng Juda Yahshi Natijaga Erishishingiz Mumkun Bo’ladi va O’zingiz Hohlagan Narsalarni O’rganasiz Bundan Biz Judaham Hursan Bo’lamiz.😊</Text>
                <Box  className='noneElement'>
                    <Button overflow={'auto'} width={'100%'} height={'45px'} display={'flex'} alignItems={'center'} justifyContent={'space-evenly'} _hover={{bg: ''}} bg={'#0A1624'} _active={{bg: ''}} mt={2}>
                        <Text display={'flex'}  borderRight={{base: 'none' , md: '2px'}} pr={'50px'} alignItems={'center'} gap={'10px'} fontSize={'20px'}>
                            <AiOutlineClockCircle />
                            Natija bir umir
                        </Text>

                        <Text display={'flex'} borderRight={{base: 'none' , md: '2px'}} pr={'50px'}  alignItems={'center'} gap={'10px'} fontSize={'20px'}>
                            <MdLocationOn />
                            Siz istagan joyda
                        </Text>

                        <Text display={'flex'} alignItems={'center'} gap={'10px'} fontSize={'20px'}>
                            <GiReceiveMoney />
                            Mutloqo bepul
                        </Text>

                    </Button>

                </Box>

                <Box className='blockElement'>
                    <Box  display={'flex'} flexDirection={'column'} gap={'20px'}>
                        <Button _hover={{bg: ''}} bg={'#0A1624'} _active={{bg: ''}}  width={'100%'} height={'45px'}>
                            <Text display={'flex'}   alignItems={'center'} gap={'10px'} fontSize={'20px'}>
                                <AiOutlineClockCircle />
                                Natija bir umir
                            </Text>
                        </Button>
                        <Button _hover={{bg: ''}} bg={'#0A1624'} _active={{bg: ''}}  width={'100%'} height={'45px'}>
                            <Text display={'flex'}   alignItems={'center'} gap={'10px'} fontSize={'20px'}>
                                <MdLocationOn />
                                Siz istagan joyda
                            </Text>
                        </Button>
                        <Button _hover={{bg: ''}} bg={'#0A1624'} _active={{bg: ''}}  width={'100%'} height={'45px'}>
                            <Text display={'flex'} alignItems={'center'} gap={'10px'} fontSize={'20px'}>
                                <GiReceiveMoney />
                                Mutloqo bepul
                            </Text>
                        </Button>
                    </Box>
                </Box>

            </Box>

            <Box display={{xs: 'none' , md: 'block'}} className='animate'>
                <CirclesWithBar
                    height="200"
                    width="200"
                    color="#8C52FF"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    outerCircleColor=""
                    innerCircleColor=""
                    barColor=""
                    ariaLabel='circles-with-bar-loading'
                />

            </Box>
        </Box>


        <Box display={'flex'} minHeight={'50vh'} flexDirection={'column'} width={{base: '100%' , md: '80%'}}>
            <Box pb={'20px'}>
                <Heading>
                    <span style={{color: 'red' , paddingRight: '10px'}}>Eng</span>
                    Yangilari
                </Heading>
            </Box>
            <Box display={'flex'} gap={'20px'} flexDirection={{base: 'column' , md: 'row'}}  justifyContent={'space-between'}>
                <MinCard />
                <MinCard />
                <MinCard />
            </Box>
        </Box>


        <Box display={'flex'} minHeight={'100vh'} flexDirection={'column'} width={{base: '100%' , md: '80%'}}>
            <Box pb={'20px'}>
                <Heading>
                    <span style={{color: 'red' , paddingRight: '10px'}}>Eng</span>
                    Oldi Kurslar
                </Heading>
            </Box>
            <Box display={'flex'} flexWrap={'wrap'} gap={'20px'} flexDirection={{base: 'column' , md: 'row'}}  justifyContent={'space-between'}>
                <MaxCard />
                <MaxCard />
                <MaxCard />
                <MaxCard />
                <MaxCard />
                <MaxCard />
                <MaxCard />
                <MaxCard />
            </Box>
        </Box>


    </Box>
  )
}

export default Home