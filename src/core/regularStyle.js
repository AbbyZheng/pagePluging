/**
 * Created by zhengfeiling on 17/3/1.
 */
import {getElem, createElemA, createCommonElem} from '../util/common'
import {warn} from  '../util/warning'

export const regularStyle = (options)=>{
    let oElem = getElem(options.el)
    if (!oElem) {
        return warn("Warning : cannot find el " + options.el)
    }
    var maxPage =options.maxPage,
        valibalePage = options.num_valibale_page,
        clientPage = options.clientPage

    if (maxPage <= valibalePage) {
        for (var i = 1; i <= maxPage; i++) {
            createCommonElem(oElem,clientPage,i)
        }
    } else {
        createElemA(oElem, 1 ,options.firstPageName)
        var previousPage = ''
        if (clientPage - 1 <= 0) {
            previousPage = 1;
        }
        else {
            previousPage = clientPage - 1;
        }
        createElemA(oElem, previousPage ,options.upName)
        for (var i = 1; i <= valibalePage; i++) {
            var otherPage = clientPage - options.pageSpacing + i;
            if (clientPage == 1 || clientPage == 2) {
                if (clientPage == i) {
                    createElemA(oElem, i , i)
                }
                else {
                    createElemA(oElem, i , '['+i+']')
                }
            }
            else if (clientPage == maxPage || clientPage == maxPage - 1) {
                if (clientPage == maxPage - valibalePage + i) {
                    createElemA(oElem, maxPage - valibalePage + i , maxPage - valibalePage + i)
                }
                else {
                    createElemA(oElem, maxPage - valibalePage + i , '[' + (maxPage - valibalePage + i) + ']')
                }
            }
            else {
                if (i == options.pageSpacing) {
                    createElemA(oElem, otherPage , clientPage)
                }
                else {
                    createElemA(oElem, otherPage , '[' + otherPage + ']')
                }
            }
        }
        var nextPage = ''
        if (clientPage + 1 > maxPage) {
            nextPage = maxPage;
        }
        else {
            nextPage = clientPage + 1;
        }
        createElemA(oElem,nextPage,options.downName)
        createElemA(oElem,maxPage,options.lastPageName)
    }
}