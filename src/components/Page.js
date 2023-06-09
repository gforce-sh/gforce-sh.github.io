import React from 'react'
import styled from '@emotion/styled';
import Link from '@docusaurus/Link';

import { Text } from '../common'

export const Page = () => {
  return (
    <PageWrapper>
      <MenuContainer>
        <Link to="/basics-react">
          <Card>
            <Text weight={700} size={28} lineHeight={1.2}>React basics</Text>
            <Text size={12} color="#C9CCCC">Gitbook course</Text>
            <Text size={14} margin="10px 0 0">Learn the basics of ReactJS and front-end development</Text>
          </Card>
        </Link>
          
          <Card>
            <Text weight={700} size={28} lineHeight={1.2}>Computation engine</Text>
            <Text size={12} color="#C9CCCC">Productivity</Text>
            <Text size={14} margin="10px 0 0">MacOS menubar calculator app</Text>
          </Card>
      </MenuContainer>
        <MessageContainer>
          <BigText size={84}>Hello there,</BigText>
          <BigText size={42} delayed>
            welcome to my page.
          </BigText>
      </MessageContainer>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 50px 20px;

  color: white;

  @keyframes drop-in {
    from {
      opacity: 0;
      transform: translateY(-100px);
    }
    to {
      opacity: 1;
      transform: translate(0px);
    }
  }

  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const MenuContainer = styled.div`
  margin: 20% 10px 0 10%;
  animation: appear 1200ms ease 500ms backwards;

  a {
    color: none;
    text-decoration: none;
    transition: none;
  }
`;

const MessageContainer = styled.div`
  margin: 20px 10% 0 10px;
`;

const BigText = styled.div`
  font-size: ${({ size = 24 }) => `${size}px`};
  color: #fff;
  line-height: 1;
  animation: ${({ delayed }) =>
    `drop-in ${delayed ? '1200ms' : '1s'} ease ${
      delayed ? '500ms' : '200ms'
    } backwards`};
`;

const Card = styled.div`
    padding: 20px;
    background-color: #000;
    opacity: 0.6;
    border-radius: 5px;
    color: #fff;
    margin: 10px;
    cursor: pointer;
    width: 350px;

    :hover {
      opacity: 0.75
    }
`