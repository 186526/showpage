<template>
  <div class="fadeoutframe main" id="main">
    <div id="firstscreen" class="firstscreen">
      <div id="fpbackpic" class="backpic"></div>
      <div class="title">
        <h1>{{firstscreen.name}}</h1>
        <h2>{{firstscreen.msg}}</h2>
      </div>
    </div>
    <div id="nextscreen" class="nextscreen">
      <div id="ntbackpic" class="nextbackpic blur-mask"></div>
      <div class="avatar fadeoutframe" id="avatar">
        <img
          src="https://cdn.jsdelivr.net/gh/186526/jsdelivr@master/avatar.jpg"
          style="border-radius: 50%;max-width: 100px;max-height: 100px;vertical-align:middle;"
        />
        <span style="display:inline-block;vertical-align: middle;">
          <h1 style="margin:0px;padding:0px;">{{firstscreen.name}}</h1>
          <h3 style="margin:0px;padding:0px;">{{nextscreen.des}}</h3>
        </span>
      </div>
      <div id="list" class="list fadeoutframe">
        <div class="progarm">
          <div class="hexo-logo progarm-avatar"></div>
          <div class="twice">
            <span class="progarm-title">
              <h1>博客</h1>
              <h2>啥都<del>不</del>记录的博客</h2>
            </span>
            <div class="program-des">
              <del>鸽鸽鸽</del>
            </div>
          </div>
          <a class="go-svg progarm-go" href="https://186526.xyz">
            去康康
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              x="0px"
              y="0px"
              viewBox="0 0 100 100"
              width="18"
              height="18"
              class="icon outbound"
            >
              <path
                fill="currentColor"
                d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
              />
              <polygon
                fill="currentColor"
                points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
              />
            </svg>
            <br />
          </a>
        </div>

        <div class="progarm">
          <div class="dl-logo progarm-avatar"></div>
          <div class="twice">
            <span class="progarm-title">
              <h1>下载站</h1>
              <h2>啥都下载<del>不</del>下来</h2>
            </span>
            <div class="program-des">
              <del>你说啥 打不开</del>
            </div>
          </div>
          <a class="go-svg progarm-go" href="https://dl.186526.xyz">
            去康康
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              x="0px"
              y="0px"
              viewBox="0 0 100 100"
              width="18"
              height="18"
              class="icon outbound"
            >
              <path
                fill="currentColor"
                d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
              />
              <polygon
                fill="currentColor"
                points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
              />
            </svg>
            <br />
          </a>
        </div>

        <div class="progarm">
          <div class="info-logo progarm-avatar"></div>
          <div class="twice">
            <span class="progarm-title">
              <h1>关于我</h1>
              <h2>我是个啥东西</h2>
            </span>
            <div class="program-des">
              <del>水水更健康</del>
            </div>
          </div>
          <a class="go-svg progarm-go" href="https://186526.xyz/about/">
            去康康
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              x="0px"
              y="0px"
              viewBox="0 0 100 100"
              width="18"
              height="18"
              class="icon outbound"
            >
              <path
                fill="currentColor"
                d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
              />
              <polygon
                fill="currentColor"
                points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
              />
            </svg>
            <br />
          </a>
        </div>
      </div>
    </div>
    <div id="footer" class="footer fadeoutframe">
      Copyright © 1919 - 810 186526 | Powered by Vue
    </div>
  </div>
</template>

<script>
export default {
  name: 'screen',
  data () {
    return {
      firstscreen: {
        name: '186526',
        msg: 'Welcome'
      },
      nextscreen: {
        des: '啥都不会的屑'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.firstscreen {
  overflow: hidden;
}
.nextbackpic {
  overflow: hidden;
  position: relative;
}
.nextscreen .nextbackpic {
  width: 100%;
  height: 100vh;
}
.firstscreen .backpic {
  width: 100%;
  height: 100vh;
}
.backpic {
  background: url("https://cdn.jsdelivr.net/gh/186526/jsdelivr@master/static/img/mask.c4751cb.jpg")
    center center / cover no-repeat;
  transform: translate3d(0px, 0px, 0px);
}
h1,
h2 {
  font-weight: normal;
}
h1 {
  font-size: 48px;
}
h2 {
  font-size: 28px;
}
.title {
  color: #d7d7d7;
  position: absolute;
  top: 38%;
  left: 5%;
}
.fadein {
  opacity: 1;
  transition: all 0.4s;
}
.fadeoutframe {
  opacity: 0;
}
.fadeinframe {
  opacity: 1;
}
.blur-mask {
  filter: blur(2px);
  transition: all 0.5s;
}
.avatar {
  position: absolute;
  top: 10%;
  left: 5%;
}
.nextbackpic {
  display: flex;
  background: url("https://api.ixiaowai.cn/gqapi/gqapi.php") center center /
    cover no-repeat;
  transform: translate3d(0px, 0px, 0px);
}
.more-blur {
  filter: blur(10px);
  transition: all 0.8s;
}
.list {
  position: absolute;
  top: 30%;
  left: 10%;
  right: 10%;
}
.progarm {
  display: inline-block;
  margin: 5px;
  background: #fff;
  color: #2c3e50;
  border-radius: 10px;
  padding: 15px 30px;
  box-shadow: 1px 1px 3px #fff;
}
.progarm .progarm-title {
  display: inline-block;
  vertical-align: middle;
  margin: 0px 10px;
}
.progarm .progarm-title h1 {
  font-size: 20px;
  margin: 0px;
  display: inline;
}
.progarm .progarm-title h2 {
  font-size: 14px;
  margin: 0px;
  display: inline;
}
.hexo-logo {
  background: url(https://hexo.bootcss.com/logo.svg);
  background-size: 50px;
}
.dl-logo {
  background: url(https://cdn.jsdelivr.net/gh/186526/jsdelivr@master/static/download.svg);
  background-size: 50px;
}
.info-logo {
  background: url(https://cdn.jsdelivr.net/gh/186526/jsdelivr@master/static/info.svg);
  background-size: 50px;
}
.progarm .progarm-avatar {
  display: inline-block;
  width: 50px;
  height: 50px;
  vertical-align: middle;
}
.progarm .progarm-go {
  display: inline;
  font-size: 16px;
  margin: 0px;
  text-align: right;
  color: #2196f3;
  text-decoration: none;
}
.progarm .progarm-go:hover{
  text-decoration:underline;
}
.progarm .twice .progarm-des{
  font-size: 8px;
  margin: 3px 0px;
}
.twice {
  display: inline-block;
  vertical-align: middle;
}
.footer{
  padding-top: 5%;
  position: absolute;
  bottom: 3%;
  left: 0%;
  right: 0%;
  font-size: 4px;
}
del {
  background-color:#fff;
  color:#fff;
  text-shadow: none;
}
@media screen and (max-width: 768px) {
  .title {
    text-align: center;
    left: 0%;
    right: 0%;
  }
  .avatar {
    text-align: center;
    left: 0%;
    right: 0%;
  }
  .progarm {
    text-align: center;
    left: 0%;
    right: 0%;
    width:80%;
    box-shadow: 1px 1px 3px #fff;
  }
  .twice{
    display: block;
  }
  .progarm .progarm-go{
    display: block;
  }
  .footer{
    margin-bottom:10%;
    opacity: 0;
  }
}
@media (prefers-color-scheme: dark) {
  .progarm {
    background: #303030;
    color: #b3bdc7;
    box-shadow: 1px 1px 3px #303030;
  }
  del {
  background-color:#303030;
  color:#303030;
  text-shadow: none;
  }
}
</style>
