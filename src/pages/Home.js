import React from 'react';
import Navbar from "../components/navbar";
import { Box } from "@mui/system";
import { Card, Grid, CardContent, Typography, CardActionArea, ListItemIcon } from '@mui/material';
import LocalMallSharpIcon from '@mui/icons-material/LocalMallSharp';
import BallotSharpIcon from '@mui/icons-material/BallotSharp';
import PaidSharpIcon from '@mui/icons-material/PaidSharp';
import TimelineSharpIcon from '@mui/icons-material/TimelineSharp';
import { BarChart} from '@mui/x-charts';
import { LineChart } from '@mui/x-charts/LineChart';
import Chart from 'react-apexcharts';



// import {BarChart}  from '@mui/x-charts/BarChart';

export default function Home({ categ, productlist }) {
  const totalProducts = productlist;
  // const DataStocks = productlist.map((item) => ({
  //   timestamp: item.id,
  //   stocks: item.stocks
  // }))
  // console.log(DataStocks);
  // const data = {
  //   labels: productlist.map(o => o.name),
  //   datasets: [
  //     {
  //       label: 'Products',
  //       backgroundColor: 'rgba(0, 255, 0, 0.2)',
  //       borderColor: 'rgb(0, 255, 0)',
  //       borderWidth: 1,
  //       data: productlist.map(o => o.stock)
  //     }
  //   ]
  // };
  // const options = {
  //   plugins: {
  //   title: {
  //   display: true,
  //   text: 'Bar Chart'
  //   }
  // }
  // }

  // const barChartData = {
  //   xAxis: { dataKey: 'name', type: 'category' },
  //   yAxis: {},
  //   series: [{ dataKey: 'stock', fill: '#8884d8', name: 'Products' }],
  // };

  // const product = productlist.map(p => p.product);
  // const series = [
  //   {
  //     name: 'Stocks',
  //     data: productlist.map(p => p.stocks)
  //   }
  // ];

  // THIS CODE IS FOR LINECHART
  const uniqueCategories = [...new Set(productlist.map(p => p.category))];

  const hasStocks = uniqueCategories.some(category => {
    const stocksData = productlist.filter(p => p.category === category).map(p => p.stocks);
    return stocksData.some(stock => stock > 0);
  });

  const options = {
    chart: {
      id: "basic-bar"
    },
    animate: {
      duration: 1000, // Animation duration in milliseconds
      easing: 'easeInOut', // Easing function for the animation
    },
    annotations: {
      annotations: {
          yaxis: [
            {
              y: 50, // Adjust this value based on where you want the first line
              borderColor: '#FF0000', // Color of the first line
              label: {
                borderWidth: 0,
                style: {
                  color: '#fff', // Color of the label text for the first line
                },
              },
            },
            {
              y: 75, // Adjust this value based on where you want the second line
              borderColor: '#00FF00', // Color of the second line
              label: {
                borderWidth: 0,
                style: {
                  color: '#fff', // Color of the label text for the second line
                },
              },
            },
            // Add more objects for additional lines as needed
          ],
        }
    }
  };
  const series = uniqueCategories.map(category => ({
    name: category,
    data: productlist
      .filter(p => p.category === category)
      .map(p => p.stocks),
    // area: true,
  label:  `${category}`,
  }));

  return (
    <>
      <Navbar />
      <Box display={"flex"}>
        <Box component="main" height={230}  sx={{ flexGrow: 1, p: 2, }}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Card sx={{ maxWidth: 340, height: 150, marginTop: '20px', justifyContent: "center", alignItems: "center",  }}>
                <CardActionArea sx={{ backgroundColor: "#01579b",}}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{color: 'white', marginLeft: 2 }}>
                       Products
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                <CardActionArea>
                  <CardContent>
                    <CardContent>
                        <ListItemIcon
                          sx={{
                          minWidth: 0,
                          justifyContent: 'center',
                          marginTop: '-6px'
                          }}
                        >
                          <LocalMallSharpIcon color="primary" sx={{fontSize: 30, display: 'flex', alignItems: 'center', justifyContent: 'center',  marginRight: '8px' }}/>
                          <Typography variant="body2" color="text.secondary" sx={{ fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '5px',}}>
                              {/* Total Products: {categoryProducts.length} */}
                              Total Products: {totalProducts.length}
                          </Typography>
                        </ListItemIcon> 
                         
                    </CardContent>
                  </CardContent>
                      
                </CardActionArea>
              </Card>
            </Grid>           

            <Grid item xs={12} sm={3}>
              <Card sx={{ maxWidth: 340, height: 150, marginTop: '20px', justifyContent: "center", alignItems: "center" }}>
                <CardActionArea sx={{ backgroundColor: "#00695c",}}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" ccomponent="div" sx={{color: 'white', marginLeft: 2 }}>
                          {/* {category.categories} */}
                          Categories
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActionArea>
                  <CardContent>
                    <CardContent>
                      <ListItemIcon
                        sx={{
                        minWidth: 0,
                        justifyContent: 'center',
                        marginTop: '-6px'
                      }}
                      >
                        <BallotSharpIcon  sx={{color: '#00796b', fontSize: 30, display: 'flex', alignItems: 'center', justifyContent: 'center',  marginRight: '8px' }}/>
                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '5px'}}>
                          Total Categories: {categ.length}
                            
                        </Typography>
                      </ListItemIcon> 
                    </CardContent>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item xs={12} sm={3}>
              <Card sx={{ maxWidth: 340, height: 150, marginTop: '20px', justifyContent: "center", alignItems: "center" }}>
                <CardActionArea sx={{ backgroundColor: "#e64a19",}}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" ccomponent="div" sx={{color: 'white', marginLeft: 2 }}>
                          {/* {category.categories} */}
                          Transaction
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActionArea>
                  <CardContent>
                    <CardContent>
                      <ListItemIcon
                              sx={{
                                minWidth: 0,
                                justifyContent: 'center',
                                marginTop: '-6px'
                              }}
                              >
                          <PaidSharpIcon color="error" sx={{color: '#e65100', fontSize: 30, display: 'flex', alignItems: 'center', justifyContent: 'center',  marginRight: '8px' }}/>
                          <Typography variant="body2" color="text.secondary" sx={{ fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '5px',}}>
                              {/* Total Products: {categoryProducts.length} */}
                              Total Transaction: 
                          
                          </Typography>
                      </ListItemIcon> 
                    </CardContent>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item xs={12} sm={3}>
              <Card sx={{ maxWidth: 340, height: 150, marginTop: '20px', justifyContent: "center", alignItems: "center" }}>
                <CardActionArea sx={{ backgroundColor: "#ff9100",}}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" ccomponent="div" sx={{color: 'white', marginLeft: 2 }}>
                          {/* {category.categories} */}
                          Reports
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActionArea>
                  <CardContent>
                    <CardContent>
                      <ListItemIcon
                              sx={{
                                minWidth: 0,
                                justifyContent: 'center',
                                marginTop: '-6px'
                              }}
                              >
                          <TimelineSharpIcon color="error" sx={{color: '#ff9100', fontSize: 30, display: 'flex', alignItems: 'center', justifyContent: 'center',  marginRight: '8px' }}/>
                          <Typography variant="body2" color="text.secondary" sx={{ fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '5px',}}>
                              {/* Total Products: {categoryProducts.length} */}
                              Total Transaction: 
                          
                          </Typography>
                      </ListItemIcon> 
                    </CardContent>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
            <Card height={450} MaxWidth={500}  overflow="auto"   sx={{  marginTop: '20px',  justifyContent: "center", alignItems: "center"}}>
                <BarChart
                      xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C',] }]}
                      series={[{ data: [4, 3, 5, ] }, { data: [1, 6, 3, ] }, { data: [2, 5, 6] }, { data: [2, 2, 6] }]}
                      MaxWidth={900}
                      height={474}
                      overflow="auto"  
                    />
              </Card>
            </Grid>

            <Grid item xs={12} sm={6}>
            <Card height={450} maxWidth={100} overflow="auto"  sx={{  marginTop: '20px',  justifyContent: "center", alignItems: "center", marginRight: "30px", }}>
              {hasStocks ? (
                 <LineChart
                 options={options}
                 series={series}
                 MaxWidth={620}
                 height={474}
               />
              //  <Chart
              //   options={options}
              //   series={series}
              //   type="line"
              // />
              ):(
                <Typography variant="body2" color="text.secondary"  sx={{height: '470px', fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '5px',}}>
                No stocks available.
              </Typography>
              )}
             
               
              </Card>
            </Grid>
          </Grid>
        </Box>  
      </Box>
    </>
  );
}
