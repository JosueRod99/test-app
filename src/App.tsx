import React from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Stack } from 'react-bootstrap';

function App() {
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
