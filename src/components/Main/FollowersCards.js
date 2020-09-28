import React from 'react'
import { loading,showDataFollowers,winOrLostFollowers } from '../resources/functions'

import '../../assets/css/FollowersCards.css'

class FollowersCards extends React.Component {
    constructor(props){
        super(props)
        this.updateFollowersFacebook = React.createRef();
        this.updateFollowersTwitter = React.createRef();
        this.updateFollowersInstagram = React.createRef();
        this.updateFollowersYoutube = React.createRef();
        this.loaderFace = React.createRef();
        this.loaderTwitter = React.createRef();
        this.loaderInsta = React.createRef();
        this.loaderYoutube = React.createRef();
    }
    packingResources = () => {
        return [
            {
                id: 1,
                name: '@JulioCesarDaal',
                refLoader: this.loaderFace,
                refUpdat: this.updateFollowersFacebook,
                followers: 295,
                followersUp: 0,
                description: 'Followers',
                loader: false
            },
            {
                id: 2,
                name: '@julio_daal',
                refLoader: this.loaderTwitter,
                refUpdate: this.updateFollowersTwitter, 
                followers: 103,
                followersUp: 1,
                description: 'Followers',
                loader: false
            },
            {
                id: 3,
                name: '@julio_daal', 
                refLoader: this.loaderInsta,
                refUpdate: this.updateFollowersInstagram,
                followers: showDataFollowers(this.props.propInstagram,'followers'),
                followersUp: showDataFollowers(this.props.propInstagram,'followersUp'),
                description: 'Followers',
                loader: this.props.propInstagram.loading
            },
            {
                id: 4,
                name: 'Keep Code', 
                refLoader: this.loaderYoutube,
                refUpdate: this.updateFollowersYoutube,
                followers: showDataFollowers(this.props.propYoutube,'followers'),
                followersUp: showDataFollowers(this.props.propYoutube,'followersUp'),
                description: 'Subscribers',
                loader: this.props.propYoutube.loading
            },
        ]
    }
    componentDidUpdate = () => {
        loading(this.packingResources(),'loader')
        winOrLostFollowers(this.props.propInstagram.followersUp,this.updateFollowersInstagram)
        winOrLostFollowers(this.props.propYoutube.followersUp,this.updateFollowersYoutube)
    }
    render(){
        return(
            <React.Fragment>
                <div className="container-followers">
                {this.packingResources().map(card => (
                    <button className="follower-card" key={card.id} >
                        <div ref={(ctx) => this.ref = ctx}></div>
                        <div className="loader" ref={card.refLoader}></div>
                        <div className="title">
                            <figure></figure>
                            <span>{card.name}</span>
                        </div>
                        <div className="followers-quantity">
                            <strong>{card.followers}</strong>
                            <p>{card.description}</p>
                        </div>
                        <div ref={card.refUpdate} className="update win">
                            <figure></figure>
                            <span>{card.followersUp} Today</span>
                        </div>
                    </button>
                ))}
                </div>
            </React.Fragment>
        )
    }
}

export default FollowersCards