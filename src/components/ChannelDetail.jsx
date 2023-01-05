import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {Box} from '@mui/material';
import {Videos, ChannelCard} from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';


const ChannelDetail = () => {
  const [ChannelDetail, setChannelDetail] =useState(null);
  const [videos, setVideos]=useState([])
  
  return (
    <Box minHeight='95vh'>
      <Box>
        <div style={{
          background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(3,42,69,1) 0%, rgba(5,4,78,1) 17%, rgba(7,7,102,1) 27%, rgba(9,9,121,1) 35%, rgba(6,87,173,1) 60%, rgba(0,212,255,1) 100%)',
          zIndex:10,
          height:'300px'
        }}
        />
        <ChannelCard channelDetail={ChannelDetail} marginTop='-110px'/>
      </Box>
      <Box display='flex' p='2'>
        <Box sx={{mr:{sm:'100px'}}} />
          <Videos videos={videos} />

      </Box>
      
    </Box>
 )
}

export default ChannelDetail
