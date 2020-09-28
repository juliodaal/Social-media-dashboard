const sendToLocalStorage = (countFollowers,publications, likes) => {
    let day = new Date().getDate()
        let followersUp = null;
        if(localStorage.getItem('current-day')){
            if(localStorage.getItem('current-day') === `${day}`){
                if(localStorage.getItem('followers') === `${countFollowers}`){
                    followersUp = 0
                } else {
                    followersUp = countFollowers - parseInt(localStorage.getItem('followers')) 
                }
            } else {
                localStorage.setItem('current-day', `${day}`)
                followersUp = countFollowers - parseInt(localStorage.getItem('followers'))
                localStorage.setItem('followers',`${countFollowers}`)
                localStorage.setItem('likes',`${likes}`)
                localStorage.setItem('publications',`${publications}`)
            }
        } else {
            localStorage.setItem('current-day',`${day}`)
            localStorage.setItem('followers',`${countFollowers}`)
            localStorage.setItem('likes',`${likes}`)
            localStorage.setItem('publications',`${publications}`)
            followersUp = 0
        }
        return followersUp
} 

export default sendToLocalStorage