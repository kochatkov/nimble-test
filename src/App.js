import React from 'react';
import { Logo } from "./components/atoms/Logo/Logo";
import { Container } from "@material-ui/core";
import { AddTimerField } from "./components/molecules/AddTimerField/AddTimerField";

function App() {
  return (
    <Container maxWidth='sm'>
        <Logo title='tracker' />
        <AddTimerField />
    </Container>
  );
}

export default App;
