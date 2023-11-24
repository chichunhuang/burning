---
sidebarDepth: 4
---
import logo from "@site/static/img/docusaurus-social-card.jpg";

# All Artifacts

<RotatedImage img={logo}  width="30%" ></RotatedImage>

<span style={{ color: 'crimson', backgroundColor: 'pink' }}> color of this span is crimson </span>
<RotatedImage img={logo} degree="0" width="30%" ></RotatedImage>


<RotatedImage img={logo}  width="30%" ></RotatedImage>


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

```

<RotatedImage img={logo} degree="0" width="30%" ></RotatedImage>
<RotatedImage img={logo} degree="0" width="30%" ></RotatedImage>


export const RotatedImage = ({img, degree, width='100%', marginleft='20px' }) => (
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

// 注意 
1. marginLeft: marginleft 這個是在 style 之中, 這邊沒大括號
2. width={width} 這個是在 HTML element 之中
3. react componemt 中的 JSX 前後都不可以有空行
```