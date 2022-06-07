# 声明
此库源于https://github.com/zzcwzhang/remax-chart
由于原本仓库作者一直没有更新,但个人有需要新的版本,特此 fork.

也会对现有内容进行一部分少量改造.


# 改动内容
本质上ECharts是有一个官方实现的小程序版本的库的,地址为:[echarts-for-weixin]('https://github.com/ecomfe/echarts-for-weixin#%E6%9A%82%E4%B8%8D%E6%94%AF%E6%8C%81%E7%9A%84%E5%8A%9F%E8%83%BD'),但这个库仅支持原生微信的编写方式.当前仓库只是一个声明仓库.用于兼容remax与echarts的调用.

本次改动是分离了强依赖,也就是该仓库不会强制发包到NPM仓. 
另外当前设计不依赖于具体的remax版本.echart也在尽可能的向官方最新版对齐.

初衷是为了兼容echarts的图表可定制性(官网可以根据选择生成只包含某几个chart的JS).
官方地址为:[echarts.apache.org]('https://echarts.apache.org/zh/builder.html')

因为小程序的特殊性,依赖组件的大小是一个强需求,特此采取该方案.

# 使用方式
1. 进入[官网]('https://echarts.apache.org/zh/builder.html')定制自己想要的图表,目前支持的最高版本为5.3.2;
2. 安装echarts的types(目前兼容的是4.6.4)
   > npm install @types/echarts@4.6.4 --save-dev
3. 启用代码压缩,点击下载,等待定制的JS下载完毕;
4. 将本仓库的echart4Remax整个文件夹复制到您的项目目录的公共组件目录下;
5. 将您下载好的JS文件,改名成为echarts.js,存放于xxx/echart4Remax/echarts.js位置;

上述4步完成后,您就可以使用您在官方定制的完整功能了.

### echarts的使用教程
echarts官方拥有完整的[使用教程]('https://echarts.apache.org/zh/tutorial.html'),推荐直接学习即可.    
当前的支持方式未进行任何侵入式修改.完整遵循官方操作逻辑.    

# 使用样例
``` ts
import RemaxChart from '@/您的路径';
import * as React from 'react';
import { View } from 'remax/wechat';
import styles from './index.css';
const MOCK_OPTION = {
  tooltip: {
    show: true,
    confine: true,
    renderMode: 'richText',
    triggerOn: 'mousemove',
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
    },
  ],
}
export default () => {
  return (
    <View className={styles.app}>asdada
      <EChart4Remax option={MOCK_OPTION as any} height="100vh"></EChart4Remax>
    </View>
  );
};
```


# 可能存在的问题
由于各种小程序只有国内存在,当前类型声明等内容完全不考虑多语言,需要多语言支持者请自己考虑在组装data时处理.

另外,目前只考虑了wx与ali,头条的仅仅是声明,***理论***上是可以的.


因为这个仓库是由于个人项目遇到chart组件需求创建,特此可能存在部分types定义不完整的情况,如果您发现了这些情况,欢迎随时提出[issue]('https://github.com/BenLampson/echarts-for-remax/issues').我会尽快进行修复.