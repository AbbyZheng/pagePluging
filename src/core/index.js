/**
 * Created by zhengfeiling on 17/3/1.
 */
import {regularStyle} from './regularStyle'
import {simpleStyle} from './simpleStyle'
import {allPageStyle} from './allPageStyle'

export const createView = (options)=>{
    if(options.paginationStyle == 'simple'){
        simpleStyle(options)
    }else if(options.paginationStyle == 'detail'){
        allPageStyle(options)
    }else{
        regularStyle(options)
    }
}