import { Avatar, Box, Button, Heading } from '@chakra-ui/react'
import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
import { DeleteIcon, NotAllowedIcon } from '@chakra-ui/icons'

const UsersTable = () => {
  return (
    <Box display={'flex'}pt={'30px'} flexDirection={'column'} gap={'30px'}>
        <Heading>Foidalanuvchilar ro’yhati</Heading>
        <Box  bg={'transparent'}  overflow={'auto'} height={'700px'}  shadow={'dark-lg'} p={'20px'}  >
                <Table className='table' size='sm'>
                    <Thead >
                        <Tr >
                            <Th>Avatar</Th>
                            <Th>Ismi</Th>
                            <Th>Email</Th>
                            <Th>Tahrirlash</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                    <Tr>
                        <Td><Avatar /></Td>
                        <Td>MOdevco</Td>
                        <Td>modevco05@gmail.com</Td>
                        <Td >
                            <Button bg={'red'} mr={'20px'}><DeleteIcon /></Button>
                            <Button bg={'red'}><NotAllowedIcon /></Button>
                        </Td>
                    </Tr>
                    </Tbody>
                </Table>    
        </Box>
    </Box>
  )
}

export default UsersTable