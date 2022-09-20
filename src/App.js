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
        <Button colorScheme='blue' size='lg'>ปุ่ม</Button>
        <Spinner color='red.500' />
        <Input placeholder='' />

      </div>
    </ChakraProvider>
  );
}



export default App;
