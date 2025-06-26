import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import {
  AppBar,
  Tabs,
  Tab,
  Typography,
  Box,
  Button,
  SelectChangeEvent
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

// TabPanel Component
const TabPanel = ({ children, value, index, ...other }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`custom-tabpanel-${index}`}
      aria-labelledby={`custom-tab-${index}`}
      {...other}
      style={{ flexGrow: 1, width: '100%' }}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

// Accessibility props
const a11yProps = (index) => ({
  id: `custom-tab-${index}`,
  'aria-controls': `custom-tabpanel-${index}`,
});

// Reusable Tabs Component
const ReusableTabs = ({
  tabs,
  dropdownOptions = [],
  onDropdownChange = () => {},
  dropdownValue = '',
  dropdownComponent: DropdownComponent = null,
  buttonLabel = '',
  onButtonClick = () => {},
  showControls = true,
}) => {
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Tabs + Controls */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          padding: '8px',
        }}
      >
        {/* Tabs */}
        <AppBar
          position="static"
          sx={{
            bgcolor: 'blue',
            boxShadow: 'none',
            borderRadius: '8px',
            width: '600px',
            marginLeft: '14px',
            marginTop:'20px'
          }}
        >
          <Tabs
            value={value}
            onChange={handleTabChange}
            indicatorColor="none"
            textColor="white"
            aria-label="reusable-tabs"
            sx={{ display: 'flex', gap: 2}}
            // orientation='vertical'
          >
            {tabs.map((tab, index) => (
              <Tab
                key={index}
                label={tab.label}
                {...a11yProps(index)}
                sx={{
                  flex: 1,
        
                  fontWeight: value === index ? 'bold' : 'normal',
                  backgroundColor: value === index ? 'white' : '',
                  color:value==index?'blue':'white',
                  // padding: value === index ? '4px 12px' : '8px 16px',
                  borderRadius: '8px',
                  margin:value==index?'4px':'',
                  
                
                  
                }}
              
              />
            ))}
          </Tabs>
        </AppBar>

        {/* Optional Controls */}
        {/* {showControls && (
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              alignItems: 'center',
              justifyContent: 'flex-end',
              width: '30%',
            }}
          >
            {DropdownComponent && (
              <DropdownComponent
                value={dropdownValue}
                onChange={onDropdownChange}
                options={dropdownOptions}
              />
            )}
            {buttonLabel && (
              <Button variant="contained" sx={{ width: '200px', height: '40px' }} onClick={onButtonClick}>
                <AddIcon fontSize="small" sx={{ mr: 1 }} />
                {buttonLabel}
              </Button>
            )}
          </Box>
        )} */}
      </Box>

      {/* Tab Panels */}
      <Box sx={{ flexGrow: 1, width: '100%', marginTop: '10px' }}>
        {tabs.map((tab, index) => (
          <TabPanel key={index} value={value} index={index}>
            {typeof tab.component === 'string' ? tab.component : <tab.component />}
          </TabPanel>
        ))}
      </Box>
    </Box>
  );
};

export default ReusableTabs;
// import React, { useState } from 'react';
// import { useTheme } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import AddIcon from '@mui/icons-material/Add';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import TimelineIcon from '@mui/icons-material/Timeline';
// import Button from '@mui/material/Button';



// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       {...other}
//       style={{ flexGrow: 1, width: '100%' }}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// export default function ReusableTabs() {
//   const theme = useTheme();
//   const [value, setValue] = useState(0);
//   const [duration, setDuration] = useState('');

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   const handleDropdownChange = (event) => {
//     setDuration(event.target.value);
//   };

//   const durationOptions = [
//     { label: 'Days', value: '10' },
//     { label: 'Month', value: '20' },
//     { label: 'Year', value: '30' },
//   ];

//   const tabItems = [
//     {
//       label: 'Overviews',
//       component: 'coming soon',
//       icon: <DashboardIcon fontSize="small" />,
//     },
//     {
//       label: 'Tracking',
//       component: 'In progress',
//       icon: <TimelineIcon fontSize="small" />,
//     },
//   ];

//   return (
//     <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
//       <Box
//         sx={{
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           width: '100%',
//           padding: '8px',
//         }}
//       >
//         <AppBar
//           position="static"
//           sx={{
//             bgcolor: '#bbc4cc',
//             boxShadow: 'none',
//             borderRadius: '8px',
//             width: '250px',
//             marginLeft: '14px',
//           }}
//         >
//           <Tabs
//             value={value}
//             onChange={handleChange}
//             aria-label="modern styled tabs"
//             TabIndicatorProps={{
//               children: <span className="MuiTabs-indicatorSpan" />,
//             }}
//             sx={{
//               display: 'flex',
//               gap: 2,
//               minHeight: '48px',
//               '& .MuiTabs-indicator': {
//                 display: 'flex',
//                 justifyContent: 'center',
//                 backgroundColor: 'transparent',
//                 height: '100%',
//               },
//               '& .MuiTabs-indicatorSpan': {
//                 borderRadius: 8,
//                 backgroundColor: '#fff',
//                 width: '100%',
//                 height: '100%',
//               },
//             }}
//           >
//             {tabItems.map((tab, index) => (
//               <Tab
//                 key={index}
//                 icon={tab.icon}
//                 iconPosition="start"
//                 label={tab.label}
//                 sx={{
//                   zIndex: 1,
//                   color: value === index ? 'black' : '#4b5563',
//                   fontWeight: value === index ? 600 : 400,
//                   textTransform: 'none',
//                   fontSize: '0.875rem',
//                   borderRadius: '8px',
//                   minHeight: '48px',
//                   padding: '6px 12px',
//                 }}
//               />
//             ))}
//           </Tabs>
//         </AppBar>

//         <Box
//           sx={{
//             display: 'flex',
//             gap: 2,
//             alignItems: 'center',
//             justifyContent: 'flex-end',
//             width: '30%',
//           }}
//         >
//           {/* <DropdownSelect
//             value={duration}
//             onChange={handleDropdownChange}
//             placeholder="Week"
//             options={durationOptions}
//           /> */}
//           <Button variant="contained" sx={{ width: '200px', height: '40px' }}>
//             <AddIcon sx={{ mr: 1 }} fontSize="small" />
//             New Shipments
//           </Button>
//         </Box>
//       </Box>

//       <Box sx={{ flexGrow: 1, width: '100%', marginTop: '16px' }}>
//         {tabItems.map((tab, index) => (
//           <TabPanel key={index} value={value} index={index}>
//             {tab.component}
//           </TabPanel>
//         ))}
//       </Box>
//     </Box>
//   );
// }
