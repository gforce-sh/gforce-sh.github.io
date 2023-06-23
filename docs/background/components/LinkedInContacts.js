import { Header, Icon } from 'semantic-ui-react';
import styled from '@emotion/styled';
import { xs } from '../../../src/utils';

export const LinkedInContacts = () => (
  <Wrapper>
    {[
      {
        name: 'Noorul',
        link: 'https://www.linkedin.com/in/noorulameen-dev/',
      },
      { name: 'Gaurav', link: 'https://www.linkedin.com/in/gaurav-sh/' },
      { name: 'Benedita', link: 'https://www.linkedin.com/in/beneditatan/' },
    ].map((contact) => (
      <ContactContainer>
        <HeaderWrapper>
          <Header as="h3">{contact.name}</Header>
        </HeaderWrapper>
        <a
          href={contact.link}
          rel="noopener noreferrer"
          target="_blank"
          style={{ color: '#000', textDecoration: 'none' }}
        >
          <Icon name="linkedin" size="large" link />
        </a>
      </ContactContainer>
    ))}
  </Wrapper>
);

const HeaderWrapper = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background: #e7e7e7;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 25px;

  ${xs} {
    flex-direction: column;
  }
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${xs} {
    margin-bottom: 20px;
  }
`;
