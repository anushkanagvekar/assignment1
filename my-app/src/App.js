import React from 'react';
import Blade from './Blade';
import { Panel } from '@fluentui/react/lib/Panel';
import { useBoolean } from '@fluentui/react-hooks';
import { ButtonContainer, StyledButton } from './StyleComponents.js/AppStyle';
import { AppProvider } from './AppContext'; // Import the context provider

const App = () => {
  const [isOpen, { setTrue: openPanel, setFalse: dismissPanel }] = useBoolean(false);

  return (
    <AppProvider>
      <ButtonContainer>
        <StyledButton text="Click Here" onClick={openPanel} />
        <Panel
          isOpen={isOpen}
          onDismiss={dismissPanel}
          closeButtonAriaLabel="Close"
          hasCloseButton
          styles={{ main: { width: '100%', minWidth: '800px' } }}
        >
          <Blade dismissPanel={dismissPanel} />
        </Panel>
      </ButtonContainer>
    </AppProvider>
  );
};

export default App;
