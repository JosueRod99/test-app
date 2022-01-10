import React, { useEffect } from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Stack } from 'react-bootstrap';
import axios from 'axios';

function App() {
  const fetchData = async () => {
    const result = await axios.get(
      'https://zen-cori-c1f8d6.netlify.app/.netlify/functions/getInfo?name=eduardo'
    );
    console.log(result.data.users);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <NavBar />
      <Container>
        <Stack className="mt-3" direction="horizontal" gap={3}>
          <Button className="col-3" variant="primary">
            Button #1
          </Button>
          <Button variant="secondary" className="col-3 pl-1">
            Button #2
          </Button>
          <Button variant="success" className="col-3">
            Button #3
          </Button>
        </Stack>
      </Container>
    </div>
  );
}

export default App;
