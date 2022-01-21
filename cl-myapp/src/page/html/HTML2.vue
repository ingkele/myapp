<template>
    <div class="book-body">
        <div class="body-inner">
            <div class="page-wrapper">
                <div class="page-inner">
                    <section class="normal">
                        <h1>HTML基本结构</h1>
                        <h4 id="h4-1-html-">
                            <a name="1、HTML基本结构" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>1、HTML基本结构
                        </h4>
                        <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span
    class="token punctuation"
>&gt;</span></span> <span class="token comment">&lt;!--根控制开始标签 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span
    class="token punctuation"
>&gt;</span></span> <span class="token comment">&lt;!-- 头开始标签 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span
    class="token punctuation"
>&gt;</span></span>标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span
    class="token punctuation"
>&gt;</span></span> <span class="token comment">&lt;!-- 浏览器窗口标题 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span
    class="token punctuation"
>&gt;</span></span> <span class="token comment">&lt;!-- 头结束标签 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span
    class="token punctuation"
>&gt;</span></span> <span class="token comment">&lt;!-- 主体开始标签 --&gt;</span>
    内容显示区域
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span
    class="token punctuation"
>&gt;</span></span> <span class="token comment">&lt;!-- 主题结束标签 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span
    class="token punctuation"
>&gt;</span></span> <span class="token comment">&lt;!-- 根控制结束标签 --&gt;</span>
</code></pre>
                        <p>
                            以上就是一个最基本的网页，下面为解释：
                            <br />（1） HTML文档是由html、head和body三大元素构成。
                            <br />（2） &lt;html&gt;…&lt;/html&gt;: 表示文档最外层的元素，浏览器以&lt;html&gt;开始解释，到&lt;/html&gt;结束，所有网页内容都必须放在他们之间。
                            <br />（3） &lt;head&gt;…&lt;/head&gt;: 表示HTML文档头标签，不显示在正文中。
                            <br />（4） &lt;title&gt;…&lt;/title&gt;: 表示文本的标题，它被显示在浏览器窗口的标题栏中。
                            <br />（5） &lt;body&gt;…&lt;/body&gt;: 表示文档的主体部分，在浏览器中要显示的内容。
                        </p>
                        <h4 id="h4-2-">
                            <a name="2、示例" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>2、示例
                        </h4>
                        <pre class="language-html"><code class="language-html"><span class="token doctype">&lt;!DOCTYPE HTML&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span
    class="token punctuation"
>&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Content-Type<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text/html; charset=utf-8<span class="token punctuation">"</span></span><span
    class="token punctuation"
>&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span
    class="token punctuation"
>&gt;</span></span>认识html文件基本结构<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span
    class="token punctuation"
>&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span
    class="token punctuation"
>&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span
    class="token punctuation"
>&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span
    class="token punctuation"
>&gt;</span></span>在本小节中，你将学会认识html文件基本结构<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span
    class="token punctuation"
>&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span
    class="token punctuation"
>&gt;</span></span>
</code></pre>
                    </section>
                </div>
            </div>
        </div>
        <a href="http://doc.liangxinghua.com/html/1.html" class="navigation navigation-prev">
            <i class="fa fa-angle-left"></i>
        </a>
        <a href="http://doc.liangxinghua.com/html/3.html" class="navigation navigation-next">
            <i class="fa fa-angle-right"></i>
        </a>
    </div>
</template>