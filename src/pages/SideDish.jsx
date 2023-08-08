import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';
import '../style.css';

export function SideDish() {
  return (
    <>
      <div className="heading">Přílohy</div>
      <TableContainer maxWidth={800}>
        <Table variant="striped">
          <TableCaption>
            Doporučené velikostí porcí v syrové formě pro dospělého člověka
          </TableCaption>
          <Thead>
            <Tr>
              <Th fontSize={25}>Název</Th>
              <Th fontSize={25}>Příloha</Th>
              <Th fontSize={25}>Hlavní</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Brambory</Td>
              <Td>180 g</Td>
              <Td></Td>
            </Tr>
            <Tr>
              <Td>Těstoviny</Td>
              <Td>70 g</Td>
              <Td>85 g</Td>
            </Tr>
            <Tr>
              <Td>Rýže</Td>
              <Td>60 g</Td>
              <Td>75 g</Td>
            </Tr>
            <Tr>
              <Td>Čočka</Td>
              <Td>60 g</Td>
              <Td>75 g</Td>
            </Tr>
            <Tr>
              <Td>Kuskus</Td>
              <Td>45 g</Td>
              <Td>50 g</Td>
            </Tr>
            <Tr>
              <Td>Polenta</Td>
              <Td>45 g</Td>
              <Td></Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}
