const sendToLocalStorage = (countFollowers,publications, likesOrViews, nameMedia) => {
    let day = new Date().getDate()
        let followersUp = 0
        if(localStorage.getItem('current-day')){
            if(localStorage.getItem('current-day') === `${day}`){
                if(nameMedia === 'youtube'){
                    if(localStorage.getItem('followers-youtube') === `${countFollowers}`){
                        followersUp = 0
                    } else {
                        if(!localStorage.getItem('followers-youtube')){
                            localStorage.setItem('followers-youtube',`${countFollowers}`)
                        }
                        localStorage.setItem('publications-youtube',`${publications}`)
                        localStorage.setItem('views',`${likesOrViews}`)
                        followersUp = countFollowers - parseInt(localStorage.getItem('followers-youtube')) 
                    }
                } else {
                    if(localStorage.getItem('followers') === `${countFollowers}`){
                        followersUp = 0
                    } else {
                        followersUp = countFollowers - parseInt(localStorage.getItem('followers')) 
                    }
                }
            } else {
                localStorage.setItem('current-day', `${day}`)
                if(nameMedia === 'youtube'){
                    followersUp = countFollowers - parseInt(localStorage.getItem('followers-youtube'))
                    localStorage.setItem('followers-youtube',`${countFollowers}`)
                    localStorage.setItem('views',`${likesOrViews}`)
                    localStorage.setItem('publications-youtube',`${publications}`)
                } else {
                    followersUp = countFollowers - parseInt(localStorage.getItem('followers'))
                    localStorage.setItem('followers',`${countFollowers}`)
                    localStorage.setItem('likes',`${likesOrViews}`)
                    localStorage.setItem('publications',`${publications}`)
                }
            }
        } else {
            localStorage.setItem('current-day',`${day}`)
            if(nameMedia === 'youtube'){
                localStorage.setItem('followers-youtube',`${countFollowers}`)
                localStorage.setItem('views',`${likesOrViews}`)
                localStorage.setItem('publications-youtube',`${publications}`)
            } else {
                localStorage.setItem('followers',`${countFollowers}`)
                localStorage.setItem('likes',`${likesOrViews}`)
                localStorage.setItem('publications',`${publications}`)
            }
            followersUp = 0
        }
        return followersUp
} 

export default sendToLocalStorage