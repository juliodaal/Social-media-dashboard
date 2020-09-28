import React from 'react'

import { loading,calcPercent,winOrLostFollowers,showDataFollowers } from '../resources/functions'

import '../../assets/css/OverviewsCards.css'

class OverviewsCards extends React.Component {
    constructor(props){
        super(props)
        
        this.updatePublicationsFacebook = React.createRef();
        this.updatePublicationsTwitter = React.createRef();
        this.updatePublicationsInstagram = React.createRef();
        this.updatePublicationsYoutube = React.createRef();
        
        this.updateLikesFacebook = React.createRef();
        this.updateLikesTwitter = React.createRef();
        this.updateLikesInstagram = React.createRef();
        this.updateViewsYoutube = React.createRef();;

        this.loaderPublicationsInsta = React.createRef();
        this.loaderPublicationsFace = React.createRef();
        this.loaderPublicationsTwitter = React.createRef();
        this.loaderPublicationsYouTube = React.createRef();
        
        this.loaderLikesInsta = React.createRef();
        this.loaderLikesFace = React.createRef();
        this.loaderLikesTwitter = React.createRef();
        this.loaderViewsYouTube = React.createRef();
    }
    packingResources(){
        return [
            {
                id: 1,
                refLoader: this.loaderLikesFace,
                refUpdate: this.updatePublicationsFacebook,
                publications: 3,
                localStorage: 3,
                description: 'Publications',
                loader: false
            },
            {
                id: 2,
                refLoader: this.loaderPublicationsFace,
                refUpdate: this.updateLikesFacebook, 
                publications: 504,
                localStorage: 504,
                description: 'Likes',
                loader: false
            },
            {
                id: 3, 
                refLoader: this.loaderLikesInsta,
                refUpdate: this.updateLikesInstagram,
                publications: showDataFollowers(this.props.propInstagram,'likes'),
                localStorage: localStorage.getItem('likes'),
                description: 'Likes',
                loader: this.props.propInstagram.loading
            },
            {
                id: 4, 
                refLoader: this.loaderPublicationsInsta,
                refUpdate: this.updatePublicationsInstagram,
                publications: showDataFollowers(this.props.propInstagram,'publications'),
                localStorage: localStorage.getItem('publications'),
                description: 'Publications',
                loader: this.props.propInstagram.loading
            },
            {
                id: 5, 
                refLoader: this.loaderPublicationsTwitter,
                refUpdate: this.updatePublicationsTwitter,
                publications: 174,
                localStorage: 174,
                description: 'Retweets',
                loader: false
            },
            {
                id: 6, 
                refLoader: this.loaderLikesTwitter,
                refUpdate: this.updateLikesTwitter,
                publications: 203,
                localStorage: 203,
                description: 'Likes',
                loader: false
            },
            {
                id: 7, 
                refLoader: this.loaderPublicationsYouTube,
                refUpdate: this.updatePublicationsYoutube,
                publications: showDataFollowers(this.props.propYoutube,'publications'),
                localStorage: localStorage.getItem('publications-youtube'),
                description: 'Publications',
                loader: this.props.propYoutube.loading
            },
            {
                id: 8, 
                refLoader: this.loaderViewsYouTube,
                refUpdate: this.updateViewsYoutube,
                publications: showDataFollowers(this.props.propYoutube,'views'),
                localStorage: localStorage.getItem('views'),
                description: 'Total Views',
                loader: this.props.propYoutube.loading
            },
        ]
    }
    componentDidUpdate(){
        loading(this.packingResources(),'loader-mini')
        winOrLostFollowers(calcPercent(this.props.propInstagram.likes,localStorage.getItem('likes')),this.updateLikesInstagram)
        winOrLostFollowers(calcPercent(this.props.propInstagram.publications,localStorage.getItem('publications')),this.updatePublicationsInstagram)
        winOrLostFollowers(calcPercent(this.props.propYoutube.views,localStorage.getItem('views')),this.updateViewsYoutube)
        winOrLostFollowers(calcPercent(this.props.propYoutube.publications,localStorage.getItem('publications-youtube')),this.updatePublicationsYoutube)
    }
    render(){
        return(
            <div className="container-overviews">
                <h2>Overview - Today</h2>
                <div className="container-overviews-cards">
                {this.packingResources().map(card => (
                    <button className="overview-card" key={card.id}>
                    <div className="loader-mini" ref={card.refLoader}></div>
                        <div className="top-content">
                            <span>{card.description}</span>
                            <figure></figure>
                        </div>
                        <div className="bottom-content">
                            <p>{card.publications}</p>
                            <span ref={card.refUpdate} className="win">
                                <figure></figure>
                                {calcPercent(card.publications,card.localStorage)}%
                            </span>
                        </div>
                    </button>
                ))}
                </div>
            </div>
        )
    }
}

export default OverviewsCards