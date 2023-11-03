
import { Box , Heading , Avatar , Text , Flex  , Button} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { HamburgerIcon } from '@chakra-ui/icons'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react'
import {useDisclosure  } from '@chakra-ui/react'
import { useRef, useState } from 'react'
import { AiOutlineHome, AiOutlineLaptop, AiOutlineUser } from 'react-icons/ai'
import { FaQuestionCircle } from 'react-icons/fa'
import { BiBrain, BiCloudDownload } from 'react-icons/bi'

const Navbar = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [size, setSize] = useState('')
    const handleClick = (newSize) => {
        setSize(newSize)
        onOpen()
      }
    
      const sizes = ['xs']



  return (
    <Box width={'100%'} position={'fixed'} zIndex={2}  borderBottom={'1px'} borderColor={'#2B2929'} color={'white'} height={'88px'}  bg={'#050E17'}>
        <Box className='wrapper' display={'flex'} justifyContent={'space-between'} alignItems={'center'} minHeight={'88px'}>

            <Box cursor={'pointer'} display={{base: 'block' , md: 'none'}}>
                {sizes.map((size) => (
                    <HamburgerIcon onClick={() => handleClick(size)}  key={size}  m={4} fontSize={'40px'} />
                ))}
                <Drawer
                    isOpen={isOpen}
                    placement='left'
                    onClose={onClose}
                    size={size}
                >
                    <DrawerOverlay />
                    <DrawerContent bg={'#050E17'}>
                    <DrawerCloseButton />
                    <DrawerBody display={'flex'} flexDirection={'column'} justifyContent={'center'} >
                        <Box display={'flex'} flexDirection={'column'} gap={'20px'}>
                            <Link to={'/'}>
                                <Button height={'47px'} width={'100%'} display={'flex'} justifyContent={'flex-start'} gap={'20px'} color={'white'} fontSize={'20px'} bg={'#0A1624'} _hover={{bg: '#233242'}}>
                                    <AiOutlineHome />
                                    Bosh Sahifa
                                </Button>
                            </Link>

                            <Link to={'/allLessons'}>
                                <Button height={'47px'} width={'100%'} display={'flex'} justifyContent={'flex-start'} gap={'20px'} color={'white'} fontSize={'20px'} bg={'#0A1624'} _hover={{bg: '#233242'}}>
                                    <AiOutlineLaptop />
                                    Dasturlash Darslari
                                </Button>
                            </Link>

                            <Link to={'/contact'}>
                                <Button height={'47px'} width={'100%'} display={'flex'} justifyContent={'flex-start'} gap={'20px'} color={'white'} fontSize={'20px'} bg={'#0A1624'} _hover={{bg: '#233242'}}>
                                    <AiOutlineUser />
                                    A’loqa
                                </Button>
                            </Link>

                            <Link to={'faq'}>
                                <Button height={'47px'} width={'100%'} display={'flex'} justifyContent={'flex-start'} gap={'20px'} color={'white'} fontSize={'20px'} bg={'#0A1624'} _hover={{bg: '#233242'}}>
                                    <FaQuestionCircle />
                                    Faq
                                </Button>
                            </Link>

                            <Link to={'/download'}>
                                <Button height={'47px'} width={'100%'} display={'flex'} justifyContent={'flex-start'} gap={'20px'} color={'white'} fontSize={'20px'} bg={'#0A1624'} _hover={{bg: '#233242'}}>
                                    <BiCloudDownload />
                                    Kerakli Yuklamalar
                                </Button>
                            </Link>

                            <Link>
                                <Button height={'47px'} width={'100%'} display={'flex'} justifyContent={'flex-start'} gap={'20px'} color={'white'} fontSize={'20px'} bg={'#0A1624'} _hover={{bg: '#233242'}}>
                                    <BiBrain />
                                    Logika Masalalar
                                </Button>
                            </Link>
                        </Box>
                    </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Box>

            <Box cursor={'pointer'}>
                <Link to={'/'}>
                    <Heading fontSize={{base: '30px' , md: '40px'}} fontWeight={'bold'}><span style={{color: 'red'}}>MO</span>devco</Heading>
                </Link>
            </Box>

            <Flex alignItems={'center'} gap={'10px'}>
                <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                <Text display={{base: 'none' , md: 'block'}} color={'#8C52FF'} fontWeight={'bold'} fontSize={'20px'}>DataSpin</Text>
            </Flex>
        </Box>
    </Box>
  )
}

export default Navbar