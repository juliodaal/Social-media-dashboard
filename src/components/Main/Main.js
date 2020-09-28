import React from 'react'

import FollowersCards from './FollowersCards'
import OverviewsCards from './OverviewsCards'

// import Instagram from '../resources/Instagram'
// import Youtube from '../resources/Youtube'

// Styles
import '../../assets/css/Main.css'

class Main extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return(
            <div className="container main">
                <FollowersCards propInstagram={this.props.propState.instagram.followersCards} propYoutube={this.props.propState.youtube.followersCards}/>
                <OverviewsCards propInstagram={this.props.propState.instagram.overviewsCards} propYoutube={this.props.propState.youtube.overviewsCards}/>
            </div>
        )
    }
}

export default Main