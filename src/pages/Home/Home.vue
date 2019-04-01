<template>
  <div id="homeController">
    <header>
      <!--头部logo，搜索，登录-->
      <div class="header-top">
        <a href="http://m.you.163.com/" class="logo"></a>
        <div class="search">
          <i class="iconfont icon-search"></i>
          <span>搜索商品，共22111款好物</span>
        </div>
        <button class="btn">登录</button>
      </div>

      <!--头部导航-->
      <div class="nav">
        <ul class="navList" v-show="!isShow">
          <li class="active">
            <a href="javascript:;">推荐</a>
          </li>
          <li>
            <a href="javascript:;">居家生活</a>
          </li>
          <li>
            <a href="javascript:;">服饰鞋包</a>
          </li>
          <li>
            <a href="javascript:;">美食酒水</a>
          </li>
          <li>
            <a href="javascript:;">个护清洁</a>
          </li>
          <li>
            <a href="javascript:;">母婴亲子</a>
          </li>
          <li>
            <a href="javascript:;">运动旅行</a>
          </li>
          <li>
            <a href="javascript:;">数码家电</a>
          </li>
          <li>
            <a href="javascript:;">全球特色</a>
          </li>
        </ul>
      </div>
      <div class="taggleWaper" v-if="isShow">
        <span>全部频道</span>
        <div class="mask" @click="isShow = false"></div>
      </div>
      <!--下拉菜单-->
      <div class="menu" @click="handleMenu">
        <div class="menu-icon">
          <i class="iconfont icon-icon-"></i>
        </div>
      </div>
      <div class="switchMenu" v-if="isShow">
        <ul >
          <li class="on"><a href="javascript:;">推荐</a></li>
          <li><a href="javascript:;">居家生活</a></li>
          <li><a href="javascript:;">服饰鞋包</a></li>
          <li><a href="javascript:;">美食酒水</a></li>
          <li><a href="javascript:;">个护清理</a></li>
          <li><a href="javascript:;">母婴亲子</a></li>
          <li><a href="javascript:;">运动旅行</a></li>
          <li><a href="javascript:;">数码家电</a></li>
          <li><a href="javascript:;">全球特色</a></li>
        </ul>
      </div>
    </header>

    <!--轮播图-->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <a href="javascript:;">
            <img src="https://yanxuan.nosdn.127.net/f00ff1a6f9e244efe43c77ee8331318f.jpg?imageView&amp;quality=75&amp;thumbnail=750x0">
          </a>
        </div>
        <div class="swiper-slide">
          <a href="javascript:;">
            <img src="https://yanxuan.nosdn.127.net/3c6358daba8bca7169b0dd2a49df188c.jpg?imageView&amp;quality=75&amp;thumbnail=750x0">
          </a>
        </div>
        <div class="swiper-slide">
          <a href="javascript:;">
            <img src="https://yanxuan.nosdn.127.net/f00ff1a6f9e244efe43c77ee8331318f.jpg?imageView&amp;quality=75&amp;thumbnail=750x0">
          </a>
        </div>
        <div class="swiper-slide">
          <a href="javascript:;">
            <img src="https://yanxuan.nosdn.127.net/5e658f72294572822b65e09113ac4311.jpg?imageView&amp;quality=75&amp;thumbnail=750x0">          </a>
        </div>
        <div class="swiper-slide">
          <a href="javascript:;">
            <img src="https://yanxuan.nosdn.127.net/8c06fc58e849da6cbaf2838d27f072f3.jpeg?imageView&amp;quality=75&amp;thumbnail=750x0">          </a>
        </div>
        <div class="swiper-slide">
          <a href="javascript:;">
            <img src="https://yanxuan.nosdn.127.net/9a98a10f260bcde62951a36ac43b2f92.jpg?imageView&amp;quality=75&amp;thumbnail=750x0">
          </a>
        </div>
        <div class="swiper-slide">
          <a href="javascript:;">
            <img src="https://yanxuan.nosdn.127.net/3c6358daba8bca7169b0dd2a49df188c.jpg?imageView&amp;quality=75&amp;thumbnail=750x0">
          </a>
        </div>
        <div class="swiper-slide">
          <a href="javascript:;">
            <img src="https://yanxuan.nosdn.127.net/f00ff1a6f9e244efe43c77ee8331318f.jpg?imageView&amp;quality=75&amp;thumbnail=750x0">
          </a>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>

    <!--服务-->
    <div class="service">
      <ul class="serList">
        <li>
          <a href="javascript:;">
            <i class="iconfont icon-wangyi"></i>
            <span>网易自营品牌</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <i class="iconfont icon-anquan"></i>
            <span>30天无忧退货</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <i class="iconfont icon-qian"></i>
            <span>48小时快速退款</span>
          </a>
        </li>
      </ul>
    </div>

    <!--导航-->
    <div class="home-nav">
      <ul class="home-nav-list">
        <li>
          <a href="javascript:;">
            <img src="./images/01.png" alt="">
            <span>居家生活</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img src="./images/02.png" alt="">
            <span>服饰鞋包</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img src="./images/03.png" alt="">
            <span>美食酒水</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img src="./images/04.png" alt="">
            <span>个护清理</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img src="./images/05.png" alt="">
            <span>限时购</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img src="./images/06.png" alt="">
            <span>母婴亲子</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img src="./images/07.png" alt="">
            <span>运动旅行</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img src="./images/08.png" alt="">
            <span>数码家电</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img src="./images/09.png" alt="">
            <span>全球特色</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img src="./images/10.png" alt="">
            <span>超级会员</span>
          </a>
        </li>
      </ul>
    </div>

    <!--活动-->
    <div class="wyyg">
      <a href="javascript:;">
        <img src="./images/wyyg.png" alt="">
      </a>
    </div>

    <!--推荐-->
    <div class="recommend">
      <div class="item">
        <a href="javascript:;">
          <div>
            <p>春茶尝鲜季</p>
            <span>预售好价75折</span>
          </div>
          <div>
            <img src="http://yanxuan.nosdn.127.net/ad072f3fc7f677671b8e8070c9d87853.png?imageView&amp;thumbnail=150x150&amp;quality=75">
            <img src="http://yanxuan.nosdn.127.net/55d8d878ee00b7a59c1b45f740087c93.png?imageView&amp;thumbnail=150x150&amp;quality=75">
          </div>
        </a>
      </div>
      <div class="item">
        <a href="javascript:;">
          <p>春茶尝鲜季</p>
          <span>预售好价75折</span>
          <div>
            <img src="http://yanxuan.nosdn.127.net/ad072f3fc7f677671b8e8070c9d87853.png?imageView&amp;thumbnail=150x150&amp;quality=75">
            <img src="http://yanxuan.nosdn.127.net/55d8d878ee00b7a59c1b45f740087c93.png?imageView&amp;thumbnail=150x150&amp;quality=75">
          </div>
        </a>
      </div>
      <div class="item">
        <a href="javascript:;">
          <p>春茶尝鲜季</p>
          <span>预售好价75折</span>
          <div>
            <img src="http://yanxuan.nosdn.127.net/ad072f3fc7f677671b8e8070c9d87853.png?imageView&amp;thumbnail=150x150&amp;quality=75">
            <img src="http://yanxuan.nosdn.127.net/55d8d878ee00b7a59c1b45f740087c93.png?imageView&amp;thumbnail=150x150&amp;quality=75">
          </div>
        </a>
      </div>
      <div class="item">
        <a href="javascript:;">
          <p>春茶尝鲜季</p>
          <span>预售好价75折</span>
          <div>
            <img src="http://yanxuan.nosdn.127.net/ad072f3fc7f677671b8e8070c9d87853.png?imageView&amp;thumbnail=150x150&amp;quality=75">
            <img src="http://yanxuan.nosdn.127.net/55d8d878ee00b7a59c1b45f740087c93.png?imageView&amp;thumbnail=150x150&amp;quality=75">
          </div>
        </a>
      </div>
    </div>

    <!--私人推荐-->


    <!--限时购-->
    <div class="limitTime">
      <div class="limitTitle">
        <div class="leftTitle">
          <span class="xsg">限时购</span>
          <span class="time">00</span>
          <span >:</span>
          <span class="time">12</span>
          <span >:</span>
          <span class="time">01</span>
        </div>
        <span>更多<i class="iconfont icon-jiantou"></i></span>
      </div>
      <ul class="timeList">
        <li>
          <div class="timeImg">
            <img src="http://yanxuan.nosdn.127.net/72d60d5b57b32a23c45b6329e0afb26c.png?imageView&amp;thumbnail=216x216&amp;quality=75" class="img" data-reactid=".0.5.2.1.$0.0.0">
          </div>
          <div class="timePrice">
            <span class="sellPrice">￥239</span>
            <div class="prePrice">
              <span>￥400</span>
              <div class="timeLine"></div>
            </div>
          </div>
        </li>
        <li>
          <div class="timeImg">
            <img src="http://yanxuan.nosdn.127.net/089a4a71aa95799d89acd3b3cfc4144c.png?imageView&amp;thumbnail=216x216&amp;quality=75" class="img" data-reactid=".0.5.2.1.$1.0.0">
          </div>
          <div class="timePrice">
            <span class="sellPrice">￥239</span>
            <div class="prePrice">
              <span>￥400</span>
              <div class="timeLine"></div>
            </div>
          </div>
        </li>
        <li>
          <div class="timeImg">
            <img src="http://yanxuan.nosdn.127.net/7a4d2ae6490b40f2782d268472749993.png?imageView&amp;thumbnail=216x216&amp;quality=75" class="img" data-reactid=".0.5.2.1.$2.0.0">
          </div>
          <div class="timePrice">
            <span class="sellPrice">￥239</span>
            <div class="prePrice">
              <span>￥400</span>
              <div class="timeLine"></div>
            </div>
          </div>
        </li>
        <li>
          <div class="timeImg">
            <img src="http://yanxuan.nosdn.127.net/6f1fb38e32257756969042173c290053.png?imageView&amp;thumbnail=216x216&amp;quality=75" class="img" data-reactid=".0.5.2.1.$3.0.0">
          </div>
          <div class="timePrice">
            <span class="sellPrice">￥239</span>
            <div class="prePrice">
              <span>￥400</span>
              <div class="timeLine"></div>
            </div>
          </div>
        </li>
        <li>
          <div class="timeImg">
            <img src="http://yanxuan.nosdn.127.net/650cb915f83ae66fbdd6aea14030df12.png?imageView&amp;thumbnail=216x216&amp;quality=75" class="img" data-reactid=".0.5.2.1.$4.0.0">          </div>
          <div class="timePrice">
            <span class="sellPrice">￥239</span>
            <div class="prePrice">
              <span>￥400</span>
              <div class="timeLine"></div>
            </div>
          </div>
        </li>
        <li>
          <div class="timeImg">
            <img src="http://yanxuan.nosdn.127.net/67744653917b96ba89578882b83944a2.png?imageView&amp;thumbnail=216x216&amp;quality=75" class="img" data-reactid=".0.5.2.1.$5.0.0">          </div>
          <div class="timePrice">
            <span class="sellPrice">￥239</span>
            <div class="prePrice">
              <span>￥400</span>
              <div class="timeLine"></div>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <!--新品首发-->
    <div class="newGoods">
      <div class="newTitle">
        <span>新品首发</span>
        <span>更多<i class="iconfont icon-jiantou"></i></span>
      </div>
      <ul class="newList">
        <li>
          <div class="newImg">
            <img data-original="http://yanxuan.nosdn.127.net/55d8d878ee00b7a59c1b45f740087c93.png?imageView&amp;quality=65&amp;thumbnail=330x330" data-src="http://yanxuan.nosdn.127.net/55d8d878ee00b7a59c1b45f740087c93.png?imageView&amp;quality=65&amp;thumbnail=330x330" class="swiper-lazy" data-reactid=".0.5.3.1.0.$0.0.0.0.0.0" src="http://yanxuan.nosdn.127.net/55d8d878ee00b7a59c1b45f740087c93.png?imageView&amp;quality=65&amp;thumbnail=330x330" style="display: block;">          </div>
          <div class="goodName">
            <span class="ellipsis">2019新茶，明前特级，清新怡人&nbsp;</span>
            <span class="price">￥268</span>
          </div>
        </li>
        <li>
          <div class="newImg">
            <img data-original="http://yanxuan.nosdn.127.net/7a04f29031ce5b7aabb14c22c6ac327d.png?imageView&amp;quality=65&amp;thumbnail=330x330" data-src="http://yanxuan.nosdn.127.net/7a04f29031ce5b7aabb14c22c6ac327d.png?imageView&amp;quality=65&amp;thumbnail=330x330" class="swiper-lazy" data-reactid=".0.5.3.1.0.$1.0.0.0.0.0" src="http://yanxuan.nosdn.127.net/7a04f29031ce5b7aabb14c22c6ac327d.png?imageView&amp;quality=65&amp;thumbnail=330x330" style="display: block;">          </div>
          <div class="goodName">
            <span>半干鲜面，筋道好味&nbsp; 4盒装</span>
            <span class="price">￥74.9</span>
          </div>
          <div class="label">
          </div>
        </li>
        <li>
          <div class="newImg">
            <img data-original="http://yanxuan.nosdn.127.net/215bab0a359cda90cce19ea074a06d74.png?imageView&amp;quality=65&amp;thumbnail=330x330" data-src="http://yanxuan.nosdn.127.net/215bab0a359cda90cce19ea074a06d74.png?imageView&amp;quality=65&amp;thumbnail=330x330" class="swiper-lazy" data-reactid=".0.5.3.1.0.$2.0.0.0.0.0" src="http://yanxuan.nosdn.127.net/215bab0a359cda90cce19ea074a06d74.png?imageView&amp;quality=65&amp;thumbnail=330x330" style="display: block;">          </div>
          <div class="goodName">
            <span class="ellipsis">男式全棉干爽型宽松短袖T恤男式全棉干爽型宽松短袖T恤...&nbsp;</span>
            <span class="price">￥79</span>
          </div>
        </li>
        <li>
          <div class="newImg">
            <img data-original="http://yanxuan.nosdn.127.net/e6b492900b7c7e5b03d5a2fdca02c084.png?imageView&amp;quality=65&amp;thumbnail=330x330" data-src="http://yanxuan.nosdn.127.net/e6b492900b7c7e5b03d5a2fdca02c084.png?imageView&amp;quality=65&amp;thumbnail=330x330" class="swiper-lazy" data-reactid=".0.5.3.1.0.$3.0.0.0.0.0" src="http://yanxuan.nosdn.127.net/e6b492900b7c7e5b03d5a2fdca02c084.png?imageView&amp;quality=65&amp;thumbnail=330x330" style="display: block;">
          </div>
          <div class="goodName">
            <span>牛漆皮 圆头女士粗跟鞋&nbsp;</span>
            <span class="price">￥299</span>
          </div>
        </li>
        <li>
          <div class="newImg">
            <img data-original="http://yanxuan.nosdn.127.net/6734165bacee55d2e031b8227e8c522f.png?imageView&amp;quality=65&amp;thumbnail=330x330" data-src="http://yanxuan.nosdn.127.net/6734165bacee55d2e031b8227e8c522f.png?imageView&amp;quality=65&amp;thumbnail=330x330" class="swiper-lazy" data-reactid=".0.5.3.1.0.$4.0.0.0.0.0" src="http://yanxuan.nosdn.127.net/6734165bacee55d2e031b8227e8c522f.png?imageView&amp;quality=65&amp;thumbnail=330x330" style="display: block;">
          </div>
          <div class="goodName">
            <span>男式经典三防商务休闲裤&nbsp;</span>
            <span class="price">￥199</span>
          </div>
        </li>
        <li>
          <div class="newImg">
            <img data-original="http://yanxuan.nosdn.127.net/b1f7d3096d12d0e4f9e0bbc7232e9295.png?imageView&amp;quality=65&amp;thumbnail=330x330" data-src="http://yanxuan.nosdn.127.net/b1f7d3096d12d0e4f9e0bbc7232e9295.png?imageView&amp;quality=65&amp;thumbnail=330x330" class="swiper-lazy" data-reactid=".0.5.3.1.0.$5.0.0.0.0.0" src="http://yanxuan.nosdn.127.net/b1f7d3096d12d0e4f9e0bbc7232e9295.png?imageView&amp;quality=65&amp;thumbnail=330x330" style="display: block;">
          </div>
          <div class="goodName">
            <span>日式水洗工艺，慵懒自然宜裸睡&nbsp;</span>
            <span class="price">￥299</span>
          </div>
        </li>
      </ul>
    </div>

    <!--人气推荐-->
    <div class="personTro">
      <div class="personTroTitle">
        <span>人气推荐</span>
        <span>更多<i class="iconfont icon-jiantou"></i></span>
      </div>
      <div class="personTroMiddle">
        <div class="middleLeft">
          <img data-original="http://yanxuan.nosdn.127.net/1b1f67998e1451b79530444745586833.png?imageView&amp;quality=65&amp;thumbnail=280x280" data-src="http://yanxuan.nosdn.127.net/1b1f67998e1451b79530444745586833.png?imageView&amp;quality=65&amp;thumbnail=280x280" class="swiper-lazy" data-reactid=".0.5.4.1.0.0.0" src="http://yanxuan.nosdn.127.net/1b1f67998e1451b79530444745586833.png?imageView&amp;quality=65&amp;thumbnail=280x280" style="display: inline;">
        </div>
        <div class="middleWord">
          <div class="secondRow">冬夏两用 护脊椰棕弹簧床垫</div>
          <div class="threeRow">硬度偏好者优选</div>
          <div class="fourRow"><span>￥2099</span></div>
        </div>
      </div>
      <ul class="personTroList">
        <li>
          <div class="pictueImg">
            <img src="http://yanxuan.nosdn.127.net/5a35cc42a23794c2f0def85aa079172f.png?imageView&quality=65&thumbnail=330x330" alt="">
          </div>
          <div class="goodName">
            <span>网易智造N520除螨吸尘器&nbsp;</span>
            <span class="price">￥449</span>
          </div>
          <div class="label">
            <p>爆品</p>
            <p>限时购</p>
          </div>
        </li>
        <li>
          <div class="pictueImg">
            <img src="http://yanxuan.nosdn.127.net/5a35cc42a23794c2f0def85aa079172f.png?imageView&quality=65&thumbnail=330x330" alt="">
          </div>
          <div class="goodName">
            <span>网易智造N520除螨吸尘器&nbsp;</span>
            <span class="price">￥449</span>
          </div>
        </li>
        <li>
          <div class="pictueImg">
            <img src="http://yanxuan.nosdn.127.net/5a35cc42a23794c2f0def85aa079172f.png?imageView&quality=65&thumbnail=330x330" alt="">
          </div>
          <div class="goodName">
            <span>网易智造N520除螨吸尘器&nbsp;</span>
            <span class="price">￥449</span>
          </div>
          <div class="label">
            <p>限时购</p>
          </div>
        </li>
      </ul>
    </div>

    <!--类目热销榜-->
    <div class="rankingList">
      <div class="rankingtitle">
        <span>类目热销榜</span>
      </div>
      <div class="lists">
        <ul class="topList">
          <li>
            <div class="word">
              <span>热销榜</span>
              <div class="blackLine"></div>
            </div>
            <img data-original="http://yanxuan.nosdn.127.net/9a33f08a3b0f5c06fdf4c586d51b2f7c.png?imageView&amp;quality=65&amp;thumbnail=200x200" data-src="http://yanxuan.nosdn.127.net/9a33f08a3b0f5c06fdf4c586d51b2f7c.png?imageView&amp;quality=65&amp;thumbnail=200x200" class="swiper-lazy" data-reactid=".0.5.5.1.0.$0.1.0.0" src="http://yanxuan.nosdn.127.net/9a33f08a3b0f5c06fdf4c586d51b2f7c.png?imageView&amp;quality=65&amp;thumbnail=200x200" style="display: inline;">
          </li>
          <li>
            <div class="word">
              <span>好评榜</span>
              <div class="blackLine"></div>
            </div>
            <img data-original="http://yanxuan.nosdn.127.net/1fa535e25330987297a27e63c27db2e6.png?imageView&amp;quality=65&amp;thumbnail=200x200" data-src="http://yanxuan.nosdn.127.net/1fa535e25330987297a27e63c27db2e6.png?imageView&amp;quality=65&amp;thumbnail=200x200" class="swiper-lazy" data-reactid=".0.5.5.1.0.$1.1.0.0" src="http://yanxuan.nosdn.127.net/1fa535e25330987297a27e63c27db2e6.png?imageView&amp;quality=65&amp;thumbnail=200x200" style="display: inline;">
          </li>
        </ul>
        <ul class="bottomList">
          <li>
            <div class="listTitle">居家生活榜</div>
            <img data-original="http://yanxuan.nosdn.127.net/6ae6ced6f3fd805d9e00b4f29a34efd3.png?imageView&amp;quality=65&amp;thumbnail=200x200" data-src="http://yanxuan.nosdn.127.net/6ae6ced6f3fd805d9e00b4f29a34efd3.png?imageView&amp;quality=65&amp;thumbnail=200x200" class="swiper-lazy" data-reactid=".0.5.5.1.1.$0.1.0.0" src="http://yanxuan.nosdn.127.net/6ae6ced6f3fd805d9e00b4f29a34efd3.png?imageView&amp;quality=65&amp;thumbnail=200x200" style="display: inline;">
          </li>
          <li>
            <div class="listTitle">服饰鞋包榜</div>
            <img data-original="http://yanxuan.nosdn.127.net/d84c728c164a77a8c5f0ca153d21fe69.png?imageView&amp;quality=65&amp;thumbnail=200x200" data-src="http://yanxuan.nosdn.127.net/d84c728c164a77a8c5f0ca153d21fe69.png?imageView&amp;quality=65&amp;thumbnail=200x200" class="swiper-lazy" data-reactid=".0.5.5.1.1.$1.1.0.0" src="http://yanxuan.nosdn.127.net/d84c728c164a77a8c5f0ca153d21fe69.png?imageView&amp;quality=65&amp;thumbnail=200x200" style="display: inline;">
          </li>
          <li>
            <div class="listTitle">美食酒水榜</div>
            <img data-original="http://yanxuan.nosdn.127.net/59eb7e52ab114c894a8179bc2991122b.png?imageView&amp;quality=65&amp;thumbnail=200x200" data-src="http://yanxuan.nosdn.127.net/59eb7e52ab114c894a8179bc2991122b.png?imageView&amp;quality=65&amp;thumbnail=200x200" class="swiper-lazy" data-reactid=".0.5.5.1.1.$2.1.0.0" src="http://yanxuan.nosdn.127.net/59eb7e52ab114c894a8179bc2991122b.png?imageView&amp;quality=65&amp;thumbnail=200x200" style="display: inline;">
          </li>
          <li>
            <div class="listTitle">数码家电榜</div>
            <img data-original="http://yanxuan.nosdn.127.net/838f3d6c83de39019f1a127a3a11f499.png?imageView&amp;quality=65&amp;thumbnail=200x200" data-src="http://yanxuan.nosdn.127.net/838f3d6c83de39019f1a127a3a11f499.png?imageView&amp;quality=65&amp;thumbnail=200x200" class="swiper-lazy" data-reactid=".0.5.5.1.1.$3.1.0.0" src="http://yanxuan.nosdn.127.net/838f3d6c83de39019f1a127a3a11f499.png?imageView&amp;quality=65&amp;thumbnail=200x200" style="display: inline;">          </li>
          <li>
            <div class="listTitle">个护清洁榜</div>
            <img data-original="http://yanxuan.nosdn.127.net/ae7f88bdae80b15ac656b0c76f356179.jpg?imageView&amp;quality=65&amp;thumbnail=200x200" data-src="http://yanxuan.nosdn.127.net/ae7f88bdae80b15ac656b0c76f356179.jpg?imageView&amp;quality=65&amp;thumbnail=200x200" class="swiper-lazy" data-reactid=".0.5.5.1.1.$4.1.0.0" src="http://yanxuan.nosdn.127.net/ae7f88bdae80b15ac656b0c76f356179.jpg?imageView&amp;quality=65&amp;thumbnail=200x200" style="display: inline;">
          </li>
          <li>
            <div class="listTitle">母婴亲子榜</div>
            <img data-original="http://yanxuan.nosdn.127.net/873505d4b94744861ba243e321868530.png?imageView&amp;quality=65&amp;thumbnail=200x200" data-src="http://yanxuan.nosdn.127.net/873505d4b94744861ba243e321868530.png?imageView&amp;quality=65&amp;thumbnail=200x200" class="swiper-lazy" data-reactid=".0.5.5.1.1.$5.1.0.0" src="http://yanxuan.nosdn.127.net/873505d4b94744861ba243e321868530.png?imageView&amp;quality=65&amp;thumbnail=200x200" style="display: inline;">
          </li>
          <li>
            <div class="listTitle">运动旅行榜</div>
            <img data-original="http://yanxuan.nosdn.127.net/83e9f1b99b484885f88b5c5443f87cec.png?imageView&amp;quality=65&amp;thumbnail=200x200" data-src="http://yanxuan.nosdn.127.net/83e9f1b99b484885f88b5c5443f87cec.png?imageView&amp;quality=65&amp;thumbnail=200x200" class="swiper-lazy" data-reactid=".0.5.5.1.1.$6.1.0.0" src="http://yanxuan.nosdn.127.net/83e9f1b99b484885f88b5c5443f87cec.png?imageView&amp;quality=65&amp;thumbnail=200x200" style="display: inline;">
          </li>
          <li>
            <div class="listTitle">全球特色榜</div>
            <img data-original="http://yanxuan.nosdn.127.net/82de8fdea1c8bba21b26099612ff5605.png?imageView&amp;quality=65&amp;thumbnail=200x200" data-src="http://yanxuan.nosdn.127.net/82de8fdea1c8bba21b26099612ff5605.png?imageView&amp;quality=65&amp;thumbnail=200x200" class="swiper-lazy" data-reactid=".0.5.5.1.1.$7.1.0.0" src="http://yanxuan.nosdn.127.net/82de8fdea1c8bba21b26099612ff5605.png?imageView&amp;quality=65&amp;thumbnail=200x200" style="display: inline;">
          </li>
        </ul>
      </div>
    </div>

    <!--品牌商直供-->
    <div class="brand">
      <div class="brandTitle">
        <span>品牌制造商直供</span>
        <span>更多<i class="iconfont icon-jiantou"></i></span>
      </div>
      <ul class="brandList">
        <li>
          <img src="http://yanxuan.nosdn.127.net/74e2ea8f81004d0a60f90fc8e4649058.png?imageView&thumbnail=343y260&enlarge=1" alt="">
          <div class="brandWord">
            <h4>Nine West制造商</h4>
            <div class="upNew">
              <span>9.9元起</span>
              <span class="new">上新</span>
            </div>
          </div>
        </li>
        <li>
          <img src="http://yanxuan.nosdn.127.net/c097be14110f769d58245cdad73e15c3.png?imageView&thumbnail=343y260&enlarge=1" alt="">
          <div class="brandWord">
            <h4>海外制造商</h4>
            <div class="upNew">
              <span>9.9元起</span>
              <span class="new">上新</span>
            </div>
          </div>
        </li>
        <li>
          <img src="http://yanxuan.nosdn.127.net/66a23d776f41cba70d00803a5231124b.png?imageView&thumbnail=343y260&enlarge=1" alt="">
          <div class="brandWord">
            <h4>海外制造商</h4>
            <div class="upNew">
              <span>9.9元起</span>
              <span class="new">上新</span>
            </div>
          </div>
        </li>
        <li>
          <img src="http://yanxuan.nosdn.127.net/3bf5a8a2f6eef284ecb40806ae9ce043.png?imageView&thumbnail=343y260&enlarge=1" alt="">
          <div class="brandWord">
            <h4>新秀丽制造商</h4>
            <div class="upNew">
              <span>9.9元起</span>
              <span class="new">上新</span>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <!--专题精选-->
    <div class="special">
      <div class="selected">
        <h3>专题精选</h3>
        <span class="more">更多></span>
      </div>
      <div class="content">
        <ul class="content-list">
          <li>
            <a href="javascript:;">
              <img src="https://yanxuan.nosdn.127.net/e8f232c7b25fd412afbdf4ba785e1f0d.jpg?imageView&thumbnail=575y322&enlarge=1&quality=75" alt="">
              <div class="text">
                <div class="ellipsis textItem">
                  <span class="title ">2019明前春茶新鲜上市, 尝过这一口, 才算不辜负春天</span>
                </div>
                <span class="desc">把整个春天，酿成明前一杯茶</span>
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <img src="https://yanxuan.nosdn.127.net/e8f232c7b25fd412afbdf4ba785e1f0d.jpg?imageView&thumbnail=575y322&enlarge=1&quality=75" alt="">
              <div class="text">
                <div class="ellipsis textItem">
                  <span class="title ">2019明前春茶新鲜上市, 尝过这一口, 才算不辜负春天</span>
                </div>
                <span class="desc">把整个春天，酿成明前一杯茶</span>
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <img src="https://yanxuan.nosdn.127.net/e8f232c7b25fd412afbdf4ba785e1f0d.jpg?imageView&thumbnail=575y322&enlarge=1&quality=75" alt="">
              <div class="text">
                <div class="ellipsis textItem">
                  <span class="title ">2019明前春茶新鲜上市, 尝过这一口, 才算不辜负春天</span>
                </div>
                <span class="desc">把整个春天，酿成明前一杯茶</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!--众筹-->

  </div>
