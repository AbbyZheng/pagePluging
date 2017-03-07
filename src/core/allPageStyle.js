/**
 * Created by zhengfeiling on 17/3/3.
 */
import {getElem, createCommonElem,creatPageFirst,createPageLast,createEllipsis} from '../util/common'
import {warn} from  '../util/warning'

export const allPageStyle = (options)=>{
    let oElem = getElem(options.el)
    if (!oElem) {
        return warn("Warning : cannot find el " + options.el)
    }
    var maxPage = options.maxPage,
        valibalePage = options.num_valibale_page,
        clientPage = options.clientPage
    if (maxPage <= valibalePage) {
        for (var i = 1; i <= maxPage; i++) {
            createCommonElem(oElem,clientPage,i)
        }
    } else{
        creatPageFirst(oElem, options)
        let num = parseInt(valibalePage/2)
        if(maxPage-clientPage+1<=valibalePage){
            for(let i=maxPage-valibalePage+1;i<=maxPage;i++){
                createCommonElem(oElem,clientPage,i)
            }
        }else{
            if(1 < num < clientPage){
                for(let i=clientPage;i<clientPage+num;i++){
                    createCommonElem(oElem,clientPage,i)
                }
            }else{
                for(let i=1;i<=num;i++){
                    createCommonElem(oElem,clientPage,i)
                }
            }
            createEllipsis(oElem, '...')
            if(valibalePage%2 == 0) {
                for (let i = maxPage - num + 1; i <= maxPage; i++) {
                    createCommonElem(oElem, clientPage, i)
                }
            }else{
                for (let i = maxPage - num; i <= maxPage; i++) {
                    createCommonElem(oElem, clientPage, i)
                }
            }
        }
        createPageLast(oElem, options)
    }
}