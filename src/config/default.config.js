/**
 * Created by zhengfeiling on 17/3/1.
 */
export const defaultOptions = {
    el: 'body',//默认父元素
    clientPage: 1,//当前选中的页码
    maxPage: 10,//最大页码数
    paginationStyle: 'regular',//regular || simple || detail三个取值,默认regular,
    firstPageName:'首页',
    lastPageName:'尾页',
    upName:'上一页',
    downName:'下一页',
    spaceSymbol:'...',
    hasSpaceSymbol:false,
    pageSpacing:3,//num_valibale_page中间数
    num_valibale_page: 5,//设置多少页后才显示首页、尾页、下一页、上一页，默认大于等于5页显示，小于5条不显示
}