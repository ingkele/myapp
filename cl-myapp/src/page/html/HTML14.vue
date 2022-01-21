<template>
    <div class="book-body">
        <div class="body-inner">
            <div class="page-wrapper">
                <div class="page-inner">
                    <section class="normal">
                        <h1>meta标签使用</h1>
                        <h4 id="h4--">
                            <a name="一、定义" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>一、定义
                        </h4>
                        <p>
                            1、meta标签是用来描述一盒HTML网页文档的属性，例如作者、时间、网页描述、关键词、页面刷新等
                            <br />2、meta标签位于文档的头部，不包含任何内容
                            <br />3、meta标签的属性定义了与文档相关联的名称/值对，是一个辅助标签
                            <br />4、示例：
                        </p>
                        <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span
    class="token punctuation"
>&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Content-Type<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text/html; charset=UTF-8<span class="token punctuation">"</span></span><span
    class="token punctuation"
>&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>keywords<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>关键词<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>description<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>描述<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span
    class="token punctuation"
>&gt;</span></span>
</code></pre>
                        <p>
                            5、组成
                            <br />meta标签共有两个属性，它们分别是http-equiv属性和name属性，不同的属性又有不同的参数值
                        </p>
                        <h4 id="h4--name-">
                            <a name="二、name属性" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>二、name属性
                        </h4>
                        <p>
                            <strong>1、Keywords（关键字）</strong>
                            <br />说明：向搜索引擎说明你网页的关键词
                            <br />用法：&lt;meta name ="keywords" content="紫沐兜,经验分享"&gt;
                            <br />
                            <strong>2、description（网站内容描述）</strong>
                            <br />说明：向搜索引擎说明你网站的主要内容
                            <br />用法：&lt;meta name ="description" content="紫沐兜,经验分享"&gt;
                            <br />
                            <strong>3、author（作者）</strong>
                            <br />说明：告诉搜索引擎你网站的作者，网页版权信息
                            <br />用法：&lt;meta name="author" contect="你的姓名"&gt;
                            <br />
                            <strong>4、Robots（机器人向导）</strong>
                            <br />说明：用来告诉搜索引擎机器人抓取哪些页面
                            <br />Robots属性说明如下：
                        </p>
                        <ul>
                            <li>all：文件将被检索，且页面上的链接可以被查询</li>
                            <li>none：文件将不被检索，且页面上的链接不可以被查询</li>
                            <li>index：文件将被检索</li>
                            <li>follow：页面上的链接可以被查询</li>
                            <li>noindex：文件将不被检索，但页面上的链接可以被查询</li>
                            <li>nofollow：文件将不被检索，页面上的链接可以被查询</li>
                        </ul>
                        <p>用法：&lt;meta name="robots" content="none"&gt;</p>
                        <p>
                            <strong>5、generator</strong>
                            <br />说明：用以说明网站是什么软件制作的
                            <br />用法：&lt;meta name="generator" content="eclipse" /&gt;
                        </p>
                        <h4 id="h4--http-equiv-">
                            <a name="三、http-equiv属性" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>三、http-equiv属性
                        </h4>
                        <p>
                            <strong>1、Expires（期限）</strong>
                            <br />说明：用于设定网页的到期时间。一旦网页过期，必须到服务器上重新传输
                            <br />用法：&lt;meta http-equiv="expires" content="Fri,12 Jan 2001 18:18:18 GMT"&gt;
                            <br />注意：必须使用GMT的时间格式
                            <br />
                            <strong>2、Pragma(cache模式）</strong>
                            <br />说明：禁止浏览器从本地计算机的缓存中访问页面内容
                            <br />用法：&lt;meta http-equiv="Pragma" content="no-cache"&gt;
                            <br />注意：这样设定，访问者将无法脱机浏览
                            <br />
                            <strong>3、Refresh（刷新）</strong>
                            <br />说明：自动刷新并指向新页面
                            <br />用法：&lt;meta http-equiv="Refresh" content="2;URL"&gt; (注意后面的引号,分别在秒数的前面和网址的后面)
                            <br />注意：其中的2是指停留2秒钟后自动刷新到URL网址
                            <br />
                            <strong>4、Set-Cookie(cookie设定）</strong>
                            <br />说明：如果网页过期，那么存盘的cookie将被删除
                            <br />用法：&lt;meta http-equiv="Set-Cookie" content="cookievalue=xxx; expires=Friday,12-Jan-2001 18:18:18 GMT; path=/"&gt;
                            <br />注意：必须使用GMT的时间格式
                            <br />
                            <strong>5、Window-target（显示窗口的设定）</strong>
                            <br />说明：强制页面在当前窗口以独立页面显示
                            <br />用法：&lt;meta http-equiv="Window-target" content="_top"&gt;
                            <br />注意：用来防止别人在框架里调用自己的页面
                            <br />
                            <strong>6、content-Language（显示语言的设定）</strong>
                            <br />说明：用以说明主页制作所使用的文字以及语言
                            <br />用法：&lt;meta http-equiv="Content-Language" content="zh-cn" /&gt;
                            <br />解析：上面zh代表语言代码，cn代表国家版本，即primary-code为语言代码,subcode为国家代码这两部分组成
                            <br />常见的语言代码：
                        </p>
                        <ul>
                            <li>zh (Chinese)中国</li>
                            <li>fr (French)法国</li>
                            <li>de (German)德国</li>
                            <li>it (Italian)意大利</li>
                            <li>nl (Dutch)荷兰</li>
                            <li>el (Greek)希腊</li>
                            <li>es (Spanish)西班牙</li>
                            <li>pt (Portuguese)葡萄牙</li>
                            <li>ar (Arabic)阿拉伯</li>
                            <li>ru (Russian)俄罗斯</li>
                            <li>ja (Japanese)日本</li>
                        </ul>
                        <p>
                            <strong>7、content-Type（显示字符集的设定）</strong>
                            <br />说明：设定页面使用的字符集
                            <br />用法：&lt;meta http-equiv="Content-Type" content="text/html; charset=UTF-8"&gt;
                            <br />常用字符编码：
                        </p>
                        <ul>
                            <li>GB2312：简体中文</li>
                            <li>BIG5：繁体中文</li>
                            <li>iso-2022-jp：日文</li>
                            <li>ks_c_5601：韩文</li>
                            <li>ISO-8859-1：英文</li>
                            <li>UTF-8：世界通用语言编码（最常用的）</li>
                        </ul>
                        <h4 id="h4--">
                            <a name="四、示例总结" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>四、示例总结
                        </h4>
                        <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span
    class="token punctuation"
>&gt;</span></span>
    <span class="token comment">&lt;!-- 关键词 --&gt;</span>
    &lt;meta name ="keywords" content="紫沐兜,经验分享"&gt;
    <span
    class="token comment"
>&lt;!-- 描述 --&gt;</span>
    &lt;meta name ="description" content="紫沐兜,经验分享"&gt;
    <span
    class="token comment"
>&lt;!-- 描作者--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>author<span class="token punctuation">"</span></span> <span class="token attr-name">contect</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>你的姓名<span class="token punctuation">"</span></span><span
    class="token punctuation"
>&gt;</span></span>
    <span class="token comment">&lt;!-- 制作工具--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>generator<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>eclipse<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token comment">&lt;!-- 机器人向导--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>robots<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>none<span class="token punctuation">"</span></span><span
    class="token punctuation"
>&gt;</span></span>
    <span class="token comment">&lt;!-- 有效时间--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>expires<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Fri,12 Jan 2001 18:18:18 GMT<span class="token punctuation">"</span></span><span
    class="token punctuation"
>&gt;</span></span>
    <span class="token comment">&lt;!-- 禁用缓存 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Pragma<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>no-cache<span class="token punctuation">"</span></span><span
    class="token punctuation"
>&gt;</span></span>
    <span class="token comment">&lt;!-- 2秒刷新--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Refresh<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>2;URL<span class="token punctuation">"</span></span><span
    class="token punctuation"
>&gt;</span></span>
    <span class="token comment">&lt;!-- cookie设定 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Set-Cookie<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>cookievalue=xxx; expires=Friday,12-Jan-2001 18:18:18 GMT; path=/<span class="token punctuation">"</span></span><span
    class="token punctuation"
>&gt;</span></span>
    <span class="token comment">&lt;!-- 显示顶层窗口--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Window-target<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>_top<span class="token punctuation">"</span></span><span
    class="token punctuation"
>&gt;</span></span>
    <span class="token comment">&lt;!-- UTF-8编码 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Content-Type<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text/html; charset=UTF-8<span class="token punctuation">"</span></span><span
    class="token punctuation"
>&gt;</span></span>
    <span class="token comment">&lt;!-- 中文--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Content-Language<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>zh-cn<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span
    class="token punctuation"
>&gt;</span></span>
</code></pre>
                    </section>
                </div>
            </div>
        </div>
        <a href="http://doc.liangxinghua.com/html/13.html" class="navigation navigation-prev">
            <i class="fa fa-angle-left"></i>
        </a>
    </div>
</template>