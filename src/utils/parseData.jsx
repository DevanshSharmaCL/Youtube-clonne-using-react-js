import React from 'react'
import axios from 'axios'
import { parseVideoDuration } from './ParseVideoDuration'
import { convertRawToString } from './convertRawToString'
const API_KEY=ProcessingInstruction.env.REACT_APP_YOUTUBE_API_KEY

const parseData = async(items) => {

  try{
    const videosId=[]
    const channelIds=[]

    items.forEach((item)=>{
      channelIds.push(item.snippet.channelId);
      videosId.push(item.id.videosIds)
    })

    const{
      data:{item:channelsData}
    } = await axios.get(`https://www.googleapis.com/youtube/v3/channels?part=snippet.contentDetails&id=&id=${channelIds.join(',')}&key=${API_KEY}`)

    const parsedChannelIsData=[];
    channelsData.forEach((channel)=>parsedChannelIsData.push({
      id:channel.id,
      image:channel.snippet.thumbnails.dafault.url,
    }));

    const{
      data:{items:videosData}
    }=await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videosId.join(',')}&key=${API_KEY}`)

   
    const parseData=[];
    items.forEach((item,index)=>{
      const {image:channelImage} = parsedChannelIsData.find((data)=>data.id===items.snippet.channelId);
      if(channelImage){
        parseData.push({
          videosId:item.id.videosData,
          videoTitle:item.snippet.title,
          videoDescription:item.snippet.description,
          videoThumbnail:item.snippet.thumbnails.medium.url,
          videoLink:'https://www.youtube.com/watch?v='+item.id.videosId,
          videoDuration:parseVideoDuration(videosData[index].contantDetails.duration),
          viewCount: videosData[index].statistics.viewCount,
          videoAge: timeSlice(new Date(item.snippet.publishedAt)),
          channelInfo: {
            id: item.snippet.channelId,
            image: channelImage,
            name: item.snippet.channelTitle,
          },
        });
      }
    });

    return parseData;
  }
  catch(err){
    console.log(err);
  }
   
}

export default parseData