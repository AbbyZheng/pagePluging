/**
 * Created by zhengfeiling on 17/3/1.
 */
export const warn = (msg)=>{
    return typeof console !== 'undefined' ? console.log(`[pagenation warn]:${msg}`) : ''
}