import React, {useState, useEffect} from "react";
import pageOne from "../images/idd/MockUpIDD.png";
import pageTwo from "../images/idd/MockUpIDD2.png";
import pageThree from "../images/idd/MockUpIDD3.png";
import pageFour from "../images/idd/MockUpIDD4.png";
import pageFive from "../images/idd/MockUpIDD5.png";
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      className="tab-page-content"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          {/* <Typography>{children}</Typography> */}
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function TabPage() {
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <main>
    <Box sx={{ bgcolor: 'background.paper', width: '100vw' }}>
      <AppBar style={{height: "10vh"}} position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Home" {...a11yProps(0)} />
          <Tab label="About" {...a11yProps(1)} />
          <Tab label="Resume" {...a11yProps(2)} />
          <Tab label="Portfolio" {...a11yProps(3)} />
          <Tab label="Contact" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
        <img
        src={pageOne}
        alt="Home"
      />

        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <img
        src={pageTwo}
        alt="About"
      />        
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        <img
        src={pageThree}
        alt="Resume"
      />        
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
        <img
        src={pageFour}
        alt="Portfolio"
      />        
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
        <img
        src={pageFive}
        alt="Contact"
      />        
        </TabPanel>
      </SwipeableViews>
    </Box>
    </main>
  );
}
