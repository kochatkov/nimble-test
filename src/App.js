import React from 'react';
import { Container } from "@material-ui/core";

import { Logo } from "./components/atoms/Logo/Logo";
import { TimerPanelComponent } from "./components/templates/TimerPanelComponent/TinerPanelComponent";

function App() {
  return (
    <Container maxWidth='xs'>
      <Logo title='tracker' />
      <TimerPanelComponent />
    </Container>
  );
}

export default App;
