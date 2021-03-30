# hg-components

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](https://github.com/hlr423/hg-vue-package.git).
# my first hgButton plugin
webpack.config backups
````
  entry: './src/lib/index.js',
  output: {
    path: path.resolve(__dirname, './dist/js'),
    publicPath: '/dist/',
    filename: 'pagination.js',
    library: 'hgPagination',
    libraryTarget: 'umd',
    umdNamedDefine: true
  }
````
## vuejs2.0 封装通用组件，build生成js，并发布到npm
  ### 封装vue插件，项目初始化命令：
      vue init webpack-simple 项目名称，完成后，需要手动创建lib目录，lib是我们的插件目录。

## 插件目录 自己按照自己的需求创建和封装就行

## build配置文件 
  ### package.json 新增配置项
  ```
 "directories": {
     "dist": "dist"
   },
```
### webpack.config.js 
```
    entry: './src/lib/index.js',
    output: {
    path: path.resolve(__dirname, './dist/js'),
    publicPath: '/dist/',
    filename: 'hgButton.js',
    library: 'hgButton',
    libraryTarget: 'umd',
    umdNamedDefine: true
  }
  
   [1]     entry：修改打包的入口文件。
   [2]     output：修改输出文件到 dist/js下，生成文件名为hgButton.js。
   [3]     library：指定的就是你使用require时的模块名，这里便是require("pagination")。
   [4]     libraryTarget：会生成不同umd的代码,可以只是commonjs标准的，也可以是指amd标准的，也可以只是通过script标签引入的。
   [5]     umdNamedDefine：会对 UMD 的构建过程中的 AMD 模块进行命名。否则就使用匿名的 define
```

## build 打包vue 插件
 ### npm run build 后会生成压缩包
      dist->js->hgButton.js 和hgButton.map  文件


## pack打包配置文件
 ### 修改package.json 内容如下：
     "name": "hgButton"  
     "private": false,
     "main": "dist/js/hgButton.js",
     "files": [
        "dist",
        "src"
      ],
     "scripts": {
          "dev": "node build/dev-server.js",
          "start": "node build/dev-server.js",
          "build": "node build/build.js"
        }
     "repository": {
          "type": "git",
          "url": "git+https://github.com/hlr423/hg-vue-package.git"
     },
     "keywords": [
        "vue",
        "pagination",
        "ajax hgButton"
     ]  
     
     
     注：控制台输入 npm pack，会看到在当前工程目录下生成了一个文件 hgButton-0.1.0.tgz
## 项目测试
 ### 新增一个工程项目，命令：vue init webpack   项目名称 
      把打包好的 hgButton-0.1.0.tgz 这个压缩包放到测试目录下。
      在当前 vue-ptest 这个工程目录下，打开控制台，
      输入 npm install --save-dev E:hgButton-0.1.0.tgz ，安装刚才打包好的文件包。
      修改main.js文件，引入此包
 ```
   import Vue from 'vue'
   import App from './App'
   import router from './router'
   import hgButton from 'hgButton'
    
   Vue.config.productionTip = false;
   Vue.use(hgButton);
    
   new Vue({
     el: '#app',
     router,
     template: '<App/>',
     components: { App }
   });
 ```     
 ## 使用vue 封装的插件
  修改HelloWorld.vue文件，引入button组件
  ```
  <template>
    <div>
      <hgButton v-for="item in buttonParams" :key="item.id" :text="item.text" :design="item.design" :type="item.type" @click="item.onClick"></hgButton>
    </div>
  </template>
  
  <script>
  export default {
    name: 'hg-button',
    data () {
      return {
        buttonParams: [
          {
            id: 1,
            text: '提交',
            design: 'block',
            type: 'success',
            onClick: (val) => this.handClick(val)
          },
          {
            id: 2,
            text: '搜索',
            design: 'block',
            type: 'primary',
            onClick: (val) => this.handClick(val)
          },
          {
            id: 3,
            text: '导出',
            design: 'block',
            type: 'warning',
            onClick: (val) => this.handClick(val)
          }
        ]
      }
    },
    methods: {
      handClick () {
        console.log('提交')
      }
    }
  }
  </script>
  
  注：style,  可以自己设置，也可以用插件的颜色
```

## 发布到npm
  完成测试工作后我们就可以发布到npm了，
  注册个npm账号，在你要发布的项目目录执行npm login，输入账号密码和邮箱，
  然后npm publish就发布成功了
  
  
## 一个简单的vue单插件就完成了  
