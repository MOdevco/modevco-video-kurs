import { Box, Heading, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import Acordion from '../components/acordion/acordion'
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'

const Faq = () => {
    const [selektion , setSelektion] = useState(true)

    setTimeout(() => {
        setSelektion(false)
    } , 1000)

    useEffect(() => {
        window.scroll(0,0)
      }, [])
  return (
   <Box >

        {selektion ? (
            <Box width={{base: '100%' , md: '80%'}} display={'flex'} flexDirection={'column'} gap={'30px'}>
                <Stack>
                    <Skeleton height='45px' />
                    <Skeleton height='45px' />
                </Stack>


                <Stack>
                    <Skeleton height='45px' />
                    <Skeleton height='45px' />
                    <Skeleton height='45px' />
                    <Skeleton height='45px' />
                    <Skeleton height='45px' />
                    <Skeleton height='45px' />
                    <Skeleton height='45px' />
                    <Skeleton height='45px' />
                    <Skeleton height='45px' />
                </Stack>
            </Box>
        ): (
            <Box display={'flex'} flexDirection={'column'} gap={'20px'}>
                <Box  width={{base: '100%' , md: '80%'}}>
                    <Box>
                        <Heading fontSize={'40px'} color={'red'}>FAQ</Heading>
                    </Box>
                    <Box>
                        <Text fontSize={'20px'}>Tez-tez so'raladigan savollar</Text>
                    </Box>
                </Box>


                <Box>
                    <Box  width={{base: '100%' , md: '80%'}} bg={'transparent'} display={'flex'} flexDirection={'column'} gap={'10px'} shadow={'dark-lg'} p={'30px'}>
                            <Acordion title={'Bu platforma bizga nima beradi?'} paragrapg={"Platforma tartibida o'rgansangiz va kelajakda hech qanday muamolarisiz loyihalarni bajara olasiz."}/>
                            <Acordion title={'Kurs menga nima beradi?'} paragrapg={"Darslardagi ma'lumotlarni mukammal o'rgatadi"}/>
                            <Acordion title={'Homilik qilishim mumkinmi?'} paragrapg={"Ha albatda qilsangiz bo'ladi. Uning uchun biz bilan bog'lanishingiz kerak bo'ladi. Telegram orqalik bog'lansa bo'ladi. Homiylik maqsadlari faqat platforma rivoji va pullik darsliklar chiqgan taqdirda o'qish uchun mablag'i mavjud bo'lmagan o'quvchilarga yordam berish."}/>
                            <Acordion title={'Videodagi videolarni yuklab olsam bo\'ladimi?'} paragrapg={"Yo'q darsliklarni yuklab olsa bo'lmaydi. Keyinchalik bunday imkoniyatni berish rejada bor."}/>
                            <Acordion title={'Qanday qilib platforma asoschisi bilan bog\'lansam bo\'ladi?'} paragrapg={"Platforma asoschisi bilan telegram yordamida bog'lanishingiz mumkin bo'ladi."}/>
                            <Acordion title={'Kursni qachondan boshlasam bo\'ladi?'} paragrapg={"Xohlagan vaqtda va xohlagan yoshda boshlash mumkin"}/>
                            <Acordion title={'Video darsliklarni qayerdan o\'rgansam bo\'ladi?'} paragrapg={"Bosh sahifadagi xohlagan texnalogiyangizni bo'limiga tushib video darslik degan tugma yordamida kirib ko'rsangiz bo'ladi."}/>
                            <Acordion title={'Platforma yoki video darsliklarni yangi chiqgan holatlarini qayerdan bilsam bo\'ladi?'} paragrapg={"Telegram kanalimizga kirib, yangiliklardan xabardor bo'lishingiz mumkin."}/>
                    </Box>
                </Box>
            </Box>
        )}


   </Box>
  )
}

export default Faq