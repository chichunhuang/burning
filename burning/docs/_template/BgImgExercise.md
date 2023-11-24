---
title: title of Background Image exercise(最上方)
---

<!-- C 這是 HTML 註解 : 注意註解前  __必須___ 有空行 -->


<head>
    <html className="CCS_html" />
    <body className="__CCS_body" style="color: red"/>
</head>

<!-- A 這是 HTML 註解 : 注意註解前  __必須___ 有空行 -->

import logo from "@site/static/img/docusaurus-social-card.jpg";
/* B 這是註解(mdx js block 所用方式): 注意註解前後  __不可___ 有空行或 BR */
export const RotatedImage = ({img, degree='-45', width='100%', marginleft='20px' }) => (
 //空行報錯
<span style={{
  marginLeft: marginleft
}}>
  <img  src={img} 
		style={{ transform: 'rotate('+degree +'deg)' }}
		width={width}
	  />
 </span>
);

<!-- A 這是 HTML 註解 : 注意註解前  __必須___ 有空行 -->

# Background Image exercise

<div style={{backgroundColor: 'red', color: 'blue' }} >
一個 div 區塊, 在 md 檔中設定 style 的 template 
<br/>
{/* C 這是 JSX 註解(以大括弧封起一個程式碼區間, 然後依據 js 的方式寫註解 ): 注意註解前後不可有空行 */}
&lt;! 這邊演示如何在 JSX 呈現角括號 --&gt;

<!-- A 這是 HTML 註解(不處於 JSX 元件內, 也不在程式區塊內, 單純的 HTML 註解) : 注意註解前  __必須___ 有空行 -->
</div>

<div style={{backgroundColor: 'red', color: 'blue' }} >

 
{/* X 這是 JSX 失敗註解(有空行x2): 注意註解前  __不可___ 有空行或 BR x2 */}
</div>

<!-- A 這是 HTML 註解 : 注意註解前  __必須___ 有空行 -->
<div style={{backgroundImage: `url('../../../../welcome/img/large.svg')`,
                                                         backgroundRepeat: `repeat-y`, 
														 backgroundSize: `cover`, 
														 width: '100%'
														 }} >
														 
一個 div 區塊, 在 md 檔中以 style 設定 background image 的 template， <br/>
一個 div 區塊, 在 md 檔 穿插使用自訂react 元件的 template  <br/>

<br/>
注意這邊 url path 的定義: 要依據 render 之後的路徑來設定, 而不是資料夾的相對位置.<br/>
=> 查如何 import path <br/>
==> 要考慮  sidebar 中的階層設定<br/>

<RotatedImage img={logo}  width="30%" >

<!-- C 這是 HTML 註解 : 注意註解前  __必須___ 有空行 -->
</RotatedImage>


there should be a background Image herer<br/>
</div>