import React from 'react'

import FollowersCards from './FollowersCards'
import OverviewsCards from './OverviewsCards'

import Instagram from '../resources/Instagram'
import Youtube from '../resources/Youtube'

// Styles
import '../../assets/css/Main.css'

class Main extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            instagram: {followersCards: {loading: true,error: null},overviewsCards: {loading: true,error: null}}, 
            youtube: {followersCards: {loading: true,error: null},overviewsCards: {loading: true, error: null}}, 
        }
    }
    componentDidMount(){
        this.fetchMedia(Instagram,{name: 'name'},'instagram','likes')
        this.fetchMedia(Youtube,{id:'id',key:'key'},'youtube','views')
    }
    async fetchMedia(nameClass,_data,refState,likesOrViews){
        try {
            const instance = new nameClass(_data)
            const data = await instance.getData()
            this.setState({
                [refState]: {
                    followersCards: { followers: data.followers, followersUp: data.followersUp, loading: false},
                    overviewsCards: { publications: data.publications, [likesOrViews]: data.[likesOrViews], loading: false}
                }
            })
        } catch (error) {
            this.setState({ 
            [refState]: {
                followersCards: { loading: false,error: error },
                overviewsCards: { loading: false,error: error }
            }})
        }
    }
    render() {
        return(
            <div className="container main">
                <FollowersCards propInstagram={this.state.instagram.followersCards} propYoutube={this.state.youtube.followersCards}/>
                <OverviewsCards propInstagram={this.state.instagram.overviewsCards} propYoutube={this.state.youtube.overviewsCards}/>
            </div>
        )
    }
}

export default Main