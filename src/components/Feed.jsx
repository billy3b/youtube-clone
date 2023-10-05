import React, {useState, useEffect } from 'react';
import {Box, Stack, Typography } from'@mui/material';
import {Sidebar, Videos} from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';


const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
    },[selectedCategory]);

  return (
    <Stack sx= {{flexDirection: {sx: 'column', md:'row'} }}>
      <Box sx={{height: {sx:'auto', md:'92vh'}, borderRight:'1px solid #3d3d3d', px:{sx:0, md:2}}}>
        <Sidebar 
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography className='copyright' variant='body2' sx={{mt:1.5, color:'#fff'}}>
          Copyright 2023 Avinash Roy
        </Typography>
      </Box>
      
    </Stack>
  )
}
export default Feed
