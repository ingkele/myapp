<template>
    <div class="book-body">
        <div class="body-inner">
            <div class="page-wrapper">
                <div class="page-inner">
                    <section class="normal">
                        <h1>frame和iframe框架</h1>
                        <h4 id="h4-frame-">
                            <a name="frame框架" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>frame框架
                        </h4>
                        <p>
                            <strong>1、框架概念</strong>
                            <br />将浏览器的主窗口分成几个独立的窗口框架，每个框架会同时显示一个不同的网页。框架主要用于后台框架与文档浏览器
                        </p>
                        <p>
                            <strong>2、框架基本结构</strong>
                            <br />框架由框架集(frameset)和框架(frame)组成
                        </p>
                        <p>
                            <strong>3、框架结构语法：</strong>
                        </p>
                        <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>frameset</span> <span class="token attr-name">cols</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>25%,50%,25%<span class="token punctuation">"</span></span><span
    class="token punctuation"
>&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>frame</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>frame_a.htm<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>frame</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>frame_b.htm<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>frame</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>frame_c.htm<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>frameset</span><span
    class="token punctuation"
>&gt;</span></span>
</code></pre>
                        <p>
                            <strong>4、框架集frameset标签属性</strong>
                        </p>
                        <ul>
                            <li>cols：定义框架集中列的数目和尺寸</li>
                            <li>rows：定义框架集中行的数目和尺寸</li>
                            <li>border：设置框架集的边框厚度，单位像素</li>
                            <li>bordercolor：设置框架集的边框颜色(英文或十六进制颜色)</li>
                            <li>frameborder：设置框架集边框是否显示，值只有0和1,0表示不显示边框，1表示显示边框</li>
                            <li>framespacing：设置框架集的边框厚度，单位像素</li>
                            <li>scrolling：设置是否在框架集中显示滚动条，取值：auto(需要时自动显示)、yes(始终显示)、no(从不显示)</li>
                            <li>noresize：设置无法调整框架集的大小，如果没有该属性，使用者可以随意拉动框架改变大小</li>
                        </ul>
                        <p>
                            <strong>5、框架frame标签属性</strong>
                        </p>
                        <ul>
                            <li>src：设置显示在框架&lt;frame&gt;中的网页文件URL路径</li>
                            <li>name：定义框架名称</li>
                            <li>frameborder：设置框架边框是否显示，值只有0和1,0表示不显示边框，1表示显示边框</li>
                            <li>scrolling：设置是否在框架中显示滚动条，取值：auto(需要时自动显示)、yes(始终显示)、no(从不显示)</li>
                            <li>noresize：设置无法调整框架的大小，如果没有该属性，使用者可以随意拉动框架改变大小</li>
                            <li>marginheight：设置框架的上方和下方的边距</li>
                            <li>marginwidth：设置框架的左侧和右侧的边距</li>
                            <li>longdesc：设置一个包含有关框架内容的长描述的页面</li>
                        </ul>
                        <p>
                            <strong>6、不支持框架标签&lt;noframes&gt;</strong>
                            <br />虽然框架技术是一种比较早的一种技术，但是仍然有一些早期版本的浏览器不支持框架。使用&lt;noframes&gt;可以让浏览器不支持框架
                        </p>
                        <h4 id="h4-iframe-">
                            <a name="iframe框架" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>iframe框架
                        </h4>
                        <p>
                            <strong>1、定义</strong>
                            <br />iframe元素会创建包含另外一个文档的内联框架（即行内框架)
                        </p>
                        <p>
                            <strong>2、HTML 与 XHTML 之间的差异</strong>
                            <br />在 HTML 4.1 Strict DTD 和 XHTML 1.0 Strict DTD 中，不支持 iframe 元素
                        </p>
                        <p>
                            <strong>3、提示与注解</strong>
                            <br />可以把需要的文本放置在&lt;iframe&gt;和&lt;/iframe&gt;之间，这样就可以应对无法理解iframe的浏览器
                            <br />iframe标签是成对出现的,以&lt;iframe&gt;开始,&lt;/iframe&gt;结束
                            <br />iframe标签内的内容可以做为浏览器不支持iframe标签时显示
                        </p>
                        <p>
                            <strong>4、常用属性</strong>
                        </p>
                        <ul>
                            <li>src：定义在iframe中显示的文档的 URL</li>
                            <li>name：定义iframe的名称</li>
                            <li>frameborder：定义iframe边框是否显示，值只有0和1,0表示不显示边框，1表示显示边框</li>
                            <li>scrolling：定义是否在iframe中显示滚动条，取值：auto(需要时自动显示)、yes(始终显示)、no(从不显示)</li>
                            <li>marginheight：定义iframe的顶部和底部的边距</li>
                            <li>marginwidth：定义iframe的左侧和右侧的边距</li>
                            <li>longdesc：定义一个包含有关iframe的较长描述</li>
                            <li>align：对齐方式，已废弃,取值：top(顶部)、middle(居中)、bottom(底部)、left(左边)、right(右边)</li>
                            <li>height：定义iframe的高度</li>
                            <li>width：定义iframe宽度</li>
                        </ul>
                        <p>
                            <strong>5、使用示例</strong>
                        </p>
                        <p>&lt;iframe src="URL" width="20%" height="50%"&gt;&lt;/iframe&gt;</p>
                        <h4 id="h4-frame-iframe-">
                            <a name="frame和iframe总结" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>frame和iframe总结
                        </h4>
                        <p>
                            <strong>1、frame不能脱离frameset单独使用，iframe可以。</strong>
                            <br />
                            <strong>2、frame不能放在body中。</strong>
                            <br />正确用法，如下可以正常显示：
                        </p>
                        <pre class="language-html"><code class="language-html"><span class="token comment">&lt;!--&lt;body&gt;--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>frameset</span> <span class="token attr-name">rows</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>50%,*<span class="token punctuation">"</span></span><span
    class="token punctuation"
