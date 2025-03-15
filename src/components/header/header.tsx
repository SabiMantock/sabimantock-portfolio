import {useState, SyntheticEvent} from 'react';
import {TabType} from '../../types/header';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';
import ComputerIcon from '@mui/icons-material/Computer';
import EmailIcon from '@mui/icons-material/Email';

const tabs: TabType = [
  {
    icon: <HomeIcon />,
    label: 'Home',
  },
  {
    icon: <CodeIcon />,
    label: 'Skills',
  },
  {
    icon: <BusinessCenterIcon />,
    label: 'Experience',
  },
  {
    icon: <SchoolIcon />,
    label: 'Education',
  },
  {
    icon: <ComputerIcon />,
    label: 'Projects',
  },
  {
    icon: <EmailIcon />,
    label: 'Contact',
  },
];

export const Header = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <Box
        sx={{
          width: '420px',
          position: 'fixed',
          top: '90%',
          left: 0,
          right: 0,
          margin: '0 auto',
          zIndex: 1000,
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          sx={{
            '& .MuiTabs-list': {
              justifyContent: 'center',
              borderRadius: '10px',
              backgroundColor: '#08090A',
            },
            '& .MuiTabs-indicator': {
              backgroundColor: 'transparent',
              height: '0px',
              position: 'static',
            },
            '& .MuiTab-root.Mui-selected': {
              color: '#262626',
            },
          }}
        >
          {tabs.map(({icon, label}, index) => (
            <Tab
              key={index}
              icon={icon}
              aria-label={label}
              sx={{
                minWidth: '70px',
                padding: '10px 14px',
                minHeight: '24px',
                color: 'white',
              }}
            />
          ))}
        </Tabs>
      </Box>
    </>
  );
};
