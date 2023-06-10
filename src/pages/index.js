import React from 'react'
import styled from '@emotion/styled'

import { Page } from '../components/Page';
import ErrorBoundary from '../components/ErrorBoundary';
import background from '@site/static/img/universe.jpeg'

export default function Home() {
  return (
    <AppContainer>
      <ErrorBoundary>
        <Page/>
      </ErrorBoundary>
    </AppContainer>
  );
};


const AppContainer = styled.div`
background-image: url(${background});
background-position: center;
background-size: cover;
background-repeat: no-repeat;
width: 100vw;
height: 100vh;
`