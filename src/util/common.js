/**
 * Created by zhengfeiling on 17/3/1.
 */
import {warn} from './warning'
export const getElem = (elem)=>{
    return typeof elem === 'string' ? document.querySelector(elem) : elem
}

export const getElemAll = (elem)=>{
    return typeof elem === 'string' ? document.querySelectorAll(elem) : elem
}

export const createElem = (elem)=>{
    return typeof elem === 'string' ? document.createElement(elem) : elem
}

export const isFunction = (obj)=>{
    return typeof obj === 'function'
}

export const addEvent = (elem, type, handler, options)=>{
    elem.addEventListener(type, handler, options)
}

export const removeEvent = (elem, type, handler)=>{
    elem.removeEventListener(type, handler)
}

export const createElemA = (parentEl,page,title)=>{
    if(parentEl && page && title){
        var oElemA = createElem('a');
        oElemA.href = "#" + page;
        oElemA.innerHTML = title;
        parentEl.appendChild(oElemA);
    }else{
        warn('warning:createElement error!')
    }
}

export const createCommonElem = (oElem,clientPage,index)=>{
    if (index == clientPage) {
        createElemA(oElem, index, index)
    }
    else {
        createElemA(oElem, index , '[' + index + ']')
    }
}

export const createEllipsis = (parentEl,title)=>{
    var oElemSpan = createElem('span');
    oElemSpan.innerHTML = title;
    parentEl.appendChild(oElemSpan);
}

export  const creatPageFirst = (oElem,options)=>{
    createElemA(oElem, 1 ,options.firstPageName)
    var previousPage = ''
    if (options.clientPage - 1 <= 0) {
        previousPage = 1;
    }
    else {
        previousPage = options.clientPage - 1;
    }
    createElemA(oElem, previousPage ,options.upName)
}

export const createPageLast = (oElem,options)=>{
    var nextPage = ''
    if (options.clientPage + 1 > options.maxPage) {
        nextPage = options.maxPage;
    }
    else {
        nextPage = options.clientPage + 1;
    }
    createElemA(oElem,nextPage,options.downName)
    createElemA(oElem,options.maxPage,options.lastPageName)
}