>&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>frame</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>frame1<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>test1.htm<span class="token punctuation">"</span></span><span
    class="token punctuation"
>/&gt;</span></span> 
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>frame</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>frame2<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>test2.htm<span class="token punctuation">"</span></span><span
    class="token punctuation"
>/&gt;</span></span> 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>frameset</span><span
    class="token punctuation"
>&gt;</span></span>
<span class="token comment">&lt;!--&lt;body&gt;--&gt;</span>
</code></pre>
                        <p>错误用法，如下不能正常显示：</p>
                        <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span
    class="token punctuation"
>&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>frameset</span> <span class="token attr-name">rows</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>50%,*<span class="token punctuation">"</span></span><span
    class="token punctuation"
>&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>frame</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>frame1<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>test1.htm<span class="token punctuation">"</span></span><span
    class="token punctuation"
>/&gt;</span></span> 
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>frame</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>frame2<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>test2.htm<span class="token punctuation">"</span></span><span
    class="token punctuation"
>/&gt;</span></span> 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>frameset</span><span
    class="token punctuation"
>&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span
    class="token punctuation"
>&gt;</span></span>
</code></pre>
                        <p>
                            <strong>3、嵌套在frameset中的iframe必需放在body中。</strong>
                            <br />正确用法，如下可以正常显示
                        </p>
                        <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span
    class="token punctuation"
>&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>frameset</span><span
    class="token punctuation"
>&gt;</span></span> 
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>iframe</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>frame1<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>test1.htm<span class="token punctuation">"</span></span><span
    class="token punctuation"
>/&gt;</span></span> 
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>iframe</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>frame2<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>test2.htm<span class="token punctuation">"</span></span><span
    class="token punctuation"
>/&gt;</span></span> 
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>frameset</span><span
    class="token punctuation"
>&gt;</span></span> 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span
    class="token punctuation"
>&gt;</span></span>
</code></pre>
                        <p>错误用法，如下不能正常显示</p>
                        <pre class="language-html"><code class="language-html"><span class="token comment">&lt;!--&lt;body&gt;--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>frameset</span><span
    class="token punctuation"
>&gt;</span></span> 
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>iframe</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>frame1<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>test1.htm<span class="token punctuation">"</span></span><span
    class="token punctuation"
>/&gt;</span></span> 
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>iframe</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>frame2<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>test2.htm<span class="token punctuation">"</span></span><span
    class="token punctuation"
>/&gt;</span></span> 
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>frameset</span><span
    class="token punctuation"
>&gt;</span></span> 
<span class="token comment">&lt;!--&lt;/body&gt;--&gt;</span>
</code></pre>
                        <p>
                            <strong>4、不嵌套在frameSet中的iframe可以随意使用</strong>。
                            <br />如下都可以正常显示
                        </p>
                        <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span
    class="token punctuation"
>&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>iframe</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>frame1<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>test1.htm<span class="token punctuation">"</span></span><span
    class="token punctuation"
