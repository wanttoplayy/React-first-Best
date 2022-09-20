import logo from './logo.svg';
import './App.css';
import { ChakraProvider, Button, Spinner, Input } from '@chakra-ui/react';
import DisplayJohn from './components/DisplayJohn';
import { JohnProfile } from './components/DisplayJohn';

function App() {
  return (
    <ChakraProvider>
      <div className="App">

        <DisplayJohn></DisplayJohn>
        <JohnProfile></JohnProfile>
        <Button colorScheme='blue' size='lg'>ปุ่ม1</Button>
        <Button colorScheme='yellow' size='lg'>ปุ่ม2</Button>
        <Button colorScheme='red' size='lg'>ปุ่ม3</Button>
        <Spinner color='red.500' />
        <Spinner color='blue.400' />
        <Spinner color='yellow.300' />
        <Input variant='filled' placeholder='ใส่' size='sm' />
        <Input variant='flushed' placeholder='มา' size='md' />
        <Input variant='outline' placeholder='เลย' size='lg' />

      </div>
    </ChakraProvider>
  );
}



export default App;
