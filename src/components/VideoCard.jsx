import React from 'react'
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';


const VideoCard = ({ video : {id: videoId, snippet }}) => {
  console.log(videoId, snippet);
  return (
    <Card sx={{width:{xs:'100%', md:'320px',sm:'350px'}, boxShadow:'none', borderRadius:0}}>
       <Link to= {videoId ? `/video/${videoId}` : demoVideoUrl}>
      <CardMedia 
        image={snippet?.thumbnails?.high?.url } 
        alt={snippet?.title} 
        title={snippet?.title || demoVideoTitle}
        sx={{ width: { xs: '100%', sm: '360px',md:'320px'}, height: 180 }} 
      />
      </Link> 
      <CardContent sx={{backgroundColor:'#1e1e1e', height: '106px'}}> 
        <Link to= {videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant='subtitle1' fontWeight='bold' color='#FFF'>
            {snippet.title.slice(0,60) || demoVideoTitle.slice(0,60)}
          </Typography>
        </Link>
      
      </CardContent>
    </Card>
  )
}

export default VideoCard
