import { Tab, Image } from 'semantic-ui-react';

const getPanes = (qrcodeLink, mentiLink) => [
  {
    menuItem: 'Scan a QR Code',
    render: () => (
      <Tab.Pane>
        <Image src={qrcodeLink} size="small" centered />
      </Tab.Pane>
    ),
  },
  {
    menuItem: 'Go to link',
    render: () => (
      <Tab.Pane>
        <a href={mentiLink} rel="noopener noreferrer" target="_blank">
          {mentiLink}
        </a>
      </Tab.Pane>
    ),
  },
];

export const MentiFeedbackTabs = ({ qrcodeLink, mentiLink }) => (
  <Tab
    menu={{ borderless: true, attached: false, tabular: false, widths: 2 }}
    panes={getPanes(qrcodeLink, mentiLink)}
  />
);
