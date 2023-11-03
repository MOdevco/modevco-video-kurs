import { Avatar, Box, Button, Heading, Text, space } from '@chakra-ui/react'
import React, { useEffect, useId, useState } from 'react'
import { Man } from '../../assets'
import { AiTwotoneStar } from 'react-icons/ai'

const ComentUsers = () => {

    const [count , setCount] = useState(3)
    const [btn , setBtn] = useState(true)

    const userInfo = [
        {name: 'Foidalanuvchi' , text: 'Assalomu alekun aziz MOdevco hodimlari sizlar judaham savobli ishga qo’l uribsizlar sizlarning ishingizga omad yor bo’lsin barchangizga rahmat.'},
        {name: 'Foidalanuvchi' , text: 'Assalomu alekun aziz MOdevco hodimlari sizlar judaham savobli ishga qo’l uribsizlar sizlarning ishingizga omad yor bo’lsin barchangizga rahmat.'},
        {name: 'Foidalanuvchi' , text: 'Assalomu alekun aziz MOdevco hodimlari sizlar judaham savobli ishga qo’l uribsizlar sizlarning ishingizga omad yor bo’lsin barchangizga rahmat.'},
        {name: 'Foidalanuvchi' , text: 'Assalomu alekun aziz MOdevco hodimlari sizlar judaham savobli ishga qo’l uribsizlar sizlarning ishingizga omad yor bo’lsin barchangizga rahmat.'},
        {name: 'Foidalanuvchi' , text: 'Assalomu alekun aziz MOdevco hodimlari sizlar judaham savobli ishga qo’l uribsizlar sizlarning ishingizga omad yor bo’lsin barchangizga rahmat.'},
        {name: 'Foidalanuvchi' , text: 'Assalomu alekun aziz MOdevco hodimlari sizlar judaham savobli ishga qo’l uribsizlar sizlarning ishingizga omad yor bo’lsin barchangizga rahmat.'},
        {name: 'Foidalanuvchi' , text: 'Assalomu alekun aziz MOdevco hodimlari sizlar judaham savobli ishga qo’l uribsizlar sizlarning ishingizga omad yor bo’lsin barchangizga rahmat.'},
    ]

    const hanleShow = () => {
        setCount(count + 2)
    }

   useEffect(() => {
    if(count === userInfo.length) {
        setBtn(false)
    }
   },[])


  return (
    <Box mt={'20px'}>
       

        <Box mt={'40px'}>
            {userInfo.splice(0 , count).map((user,i) => (
                <Box mt={'40px'}>
                    <Box display={'flex'} alignItems={'center'} gap={'15px'}>
                        <Avatar src={Man} />
                        <Text fontSize={'20px'} color={'#8C52FF'}>{user.name}...</Text>
                    </Box>

                    <Box mt={'10px'}>
                        <Text fontSize={'18px'} maxW={'950px'}>{user.text}</Text>
                    </Box>

                    <Box display={'flex'} gap={'5px'} fontSize={'20px'} >
                        <AiTwotoneStar />
                        <AiTwotoneStar />
                        <AiTwotoneStar />
                        <AiTwotoneStar />
                        <AiTwotoneStar />
                    </Box>
                </Box>
            ))}

            {btn &&<Box display={'flex'} width={'70%'} justifyContent={'center'} alignItems={'center'}>
                <Button onClick={hanleShow} mt={'40px'} variant={'outline'} colorScheme='green'>Yana Ko'rish</Button>
            </Box>}
        </Box>

    </Box>
  )
}

export default ComentUsers