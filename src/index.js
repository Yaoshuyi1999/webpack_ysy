import './banner.js'
import './tabs.js'

import './style/index.css'
// import './style/index.less';

import imgUrl from './assets/1.gif';

let img = document.createElement('img');
img.src = imgUrl;
document.body.appendChild(img);

import imgUrl1 from './assets/logo_small.png';

let img1 = document.createElement('img');
img1.src = imgUrl1;
document.body.appendChild(img1);

import './assets/fonts/iconfont.css'

class App {
    static a = 123
  }
  
  console.log(App.a)