import testSend from './testSend'

class Youtube {
    constructor(el){
        this.id = el.id 
        this.key = el.key 
        this.state = { error: null, data: {} }
    }
    getData(){
        return this.fetchData()    
    }
    fetchData = async () => {
        try {
            const response = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${this.id}&key=${this.key}`);
            const data = await response.json();
            
            this.state ={ data: data }
            return this.packingData()
        } catch (error) {
            this.state = { error: error }
            return this.handleError()
        } 
    }
    handleError(){
        throw this.state.error
    }
    packingData = () => {
        const publications = this.state.data.items[0].statistics.videoCount
        const countFollowers = this.state.data.items[0].statistics.subscriberCount
        const views = this.state.data.items[0].statistics.viewCount 

        this.followersUp = testSend(countFollowers,publications,views)
        
        return {
            followers: countFollowers,
            followersUp: this.followersUp,
            publications: publications,
            views: views
        }
    }
}

export default Youtube