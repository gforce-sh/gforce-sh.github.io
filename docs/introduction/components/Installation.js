import { jsx, css } from '@emotion/react';
import { Text } from '../../../src/common';

export const InstallationMac = () => {
  return (
    <div>
      <Text size={24} weight={700}>
        Node
      </Text>

      <div css={{ display: 'flex', alignItems: 'center' }}>
        <div css={{ marginRight: 5 }}>
          {'It is recommended to install using '}
        </div>
        <a
          css={{ color: 'orange', textDecoration: 'none', fontWeight: 500 }}
          href="https://github.com/nvm-sh/nvm"
          rel="noopener noreferrer"
        >
          nvm
        </a>
        <div>. Nvm allows easy switch between node versions.</div>
      </div>

      <Text size={16} weight={500} padding="20px 0 0">
        <Text size={16} display="inline-flex" weight="700">
          Alternatively,
        </Text>{' '}
        install using Brew
      </Text>
      <div>Brew is a package manager for MacOS</div>

      <code>{`ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`}</code>

      <Text size={16} weight={500} padding="20px 0 0">
        To install Node
      </Text>
      <code>brew install node@16.15.0</code>
    </div>
  );
};

export const InstallationWin = () => {
  return (
    <div>
      <Text size={24} weight={700}>
        Node
      </Text>

      <div css={{ display: 'flex', alignItems: 'center' }}>
        <div css={{ marginRight: 5 }}>It is recommended to install using</div>
        <a
          css={{ color: 'orange', textDecoration: 'none', fontWeight: 500 }}
          href="https://github.com/coreybutler/nvm-windows"
          rel="noopener noreferrer"
        >
          nvm-windows
        </a>
        <div>. Nvm-windows allows easy switch between node versions.</div>
      </div>

      <Text size={16} weight={500} padding="20px 0 0">
        <Text size={16} display="inline-flex" weight="700">
          Alternatively,
        </Text>{' '}
        install using Chocolatey
      </Text>
      <div>Chocolatey is a package manager for Windows</div>

      <a
        css={{ color: 'orange', textDecoration: 'none', fontWeight: 500 }}
      >{`https://chocolatey.org/install`}</a>

      <Text size={16} weight={500} padding="20px 0 0">
        To install Node
      </Text>
      <code>choco install nodejs --version=16.15.0</code>
    </div>
  );
};
