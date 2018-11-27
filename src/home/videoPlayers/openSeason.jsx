import React from "react"
import ReactPlayer from 'react-player'
import OS1Video from '../../videos/OS4_Seq01(clean).avi';


class OpenSeason1 extends React.Component {
  render(){
    return(
     <ReactPlayer 
      url={OS1Video}
      playing 
      onPlay={console.log("playing!!")}
    />
    )
  }
}

export default OpenSeason1