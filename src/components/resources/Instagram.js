import sendToLocalStorage from './SendToLocalStorage'

class Instagram {
    constructor(el){
        this.name = el.name 
        this.likes = 0;
        this.state = { error: null, data: {} }
    }
    getData(){
        return this.fetchData()    
    }
    fetchData = async () => {
        try {
            const response = await fetch(`https://www.instagram.com/${this.name}/?__a=1`)
            const data = await response.json()
            if(Object.keys(data).length !== 0 ){
                this.state ={ data: data }
                return this.packingData()
            }  else {
                throw new Error('Empty Fields');
            }
        } catch (error) {
            this.state = { error: error }
            return this.handleError()
        } 
    }
    handleError(){
        throw this.state.error
    }
    packingData = () => {
        const arrayPublication = this.state.data.graphql.user.edge_owner_to_timeline_media.edges
        const publications = this.state.data.graphql.user.edge_owner_to_timeline_media.count
        const countFollowers = this.state.data.graphql.user.edge_followed_by.count;

        arrayPublication.forEach(publication => { this.likes = this.likes + publication.node.edge_media_preview_like.count });
        
        this.followersUp = sendToLocalStorage(countFollowers,publications, this.likes,'instagram')

        return {
            followers: countFollowers,
            followersUp: this.followersUp,
            publications: publications,
            likes: this.likes
        }
    }
}

export default Instagram