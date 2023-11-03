import { Box } from '@chakra-ui/react'
import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'
const Acordion = ({title , paragrapg}) => {
  return (
   <Box>
        
        <Box>
            <Accordion allowMultiple>
                <AccordionItem border={'none'} bg={'#233242'} borderLeft={'2px'} rounded={'8px'} borderColor={'#8C52FF'} roundedBottomLeft={'0'} roundedTopLeft={'0'} p={'10px'}>
                    {({ isExpanded }) => (
                    <>
                        <h2>
                        <AccordionButton _hover={{bg: ''}}>
                            <Box as="span" flex='1' fontSize={'20px'} textAlign='left'>
                                {title}
                            </Box>
                            {isExpanded ? (
                            <MinusIcon color={'#8C52FF'} fontSize='12px' />
                            ) : (
                            <AddIcon color={'#8C52FF'} fontSize='12px' />
                            )}
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} fontSize={'16px'}>
                            {paragrapg}
                        </AccordionPanel>
                    </>
                    )}
                </AccordionItem>
            </Accordion>
        </Box>
   </Box>
  )
}

export default Acordion