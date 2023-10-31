/** examples

1. 
configProperty.js

const property = {
	aboutMe: '關於我',
	title: 'Hello World',
	i18n: {
		defaultLocale: 'zh-tw',
		locales: ['zh-tw', 'en'],
	},
}

function Square(a) {
	return a*a;
}

module.exports = {Square, property};
=> export anonymous module with members (Square+const)




2. 
import configModule from "@site/src/global/configProperty";
import {property as config} from "@site/src/global/configProperty";
var aboutMeTitle = config.aboutMe.title;
 
2.1 at JSX

<span>{configModule.property.aboutMe}</span> 
同於
<span>{config.aboutMe}</span> 
<span>{aboutMeTitle}</span> 
=> 關於我

<span>{configModule.property.i18n.defaultLocale}</span>
=>zh-tw

<span>{configModule.property.i18n.locales[1]}</span>
=>en

<span>{configModule.Square(10)}</span>
=>100


2.2 at JS 
config.i18n.locales[1]
console.log('square= ' + config.Square(10));


 */

const property = {
	//example
	// title: 'Hello World',
	// i18n: {
	// 	defaultLocale: 'zh-tw',
	// 	locales: ['zh-tw', 'en'],
	// },
	
	//HomepageFeatures
	aboutMe:{
		title: '關於我',
		description: '我是 Burny，目前升五年級。這個網站是用來記錄從小到大美勞作品的網站.\'',
	} ,
	
	license:{
		title: '關於版權',
		description: '有些作品是我自己創造的，有些是我臨摹其他創作者的做品。如果有冒犯到其他人的權利，再麻煩告訴我我再移除。',
	} ,
	
	poweredBy:{
		title: 'Powered by React',
		description: '這個網站是用 Docusaurus 製作的。',
	} ,
	
	
}

function Square(a) {
	return a*a;
}

module.exports = {Square, property};
