import { jsx, css } from '@emotion/react';
import { Text } from '../../../src/common';

export const InstallationMac = () => {
  return (
    <div>
      <div css={{ display: 'flex', alignItems: 'center' }}>
        <div css={{ marginRight: 5 }}>
          {'Install using '}
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
      <code>brew install node@18</code>
    </div>
  );
};

export const InstallationWin = () => {
  return (
    <div>
      <div css={{ display: 'flex', alignItems: 'center' }}>
        <div css={{ marginRight: 5 }}>Install using</div>
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
      <code>choco install nodejs-lts</code>
    </div>
  );
};

export const InstallationLinux = () => {
  return (
    <div>
      <div css={{ marginRight: 5 }}>Install using</div>
      <a
        css={{ color: 'orange', textDecoration: 'none', fontWeight: 500 }}
        href="https://github.com/nvm-sh/nvm"
        rel="noopener noreferrer"
      >
        nvm-sh
      </a>
      <div>. Nvm-sh allows easy switch between node versions.</div>

      <code>curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash</code>
      <code>source ~/.bashrc</code>
      <code>nvm install v20</code>
    </div>
  );
};
