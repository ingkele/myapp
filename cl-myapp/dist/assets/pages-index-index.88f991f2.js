import{o as e,c as t,w as s,a as l,b as a,t as c,d as i,i as n,e as u,f as d,r,F as A,g}from"./index-ddcf1116.js";import{_ as m}from"./_plugin-vue_export-helper.1b428a4d.js";import{r as o}from"./index.7723eea6.js";const p=m({components:{Pagemenu:m({name:"Pagemenu",props:{label:{type:String,default:"查询下载"},img:{type:String,default:""},url:{type:String,default:""},subscript:{type:Number,default:0}},data:()=>({myshow:!1}),methods:{menuclick(){console.log("跳转地址111",this.url),this.$emit("menuclick",this.url)}}},[["render",function(d,r,A,g,m,o){const p=n,b=u;return e(),t(p,{class:"pagemenu",onClick:o.menuclick},{default:s((()=>[l(p,{class:"txt"},{default:s((()=>[a(c(A.label),1)])),_:1}),A.subscript>0?(e(),t(p,{key:0,class:"Subscript"},{default:s((()=>[a(c(A.subscript),1)])),_:1})):i("v-if",!0),l(b,{class:"img",src:A.img},null,8,["src"])])),_:1},8,["onClick"])}],["__scopeId","data-v-9120bf99"]])},data:()=>({ment:[{id:0,img:"../static/index/cxxz-plate.png",url:"queryIndex",label:"查询下载",subscript:0},{id:0,img:"../static/index/sxjd-plate.png",url:"itemIndex",label:"事项进度",subscript:1},{id:0,img:"../static/index/khtj-plate.png",url:"connectionIndex",label:"客户图鉴",subscript:12},{id:0,img:"../static/index/gzhb-plate.png",url:"workIndex",label:"工作汇报",subscript:0},{id:0,img:"../static/index/kbyw-plate.png",url:"serviceIndex",label:"可办业务",subscript:2},{id:0,img:"../static/index/zxgzry-plate.png",url:"customerIndex",label:"在线工作人员",subscript:0}]}),methods:{menuclick(e){console.log(e),o.navigate(e)}}},[["render",function(c,i,m,o,p,b){const f=u,x=n,h=g("Pagemenu");return e(),t(x,{class:"content"},{default:s((()=>[l(x,{class:"index-top"},{default:s((()=>[l(x,{class:"index-top-center width100"},{default:s((()=>[l(x,{class:"width75 index-top-center-left"},{default:s((()=>[l(x,{class:"head"},{default:s((()=>[l(f,{class:"img head-img",src:"/assets/mrtx-pic-dcc099a3.png"})])),_:1}),l(x,{class:"login"},{default:s((()=>[l(x,null,{default:s((()=>[a("请点击登录")])),_:1}),l(x,{class:"img-login"},{default:s((()=>[l(f,{class:"img",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAALCAYAAABCm8wlAAAAAXNSR0IArs4c6QAAAO9JREFUKFNdz79KBDEQBvD5ElYLYZ/AcuuwGbC2shMEqwNtrhELwU6LA1v1AfSwONHC62ytrezy52mERZKRhPW486vCzI/JDIwxu03TXBHRi3PO07+AmacAnonoO6V0EGP8Wjcwxuxord+UUkdEJCmlwxjjxx9CeXRdt9227QLAyYhOY4zL0qtgjGbmByI6A2r5wjn3uA6qY+ZPAPtlkohMNoC1dgLgFcBWznk5DMN0Bay150qpeZmSc56HEC6J6KcCa+21UupubN6HEGZElOqSzHwM4L0UROTGe39b/l+d2ff9ntZ6ISJP3vtyxUZ+AU6XV3wCAJGzAAAAAElFTkSuQmCC"})])),_:1})])),_:1})])),_:1}),l(x,{class:"index-top-center-more",onClick:i[0]||(i[0]=e=>b.menuclick("balance"))},{default:s((()=>[l(x,{class:"more"},{default:s((()=>[a("更多")])),_:1}),l(x,{class:"img-more"},{default:s((()=>[l(f,{class:"img",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAALCAYAAACzkJeoAAAAAXNSR0IArs4c6QAAAHhJREFUKFNjFM675M/I+D+agZE1/80ErecMSIBROP/CfEYGxgQGhv83GRjZHJEVMPIVXhVi+/dnNwMDgxG6AkaQKbgUgCVxKYBLghSIFl5V+ffv93VGBkYWhv//N+PQyXCTgZHVEb+deF2L15/COecDGJmZorCFEAAntlD2d8w25AAAAABJRU5ErkJggg=="})])),_:1})])),_:1})])),_:1})])),_:1}),l(x,{class:"index-content"},{default:s((()=>[(e(!0),d(A,null,r(p.ment,((a,c)=>(e(),t(x,{key:c,class:"index-content-menu"},{default:s((()=>[l(h,{label:a.label,img:a.img,url:a.url,subscript:a.subscript,onMenuclick:b.menuclick},null,8,["label","img","url","subscript","onMenuclick"])])),_:2},1024)))),128))])),_:1})])),_:1})}],["__scopeId","data-v-3cf7aff3"]]);export{p as default};
