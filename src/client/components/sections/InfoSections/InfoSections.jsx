import React from 'react';
import {data} from "./dataInfo";
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import styles from "./InfoSection.module.scss"
// function TabPanel(props) {
//         const { children, value, index, ...other } = props;
//
//         return (
//             <div
//                 role="tabpanel"
//                 hidden={value !== index}
//                 id={`full-width-tabpanel-${index}`}
//                 aria-labelledby={`full-width-tab-${index}`}
//                 {...other}
//             >
//                     {value === index && (
//                         <Box p={3}>
//                                 <Typography>{children}</Typography>
//                         </Box>
//                     )}
//             </div>
//         );
// }

// function a11yProps(index) {
//         return {
//                 id: `full-width-tab-${index}`,
//                 'aria-controls': `full-width-tabpanel-${index}`,
//         };
// }
//
// const useStyles = makeStyles((theme) => ({
//         root: {
//                 backgroundColor: theme.palette.background.paper,
//                 width: 500,
//         },
// }));

// function InfoSections() {
//         const classes = useStyles();
//         const theme = useTheme();
//         const [value, setValue] = React.useState(0);
//
//         const handleChange = (event, newValue) => {
//                 setValue(newValue);
//         };
//
//         const handleChangeIndex = (index) => {
//                 setValue(index);
//         };
//
//         return (
//             <div className={classes.root}>
//                     <AppBar position="static" color="default">
//                             <Tabs
//                                 value={value}
//                                 onChange={handleChange}
//                                 indicatorColor="primary"
//                                 textColor="primary"
//                                 variant="fullWidth"
//                                 aria-label="full width tabs example"
//                             >
//                                     <Tab label="Item One" {...a11yProps(0)} />
//                                     <Tab label="Item Two" {...a11yProps(1)} />
//                                     <Tab label="Item Three" {...a11yProps(2)} />
//                             </Tabs>
//                     </AppBar>
//                     <SwipeableViews
//                         axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
//                         index={value}
//                         onChangeIndex={handleChangeIndex}
//                     >
//                             <TabPanel value={value} index={0} dir={theme.direction}>
//                                     Подача такси
//                             </TabPanel>
//                             <TabPanel value={value} index={1} dir={theme.direction}>
//                                     Item Two
//                             </TabPanel>
//                             <TabPanel value={value} index={2} dir={theme.direction}>
//                                     Item Three
//                             </TabPanel>
//                     </SwipeableViews>
//             </div>
//         );
// }

function InfoSections() {
    const murkup = data.map(el => {
        return(
            <li className={styles.listPointItem}>
                <img src={el.img} alt={el.caption} width={"200px"} height={"200px"}/>
                <h2>{el.caption}</h2>
            </li>
        )
    })
        return(
            <section>
                <h2>Мы поможем вам добраться в любую точку быстро и комфортно</h2>
                <ul className={styles.listPoint}>{murkup}</ul>
            </section>
        )
}

export default InfoSections;
