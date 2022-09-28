import React, { Component, useEffect, useMemo } from 'react';
import cities from '../us-cities.json'
import TableRow from './TableRow';

import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Input,
    TableContainer,
} from '@chakra-ui/react'


export default function Autofill() {
    const [value, setValue] = React.useState('')

    let cititesMap
    useMemo(() => {
        cititesMap = cities.map(city => {
            const name = city.name
            if (name.includes(value)) {
                return <TableRow name={name} country={city.country} likes={city.details.likes} />

            }
        })
    }, [value]);

    return (
<div>
    <Input width={'200px'} onChange={(e) => setValue(e.target.value)} type="search" />
    <TableContainer >
        <Table variant='striped' width={'200px'} colorScheme='teal'>
            <Thead>
                <Tr>
                    <Th>Name</Th>
                    <Th>Country</Th>
                    <Th isNumeric>Likes</Th>
                </Tr>
            </Thead>
            <Tbody>
                {cititesMap}
            </Tbody>
        </Table>
    </TableContainer>
</div>

    )
}