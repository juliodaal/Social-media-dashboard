import React from 'react';

import Header from './components/Header/Header'
import Main from './components/Main/Main'

import Instagram from './components/resources/Instagram'
import Youtube from './components/resources/Youtube'

import './assets/css/App.css'
import './assets/css/Responsive.css'

class App extends React.Component{
  constructor(props){
      super(props)
      this.state = {
          instagram: {followersCards: {loading: true,error: null},overviewsCards: {loading: true,error: null}}, 
          youtube: {followersCards: {loading: true,error: null},overviewsCards: {loading: true, error: null}}, 
      }
      this.totalFollowers = 0;
  }
  componentDidMount(){
      this.fetchMedia(Instagram,{name: 'julio_daal'},'instagram','likes')
      this.fetchMedia(Youtube,{id:'UCVguGQ7gcAmto4QrQGbKvFA',key:'AIzaSyAjnMTWDKgJ-pV_-7ZibyQw-4qnsksnwv4'},'youtube','views')
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
    return (
      <React.Fragment>
        <Header propFollowers={this.state} />
        <Main propState={this.state} />
      </React.Fragment>
    );
  }
}

export default App;
