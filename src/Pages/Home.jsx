import React, { use } from 'react'
import NavBar from '../Components/NavBar'
import SideBar from '../Components/SideBar'
import { useAppDipatch,useAppSelector } from '../Hooks/useApp'
import { getHomePageVideos } from '../Store/reducers/getHomePageVideos'
import spinner from '../components/spinner'
import infiniteScroll from 'react-infinite-scroll-component'
import card from '../components/card'
import { MdHeight } from 'react-icons/md'

const dispatch = useAppDispatch()
const videos = useAppSelector(state => state.getHomePageVideos.videos)

useEffect(() => {
  dispatch(getHomePageVideos(false))
}, [dispatch])

return(
  <div className='max-h-screen overflow-hidden'>
    <div style={{height:"7.5vh"}}>
      <NavBar />
    </div>
    <div>
      
    </div>
  </div>
)

export default Home