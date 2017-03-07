/**
 * Created by zhengfeiling on 17/3/1.
 */
import {getElem, createElemA} from '../util/common'
import {warn} from  '../util/warning'

export const simpleStyle = (options)=>{
    let oElem = getElem(options.el)
    console.log(options)
    if (!oElem) {
        return warn("Warning : cannot find el " + options.el)
    }
    createElemA(oElem, 'up' , '上一页')
    createElemA(oElem, 'down' , '下一页')
}