>/&gt;</span></span> 
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>iframe</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>frame2<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>test2.htm<span class="token punctuation">"</span></span><span
    class="token punctuation"
>/&gt;</span></span> 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span
    class="token punctuation"
>&gt;</span></span>

<span class="token comment">&lt;!--&lt;body&gt;--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>iframe</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>frame1<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>test1.htm<span class="token punctuation">"</span></span><span
    class="token punctuation"
>/&gt;</span></span> 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>iframe</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>frame2<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>test2.htm<span class="token punctuation">"</span></span><span
    class="token punctuation"
>/&gt;</span></span> 
<span class="token comment">&lt;!--&lt;/body&gt;--&gt;</span>
</code></pre>
                        <p>
                            <strong>5、frame的高度只能通过frameSet控制；iframe可以自己控制，不能通过frameSet控制。</strong>
                            <br />如下：
                        </p>
                        <pre class="language-html"><code class="language-html"><span class="token comment">&lt;!--&lt;body&gt;--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>frameset</span> <span class="token attr-name">rows</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>50%,*<span class="token punctuation">"</span></span><span
    class="token punctuation"
>&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>frame</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>frame1<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>test1.htm<span class="token punctuation">"</span></span><span
    class="token punctuation"
>/&gt;</span></span> 
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>frame</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>frame2<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>test2.htm<span class="token punctuation">"</span></span><span
    class="token punctuation"
>/&gt;</span></span> 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>frameset</span><span
    class="token punctuation"
>&gt;</span></span>
<span class="token comment">&lt;!--&lt;/body&gt;--&gt;</span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span
    class="token punctuation"
>&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>frameset</span><span
    class="token punctuation"
>&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>iframe</span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>30%<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>frame1<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>test1.htm<span class="token punctuation">"</span></span><span
    class="token punctuation"
>/&gt;</span></span> 
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>iframe</span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>frame2<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>test2.htm<span class="token punctuation">"</span></span><span
    class="token punctuation"
>/&gt;</span></span> 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>frameset</span><span
    class="token punctuation"
>&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span
    class="token punctuation"
>&gt;</span></span>
</code></pre>
                        <p>
                            <strong>6、如果在同一个页面使用了两个以上的iframe，在IE中可以正常显示，在firefox中只能显示出第一个。使用两个以上的frame在IE和firefox中均可正常</strong>
                            <br />
                            <strong>7、frame是整个页面的框架，iframe是内嵌的网页元素，也可以说是内嵌的框架。</strong>
                            <br />
                            <strong>8、嵌套区别</strong>
                            <br />iframe标记又叫浮动帧标记，可以用它将一个HTML文档嵌入在一个HTML中显示，iframe和frame最大区别是在网页中嵌入 的&lt;iframe&gt;&lt;/iframe&gt;所包含的内容与整个页面是一个整体，而&lt;frame&gt;&lt; /frame&gt;所包含的内容是一个独立的个体，是可以独立显示的
                        </p>
                        <p>
                            <strong>9、iframe可以放到表格里面，frame 则不行。</strong>
                        </p>
                        <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span><span
    class="token punctuation"
>&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span
    class="token punctuation"
>&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span
    class="token punctuation"
>&gt;</span></span><span
    class="token tag"
><span class="token tag"><span class="token punctuation">&lt;</span>iframe</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span
    class="token punctuation"
>&gt;</span></span><span
    class="token tag"
><span class="token tag"><span class="token punctuation">&lt;/</span>iframe</span><span
    class="token punctuation"
>&gt;</span></span><span
    class="token tag"
><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span
    class="token punctuation"
>&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span
    class="token punctuation"
>&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span
    class="token punctuation"
>&gt;</span></span>
</code></pre>
                        <p>
                            <strong>10、iframe放在网页的任何地方，frame只能放到上下左右四个方向</strong>
                            <br />
                            <strong>11、frame用于全部页面，通常用在后台框架中，iframe只用于局部，比如需要嵌套一个百度地图页面等</strong>
                        </p>
                    </section>
                </div>
            </div>
        </div>
        <a href="http://doc.liangxinghua.com/html/9.html" class="navigation navigation-prev">
            <i class="fa fa-angle-left"></i>
        </a>
        <a href="http://doc.liangxinghua.com/html/11.html" class="navigation navigation-next">
            <i class="fa fa-angle-right"></i>
        </a>
    </div>
</template>