---
sidebarDepth: 4
---
import { CodeBlock, dracula  } from "react-code-blocks";


# How to List All Artifacts
* https://docusaurus.io/docs/markdown-features/assets
* https://docusaurus.io/docs/markdown-features/assets

## static assets
1. static assets 會預設從 static 資料夾直接copy到指定位置
   1. 預設是 project/static/Folder1 => production(build)/Folder1
   1. 若想放在 static 以外的話需額外註冊位置
<br/>

   <code>docusaurus.config.js</code>
   
   * 例如註冊 public 資料夾
   
   ```
	module.exports = {
	  title: 'My site',
	  staticDirectories: ['public', 'static'],
	  // ...
	};
   ```
# Static Assets 在 WebApplication 的 URI
* 會受到 docusaurus.config.js >> baseUrl 設定而影響

|  baseUrl設定  |  Project Folder  |  URI  |
|  ----  | ----  | ----  |
| baseUrl: '/'  | <b>/static</b>/img/docusaurus.png | /img/docusaurus.png  |
| baseUrl: '/subpath/'  | <b>/static</b>/img/docusaurus.png | <u>/subpath</u>/img/docusaurus.png  |
 
   
# 取 Static Asset 方式
* 注意事項: asset 的 URI 會受到 baseUrl 值的影響,而需要穿插 baseUrl 在 URI 中. 所以應該避免使用相對路徑.
* 建議作法使用 import 的方式, ref Gallery.md

### JSX 取 Static Asset 方式
<code>方法 A</code>
	 <CodeBlock
      text={`	  
import DocusaurusImageUrl from '@site/static/img/docusaurus.png';

<img src={DocusaurusImageUrl} />;
	  `}
      language='JavaScript'
      showLineNumbers='true'
      //theme={dracula} //use default else 
    />

<code>方法 B</code>
	 <CodeBlock
      text={`	  
<img src={require('@site/static/img/docusaurus.png').default} />
	  `}
      language='JavaScript'
      showLineNumbers='true'
      //theme={dracula} //use default else 
    />
	
<code>方法 C</code>
	 <CodeBlock
      text={`	  
import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/docusaurus.png')} />;
	  `}
      language='JavaScript'
      showLineNumbers='true'
      //theme={dracula} //use default else 
    />
	

### Markdown 取 Static Asset 方式
* https://docusaurus.io/docs/markdown-features/assets


<code>Markdown 方法</code>
	 <p>
{`	 
You write a link like this: [Download this document](/files/note.docx)
Docusaurus changes that to: <a href={requir e('static/files/note.docx')}>Download this document</a>
`}    

</p>


### CSS 取 Static Asset 方式

```
@font-face {
  font-family: 'Caroline';
  src: url('/font/Caroline.otf');
}

```


# Asset
* https://docusaurus.io/docs/markdown-features/assets



# 列出資料夾檔案的方法
* https://stackoverflow.com/questions/67022909/can-docusaurus-read-all-files-in-a-folder
* 下面應該是解法
* https://stackoverflow.com/questions/72509655/get-a-list-of-all-pages-from-docs-directory