</template>


<script>
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'
  export default{
    data(){
      return{
        isShow:false // 全部导航列表时候显示
      }
    },

    mounted(){
      //导航滚动
      new BScroll('.nav',{
        scrollX:true,
        click:true
      })
      new BScroll('.content',{
        scrollX:true,
        click:true
      })

      //轮播图
      const mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        autoplay: {
          delay: 3000
        },
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        }
      })
    },

    methods:{
      //点击显示全部导航列表
      handleMenu(){
        this.isShow = !this.isShow
      }
    },

  }
</script>

<style lang="stylus" type="text/stylus">
  @import "../../common/stylus/mixins.styl"
  #homeController
    width 100%
    height 100%
    header
      width 750px
      height 148px
      background #fff
      .header-top
        display flex
        justify-content space-around
        align-items center
        padding 15px 20px
        .logo
          width 138px
          height 40px
          display inline-block
          background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png")
          background-repeat no-repeat
        .search
          width 442px
          height 56px
          font-size 28px
          color #666
          background #ededed
          line-height 56px
          text-align center
          border-radius 8px
          .iconfont
            font-size 30px
        .btn
          width 74px
          height 40px
          line-height 40px
          text-align center
          background #fff
          border 1px solid #b4282d
          border-radius 8px
          color #b4282d
          font-size 28px
      .nav
        overflow hidden
        .navList
          position relative
          display flex
          width 1460px
          height 60px
          padding 0 20px
          li
            height 60px
            font-size 30px
            margin-left 15px
            line-height 60px
            text-align center
            padding 0 15px
            box-sizing border-box
            &.active
              border-bottom 5px solid #b4282d
              a
                color #b4282d
      .taggleWaper
        top-border-1px(#000)
        position relative
        width 100%
        height 60px
        box-sizing border-box
        line-height 60px
        padding 0 20px
        font-size 30px
        .mask
          position absolute
          top 380px
          bottom 0
          left 0
          right 0
          width 100%
          height 1000px
          background rgba(0,0,0,.7)
          z-index 10
      .menu
        position absolute
        top 90px
        right 0
        width 130px
        height 60px
        background white
        .menu-icon
          position absolute
          top 0
          right 30px
          line-height 60px
          .iconfont
            color #7e8c8d
            font-size 40px
      .switchMenu
        position relative
        width 100%
        height 312px
        padding-top 20px
        background #fff
        z-index 10
        ul
          display flex
          flex-wrap wrap
          li
            width 150px
            height 56px
            line-height 56px
            border 1px solid #ccc
            border-radius 5px
            margin 0 0 40px 30px
            text-align center
            &.on
              border 1px solid #b4282d
              a
                color #b4282d
            a
              width 150px
              height 56px
              font-size 30px
              color black
    .swiper-container
      width 100%
      height 400px
      swiper-slide
        width 100%
        height 400px
        img
          width 100%
          height 400px
    .service
      width 100%
      height 72px
      background #fff
      .serList
        height 72px
        display flex
        justify-content space-around
        align-items center
        li
          height 36px
          a
            color #b4282d
            font-size 28px
            .iconfont
              font-size 28px

    .home-nav
      width 100%
      height 340px
      .home-nav-list
        display flex
        flex-wrap wrap
        li
          display flex
          justify-content space-between
          height 156px
          width 110px
          margin 10px 20px
          a
            display flex
            flex-direction column
            align-items center
            justify-content space-around
            img
              width 110px
              height 110px
            span
              color #333
    .wyyg
      width 100%
      height 160px
      background #fff
      img
        height 160px
    .recommend
      display flex
      flex-wrap wrap
      align-content space-around
      justify-content space-around
      padding 10px 18px
      box-sizing border-box
      width 100%
      height 575px
      background #fff
      margin-bottom 20px
      .item
        width 343px
        height 264px
        padding 10px 0 0 10px
        background #f4f4f4
        margin-right 3px
        a
          display flex
          flex-direction column
          justify-content space-between
          height 264px
          padding 20px 0 0 20px
          box-sizing border-box
          p
            font-size 34px
            padding-bottom 20px
          img
            width 150px
            height 150px

    .limitTime
      width 100%
      height 784px
      box-sizing border-box
      padding 0 20px
      background #fff
      margin-bottom 20px
      .limitTitle
        height 100px
        display flex
        font-size 35px
        align-items center
        justify-content space-between
        .leftTitle
          .xsg
            display inline-block
            margin-right 20px
          .time
            display inline-block
            font-size 26px
            border 1px solid #000
            padding 4px
            background-color #000
            border-radius 8px
            color #fff
      .timeList
        width 100%
        height 598px
        display flex
        justify-content space-between
        flex-wrap wrap
        li
          width 32%
          height 299px
          margin-bottom 14px
          .timeImg
            width 100%
            height 218px
            background-color #F6F6F6
            margin-bottom 20px
            img
              width 100%
              height 100%
          .timePrice
            display flex
            .sellPrice
              font-size 30px
              color red
            .prePrice
              font-size 25px
              margin-left 10px
              position relative
              color #7f7f7f
              .timeLine
                width 70px
                height 3px
                background-color #7f7f7f
                position absolute
                left 50%
                top 50%
                transform translate(-50% ,-50%)
    .newGoods
      width 100%
      height 860px
      box-sizing border-box
      padding 0 20px
      margin-bottom 20px
      background #fff
      .newTitle
        height 100px
        display flex
        font-size 35px
        align-items center
        justify-content space-between
      .newList
        width 100%
        height 598px
        display flex
        justify-content space-between
        flex-wrap wrap
        li
          width 32%
          height 354px
          margin-bottom 14px
          .newImg
            width 100%
            height 218px
            background-color #F6F6F6
            margin-bottom 20px
            img
              width 100%
              height 100%
          .goodName
            line-height 30px
            span
              width 200px
              display inline-block
            .price
              color red
            p
              float left
              padding 2px 10px
              border 2px solid red
              border-radius 10px
              margin-right 10px
            .vouchers
              width 170px
              height 24px
              display inline-block
              background-color white
              padding 2px 4px
              border 1px solid red
              position relative
              text-align center
              font-size 10px
              margin-left 12px
              .left
                width 10%
                height 30px
                position absolute
                left -7%
                top -1px
              .right
                width 10%
                height 30px
                position absolute
                right -7%
                top -1px
      .fourBrand
        border-top 30px solid #F5F5F5
        width 100%
        box-sizing border-box
        padding 0 20px
        .brandList
          height 554px
          li
            float left
            width 49.3%
            height 261px
            background-color #F6F6F6
            margin-top 8px
            position relative
            &:nth-child(2n)
              margin-left 8px
            .twoImg
              display flex
              margin-top 25%
              img
                width 50%
                height 50%
            .brandWord
              width 100%
              position absolute
              left 50%
              top 20px
              transform translateX(-50%)
              padding-left 15%
              h4
                font-size 33px
                color #333
                margin-bottom 5px
              .upNew
                font-size 27px
                color #7F7F7F
                margin-top 3px
    .personTro
      width 100%
      height 784px
      box-sizing border-box
      padding 0 20px
      background #fff
      margin-bottom 20px
      .personTroTitle
        height 100px
        display flex
        font-size 35px
        align-items center
        justify-content space-between
      .personTroMiddle
        width 100%
        height 280px
        background-color #FFF0DF
        display flex
        justify-content space-between
        .middleLeft
          width 280px
          height 280px
          img
            width 100%
            height 100%
        .middleWord
          font-size 25px
          margin-left 20px
          width 60%
          padding-top 50px
          .secondRow
            font-size 26px
            width 80%
            padding 15px 0
            display block
            overflow hidden
            white-space nowrap
            text-overflow ellipsis
          .threeRow
            font-size 25px
            color #7F7F7F
          .fourRow
            padding 15px 0
            color red
      .personTroList
        width 100%
        height 337px
        display flex
        justify-content space-between
        margin-top 15px
        li
          width 32%
          height 337px
          .pictueImg
            background-color #F6F6F6
            margin-bottom 10px
            img
              width 216px
              height 216px
          .goodName
            line-height 30px
            .price
              color red
          .label
            color red
            font-size 20px
            margin-top 10px
            p
              float left
              padding 2px 10px
              border 2px solid red
              border-radius 10px
              margin-right 10px
            .vouchers
              width 170px
              height 24px
              display inline-block
              background-color white
              padding 2px 4px
              border 1px solid red
              position relative
              text-align center
              font-size 10px
              margin-left 12px
              .left
                width 10%
                height 30px
                position absolute
                left -7%
                top -1px
              .right
                width 10%
                height 30px
                position absolute
                right -7%
                top -1px
    .rankingList
      width 100%
      height 730px
      box-sizing border-box
      padding 0 20px
      background #fff
      margin-bottom 20px
      .rankingtitle
        height 100px
        line-height 100px
        font-size 35px
      .topList
        display flex
        justify-content space-between
        margin-bottom 10px
        li
          width 49.3%
          height 200px
          display flex
          justify-content space-between
          &:nth-child(1)
            background-color #FCF4E4
          &:nth-child(2)
            background-color #EAF0F7
          .word
            font-size 35px
            width 100%
            color #000
            span
              display inline-block
              margin-top 65px
              margin-left 20px
            .blackLine
              margin  20px 20px
              width 60px
              height 5px
              background-color black
          img
            width 200px
            height 200px
      .bottomList
        display flex
        flex-wrap wrap
        justify-content space-between
        li
          width 24%
          height 180px
          background-color #F6F6F6
          margin-bottom 10px
          text-align center
          .listTitle
            font-size 20px
            text-align center
            padding-top 20px
          img
            width 120px
            height 120px
            padding-top 10px
    .brand
      width 100%
      height 685px
      box-sizing border-box
      padding 0 20px
      background #fff
      margin-bottom 20px
      .brandTitle
        height 100px
        display flex
        font-size 35px
        align-items center
        justify-content space-between
      .brandList
        height 554px
        li
          float left
          width 49.3%
          height 261px
          background-color palegreen
          margin-top 8px
          position relative
          &:nth-child(2n)
            margin-left 8px
          img
            width 100%
            height 100%
          .brandWord
            width 100%
            position absolute
            left 50%
            top 20px
            transform translateX(-50%)
            h4
              font-size 33px
              color #333
              text-align center
            .upNew
              font-size 27px
              color #7F7F7F
              margin-top 3px
              text-align center
              .new
                background-color #D0B491
                padding 0 8px
                height 34px
                display inline-block
                text-align center
                line-height 34px
                border-radius 4px
                color white
    .special
      box-sizing border-box
      padding 0 20px
      background #fff
      margin-bottom 20px
      .selected
        display flex
        justify-content space-between
        align-items center
        height 100px
        h3
          font-size 30px
        .more
          font-size 30px
      .content
        .content-list
          height 375px
          display flex
          li
            background #F5F5F5
            width 480px
            padding-bottom 20px
            margin-right 20px
            a
              display flex
              flex-direction column
              justify-content space-between
              width 480px
              img
                width 480px
                height 267px
                margin-bottom 15px
              .text
                padding 0 15px
                display flex
                flex-direction column
                justify-content space-around
                .textItem
                  margin-bottom 5px
                  .title
                    display inline-block
                    width 480px
                    font-size 30px
                    color #333

</style>

