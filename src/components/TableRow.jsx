import React, { Component, useEffect, useCallback } from 'react';
import Card from './Card'
import {
    Tr,
    Td,
    LinkBox,
    LinkOverlay
} from '@chakra-ui/react'

export default function TableRow({ name, country, likes }) {
    const [showCard, setShowCard] = React.useState(false)

    return (
        <>
            <LinkBox as={Tr} transform="scale(1)"><Td><LinkOverlay>{name}</LinkOverlay></Td> <Td>{country}</Td><Td>{likes}</Td></LinkBox>

            {!!showCard ?? <Card></Card>}
        </>
    )
}