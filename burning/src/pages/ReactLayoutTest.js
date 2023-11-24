

import React from 'react';
import Layout from '@theme/Layout';
import { CodeBlock, dracula  } from "react-code-blocks";
import {default as Sum, Square} from "@site/src/components/Add";

//import Papa from "papaparse";


import logger from '@docusaurus/logger';

function say(message){
	console.log ('console.log '+ message);
	logger.info ('logger.info '+ message);
	return (<span>{message}</span>);
}

  const changeHandler = (event) => {
	console.log('4444');
    console.log(event.target.files[0]);
	
	
	  Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        console.log(results.data)
      },
    });
	
  };

export default function Hello() {
	


	
	let let_variable_in_React_JS = 1234;
	let entry_time = Date().toLocaleString();
	let seasons = ["Spring", "Summer", "Autumn", "Winter"];
	
	  let seasonsList = [];
	  seasons.forEach((season, index) => {
		  
		seasonsList.push(<li key={index}>{season}</li>);
	  });
	  
	let Seasons_from_array_error   = `
	let seasons = ["Spring", "Summer", "Autumn", "Winter"];
		
	<h3>Seasons from array: <span style={{color: 'red'}}> 錯誤範例沒有分別 list </span></h3>
	<ol>
	<li>{seasons}</li>
	</ol>	
	`
	  
	
  return (
    <Layout title="exercise" description="Hello React Page">
	Add function from external js's default function:  {Sum(1, 10)} <br/>
	Square function from external js's function: {Square(10)} <br/>
	 <div>
      {/* File Uploader */}
	  
	  <span>https://medium.com/how-to-react/how-to-parse-or-read-csv-files-in-reactjs-81e8ee4870b0</span>
      <input
        type="file"
        name="file"
        accept=".csv"
        onChange={changeHandler}
        style={{ display: "block", margin: "10px auto" }}
      />
    </div>
	
	
	<hr/>
	{/* 註解寫法 */}
	
	<div >
	<h1>@theme/Layout 三兩事</h1>
	<span style={{color: 'red'}}> 註: @theme/Layout元件內是 JSX Component, not MD file, 所以會自動 escape 換行 </span><br/>
	<p>
    關於Pages: Layout 元件(他是 React Component) not MDX <br/>
    return <u>前</u>的區塊是  JavaScript 部分<br/>
    return <u>後</u>的區塊是  JSX 部分<br/>
	所以上方寫 JS 下方寫 JSX<br/> 
	例如 code block(md: `x3,  js:`x1, jsx: CodeBlock 元件), multiline String.... 語法都不同....
	</p>
	</div>
	<hr/>
	
	
	<h1>Docusaurus 中以 React Layout @theme/Component 建立動態頁面方式</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
			
        <p>
          Create React JS Page at : <code>src/pages/ReactLayoutTest.js</code> <br/>
		  此Page路由為<code>http://localhost:3000/welcome/ReactLayoutTest</code> <br/>
		  <br/>
		  let_variable_in_React_JS : {let_variable_in_React_JS} <br/>
		   {new Date().getMonth()} <br/>
		  
		  entry_time from native react libary: {entry_time}
        </p>
      </div>
<hr/>

CodeBlock reference <br/>
<a href="https://www.npmjs.com/package/react-code-blocks"> https://www.npmjs.com/package/react-code-blocks</a> <br/>
<hr/>

		<h3>Seasons from array: <span style={{color: 'red'}}> 錯誤範例沒有分別 list </span></h3>
		<ol>
		<li>{seasons}</li>
		</ol>
		
	 <CodeBlock
      text={Seasons_from_array_error}
      language='JavaScript'
      showLineNumbers='true'
      //theme={dracula} //use default else 
    />
		
		
<hr/>		
		<h3>Seasons from array of <span style={{color: 'blue'}}>JSX Component</span>, arraylist of content 要再轉換成 Components 才行</h3>
		<ol>
		<li>{seasonsList}</li>
		</ol>
		
	 <CodeBlock
      text={`
	let seasons = ["Spring", "Summer", "Autumn", "Winter"];
	
	  let seasonsList = [];
	  seasons.forEach((season, index) => {
		seasonsList.push(<li key={index}>{season}</li>);
	  });	  
	  
	  	<h3>Seasons from array of <span style={{color: 'blue'}}>JSX Component</span>, arraylist of content 要再轉換成 Components 才行</h3>
		<ol>
		<li>{seasonsList}</li>
		</ol>
		
	  
	  `}
      language='JavaScript'
      showLineNumbers='true'
      //theme={dracula}
    />


<h3>JSX 中註解寫法</h3>
 以外來 js 區塊來寫註解
	 <CodeBlock
      text={`		{/* 註解寫法 */}	  	  `}
      language='JavaScript'
      showLineNumbers='true'
      //theme={dracula}
    />

    </Layout>
  );
}