/**
 * Created by zhengfeiling on 17/2/28.
 * my-pagination.js v1.1.1
 * (c) 2017 Abby Zheng
 */
import {defaultOptions} from './config/default.config'
import {createView} from './core/index'
import {isFunction,getElem,getElemAll,addEvent} from './util/common'

//es6 import调用
export default MyPagination = class Pagination {
    constructor(opts){
        this.options = Object.assign(defaultOptions,opts);
        this.clickEvent = this.clickEvent.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.cb = null;
    }
    initPagination(cb){
        createView(this.options)
        this.cb = cb
        this.clickEvent()
    }
    clickEvent(){
        let oElem = this.options.el + ' a';
        var aAi = getElemAll(oElem);
        for( var i=0;i<aAi.length;i++){
            addEvent(aAi[i],'click',this.handleClick)
        }
        console.log(this.options.clientPage)
        typeof this.cb === 'function' ? this.cb(this.options.clientPage,null) : ''
    }
    handleClick(e){
        let oParent = getElem(this.options.el);
        let oEvent = event || e;
        let nowNum = oEvent.target.getAttribute('id').substring(1),
            clientPage
        if(nowNum == 'up' || nowNum == 'down'){
            clientPage = nowNum
        }else{
            clientPage = parseInt(nowNum)
        }
        oParent.innerHTML="";
        options = Object.assign(this.options,{clientPage:clientPage})
        createView(options)
        this.clickEvent()
    }
}

//处理amd cmd 和页面直接引用
if(typeof exports === 'object' && typeof module !== 'undefined'){
    module.exports = MyPagination
}else if(typeof define === 'function' && define.amd){
    define(MyPagination)
}else{
    window.MyPagination = MyPagination
}