---
sidebarDepth: 4
---
# MDX  Exercise

import logo from "@site/static/img/logo2.png";

```
import fs from 'fs'


const filenames = fs.readdirSync('.');
//import listReactFiles from 'list-react-files';
```

```
not working test
import img_folder from "@site/static/img";


listReactFiles(img_folder).then(files => console.log(files));
```

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);



<Highlight color="#25c2a0">Docusaurus green</Highlight> and <Highlight color="#1877F2">Facebook blue</Highlight> are my favorite colors.

I can write **Markdown** alongside my _JSX_!

<img src={logo} style={{width: 280, borderRadius: '50%'}} />123

```
not working test
export const ListView =()=>(
    let filenames = fs.readdirSync('.') 
    filenames.map((filename) => {
	 //console.log(filename);
	 <span>filename</span>
	})
);

<ListView></ListView>


```