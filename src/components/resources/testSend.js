const testSend = (countFollowers,publications, views) => {
    let day = new Date().getDate()
        let followersUp = 0
        if(localStorage.getItem('current-day')){
            if(localStorage.getItem('current-day') === `${day}`){
                if(localStorage.getItem('followers-youtube') === `${countFollowers}`){
                    followersUp = 0
                } else {
                    if(!localStorage.getItem('followers-youtube')){
                        localStorage.setItem('followers-youtube',`${countFollowers}`)
                    }
                    localStorage.setItem('publications-youtube',`${publications}`)
                    localStorage.setItem('views',`${views}`)
                    followersUp = countFollowers - parseInt(localStorage.getItem('followers-youtube')) 
                }
            } else {
                localStorage.setItem('current-day', `${day}`)
                followersUp = countFollowers - parseInt(localStorage.getItem('followers-youtube'))
                localStorage.setItem('followers-youtube',`${countFollowers}`)
                localStorage.setItem('views',`${views}`)
                localStorage.setItem('publications-youtube',`${publications}`)
            }
        } else {
            localStorage.setItem('current-day',`${day}`)
            localStorage.setItem('followers-youtube',`${countFollowers}`)
            localStorage.setItem('views',`${views}`)
            localStorage.setItem('publications-youtube',`${publications}`)
            followersUp = 0
        }
        return followersUp
} 

export default testSend