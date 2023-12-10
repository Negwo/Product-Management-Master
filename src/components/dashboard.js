import * as React from 'react';
import { useState } from 'react';
import ListItemText from '@mui/material/ListItemText';
import { styled, useTheme, Box, CssBaseline, Divider, IconButton, ListItem, ListItemIcon, } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { UseApp } from './statnav';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import ClassSharpIcon from '@mui/icons-material/ClassSharp';
import PaidSharpIcon from '@mui/icons-material/PaidSharp';
import LeaderboardSharpIcon from '@mui/icons-material/LeaderboardSharp';
import InventorySharpIcon from '@mui/icons-material/InventorySharp';

import Tab from '@mui/material/Tab';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import Home from '../pages/Home';
import Product from '../pages/Product';
import Category from '../pages/Category';
import Stocks from '../pages/Stocks';
import Transaction from '../pages/transaction';
import Report from '../pages/Report';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);



export default function Dashboard() {
    const theme = useTheme();
    // const [open, setOpen] = React.useState(false);
    // const navbar = useNavigate();
    // const updateOpen = UseApp ((state) => state.updateOpen);
    const open = UseApp ((state) => state.Nopen);

    // -------------INDAGDAG NA CODE PARA SA TABS--------------
    const [value, setValue] = useState('0');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    console.log(value)

    const [productlist, setProductList] = useState ([]); // List of Array from product list
    const [categ, setCateg] = useState([]);// List of Array from Category list        
    const [count, setCount] = useState (1) // Count San ID sa Product
    const [countcateg, setCountCateg] = useState (1) //Count San ID sa Category
    const [transaction, setTransaction] = useState ([]); // List of Array
    const [checkeditem, setCheckedItem] = useState ([]) //list of array for check box to handle items to place to order
    const [isCheckoutDisabled, setIsCheckoutDisabled] = useState(true);
    const [orderHistory, setOrderHistory] = useState([]);


    // -------------CLOSING--------------

    return (
        <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Drawer variant="permanent" open={open}>
            <DrawerHeader>
            <IconButton>
                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
            </DrawerHeader>

            <Divider />
            <TabContext value={value.toString()}>
                <TabList
                    orientation="vertical"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    sx={{ borderRight: 1, borderColor: 'divider', marginTop:3 }}
                >
                   <Tab
                        label={
                            <ListItem                
                                sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                                }}
                            >
                            <React.Fragment sx={{ fontSize: 16, opacity: open ? 1 : 0,  alignItems: 'center' }}>

                                        <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center',
                                        }}
                                        >
                                        <HomeSharpIcon color="primary" sx={{fontSize: 30, marginLeft: -2.9,}}/>
                                        </ListItemIcon>                   
                                        <ListItemText primary="Home" sx={{ color: '#0d47a1', alignItems: "center", opacity: open ? 1 : 0 }} />
                                  
                            </React.Fragment>
                            </ListItem>  
                        }
                    />
                    <Tab
                        label={
                            <ListItem                
                                sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                                }}
                            >
                            <React.Fragment sx={{ fontSize: 16, opacity: open ? 1 : 0, display: 'flex', alignItems: 'center' }}>

                                        <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center',
                                        }}
                                        >
                                        <ShoppingCartSharpIcon sx={{fontSize: 30, marginLeft: -2.9 }}/>
                                        </ListItemIcon>                   
                                        <ListItemText primary="Product" sx={{color: '#212121', alignItems: "center", opacity: open ? 1 : 0 }} />       
                            </React.Fragment>   
                            </ListItem>  
                        }
                   
                    />
                    <Tab
                        label={
                            <ListItem                
                                sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                                }}
                            >
                            <React.Fragment sx={{ fontSize: 16, opacity: open ? 1 : 0, display: 'flex', alignItems: 'center' }}>

                                        <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center',
                                        }}
                                        >
                                        <ClassSharpIcon sx={{fontSize: 30, marginLeft: -2.9,  }}/>
                                        </ListItemIcon>                   
                                        <ListItemText primary="Category" sx={{color: '#212121', alignItems: "center", opacity: open ? 1 : 0 }} />
                                  
                            </React.Fragment>
                            </ListItem>  
                        }
                    />
                    <Tab
                        label={
                            <ListItem                
                                sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                                }}
                            >
                            <React.Fragment sx={{ fontSize: 16, opacity: open ? 1 : 0, display: 'flex', alignItems: 'center' }}>

                                        <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center',
                                        }}
                                        >
                                        <PaidSharpIcon sx={{fontSize: 30, marginLeft: -2.9  }}/>
                                        </ListItemIcon>                   
                                        <ListItemText primary="Transaction" sx={{color: '#212121', alignItems: "center", opacity: open ? 1 : 0 }} />
                                  
                            </React.Fragment>
                            </ListItem>  
                        }
                    />
                    <Tab
                        label={
                            <ListItem                
                                sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                                }}
                            >
                            <React.Fragment sx={{ fontSize: 16, opacity: open ? 1 : 0, display: 'flex', alignItems: 'center' }}>

                                        <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center',
                                        }}
                                        >
                                        <InventorySharpIcon sx={{fontSize: 30, marginLeft: -2.9  }}/>
                                        </ListItemIcon>                   
                                        <ListItemText primary="Stocks" sx={{color: '#212121', alignItems: "center", opacity: open ? 1 : 0 }} />
                                  
                            </React.Fragment>
                            </ListItem>  
                        }
                    />
                    <Tab
                        label={
                            <ListItem                
                                sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                                }}
                            >
                            <React.Fragment sx={{ fontSize: 16, opacity: open ? 1 : 0, display: 'flex', alignItems: 'center' }}>

                                        <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center',
                                        }}
                                        >
                                        <LeaderboardSharpIcon sx={{fontSize: 30, marginLeft: -2.9  }}/>
                                        </ListItemIcon>                   
                                        <ListItemText primary="Reports" sx={{color: '#212121', alignItems: "center", opacity: open ? 1 : 0 }} />
                                  
                            </React.Fragment>
                            </ListItem>  
                        }
                    />
                </TabList>
            </TabContext>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3,  }}>
            <DrawerHeader />
            <TabContext value={value.toString()}>
                <TabPanel value="0">
                    <h1 style={{marginTop: -30}}>DASHBOARD</h1>
                    <Home sx={{width: 100}} categ={categ} productlist = {productlist}/>
                </TabPanel>
                <TabPanel value="1">
                    <h1 style={{marginTop: -25}}>PRODUCT</h1>
                    <Product categ={categ} productlist = {productlist} setProductList = {setProductList} setCount = {setCount} count = {count}/>
                </TabPanel>
                <TabPanel value="2">           
                    <h1 style={{marginTop: -25}}>CATEGORY</h1>
                    <Category setCateg={setCateg} categ={categ} setCountCateg = {setCountCateg} countcateg = {countcateg}/>
                </TabPanel>
                <TabPanel value="3">
                    <h1 style={{marginTop: -25}}>TRANSACTION</h1>
                    <Transaction productlist = {productlist} setProductList = {setProductList} transaction = {transaction} setTransaction = {setTransaction} setCheckedItem={setCheckedItem} checkeditem={checkeditem} setIsCheckoutDisabled={setIsCheckoutDisabled} isCheckoutDisabled={isCheckoutDisabled} orderHistory={orderHistory} setOrderHistory={setOrderHistory}/>
                </TabPanel>
                <TabPanel value="4">
                    <h1 style={{marginTop: -25}}>STOCKS</h1>
                    <Stocks productlist = {productlist} setProductList = {setProductList} setCateg={setCateg} categ={categ} />
                </TabPanel>
                <TabPanel value="5">
                    <h1 style={{marginTop: -25}}>REPORTS</h1>
                    <Report orderHistory={orderHistory} setOrderHistory={setOrderHistory} />
                </TabPanel>
            </TabContext>
        </Box>
    </Box>

     

 

    );
}