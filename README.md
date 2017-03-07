分页插件


``` bash
# install dependencies
npm install

# dist for production with minification
npm run build

# dist文件夹为打包生成文件夹

#index.html is a demo ,please run this command 'npm run build' first

#use:
let page = new MyPagination({
    el:'#demo'//绑定的元素名
});
page.initPagination(cb)//初始化方法,传入回调函数获取当前页码

```
