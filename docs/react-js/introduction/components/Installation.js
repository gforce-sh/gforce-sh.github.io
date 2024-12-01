import { Text } from '../../../../src/common';

export const InstallationMac = () => {
  return (
    <div>
      <div
        css={{
          display: 'flex',
          justifyContent: 'flex-start',
          flexWrap: 'wrap',
        }}
      >
        <div css={{ marginRight: 5, minWidth: 86 }}>{'Install using '}</div>
        <a
          css={{
            color: 'orange',
            textDecoration: 'none',
            fontWeight: 500,
            marginRight: 3,
            minWidth: 32,
          }}
          href="https://github.com/nvm-sh/nvm"
          rel="noopener noreferrer"
        >
          nvm
        </a>
        <div>
          (<code>https://github.com/nvm-sh/nvm</code>).
        </div>
        {'Nvm allows easy switch between node versions.'
          .split(' ')
          .map((item) => (
            <div css={{ marginLeft: 3 }}>{item}</div>
          ))}
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
      <code>brew install node@20</code>
    </div>
  );
};

export const InstallationWin = () => {
  return (
    <div>
      <div
        css={{
          display: 'flex',
          justifyContent: 'flex-start',
          flexWrap: 'wrap',
        }}
      >
        <div css={{ marginRight: 5, minWidth: 86 }}>Install using</div>
        <a
          css={{
            color: 'orange',
            textDecoration: 'none',
            fontWeight: 500,
            marginRight: 3,
            minWidth: 107,
          }}
          href="https://github.com/coreybutler/nvm-windows"
          rel="noopener noreferrer"
        >
          nvm-windows
        </a>
        <div>
          (<code>https://github.com/coreybutler/nvm-windows</code>).
        </div>
        {'nvm-windows allows easy switch between node versions.'
          .split(' ')
          .map((item) => (
            <div css={{ marginLeft: 3 }}>{item}</div>
          ))}
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
      <code>choco install nodejs --version=20.9.0</code>
    </div>
  );
};

export const InstallationLinux = () => {
  return (
    <div>
      <div
        css={{
          display: 'flex',
          justifyContent: 'flex-start',
          flexWrap: 'wrap',
        }}
      >
        <div css={{ marginRight: 5, minWidth: 86 }}>Install using</div>
        <a
          css={{
            color: 'orange',
            textDecoration: 'none',
            fontWeight: 500,
            marginRight: 3,
            minWidth: 40,
          }}
          href="https://github.com/nvm-sh/nvm"
          rel="noopener noreferrer"
        >
          nvm-sh
        </a>
        <div>
          (<code>https://github.com/nvm-sh/nvm</code>).
        </div>
        {'Nvm-sh allows easy switch between node versions.'
          .split(' ')
          .map((item) => (
            <div css={{ marginLeft: 3 }}>{item}</div>
          ))}
      </div>
      <Text margin="20px 0 0 0" weight={500} size={16}>
        Steps
      </Text>
      <div>
        <Text margin="10px 0 0 0" size={16}>
          Install nvm:
        </Text>
        <code>
          curl -o-
          https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
        </code>
      </div>
      <div>
        <Text margin="20px 0 0 0" size={16}>
          The script from the previous step updates the bashrc file. We need to
          source the updated file:
        </Text>
        <code>source ~/.bashrc</code>
      </div>
      <div>
        <Text margin="20px 0 0 0" size={16}>
          Finally, install the node version you'd like:
        </Text>
        <code>nvm install v20</code>
      </div>
      <div>
        <Text margin="20px 0 0 0" size={16}>
          To switch between node versions:
        </Text>
        <code>nvm use 20</code>
      </div>
    </div>
  );
};
