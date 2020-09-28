export const loading = (propsLoaders,nameLoader) => {
    propsLoaders.forEach(propsLoader => {
        propsLoader.loader === true ? propsLoader.refLoader.current.classList.add(nameLoader) : propsLoader.refLoader.current.classList.remove(nameLoader)
    });
}
export const showDataFollowers = (propElement,property) => {
    if(propElement.error == null){ return propElement.[property] } else { return ':(' }
}
export const winOrLostFollowers = (refSocialMedia,domElement) => {
    refSocialMedia >= 0 ? winFollowers(domElement) : lostFollowers(domElement)
}
export const winFollowers = (domElement) => {
    domElement.current.classList.remove('lost')
    domElement.current.classList.add('win')
}
export const lostFollowers = (domElement) => {
    domElement.current.classList.add('lost')
    domElement.current.classList.remove('win')
}
export const calcPercent = (prop,localItem)  => {
    if(prop == ':('){return prop}
    if(prop == 0 && localItem == 0){return '0.00'} 
    let value = prop - localItem
    let result = (value * 100) / prop
    return result.toFixed(2)
}