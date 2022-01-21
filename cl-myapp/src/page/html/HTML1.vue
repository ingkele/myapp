<template>
    <div class="book-body">
        <div class="body-inner">
            <div class="page-wrapper">
                <div class="page-inner">
                    <section class="normal">
                        <h1>HTML介绍</h1>
                        <h4 id="h4-1-html-">
                            <a name="1、什么是 HTML？" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>1、什么是 HTML？
                        </h4>
                        <p>HTML 是用来描述网页的一种语言。</p>
                        <ul>
                            <li>HTML 指的是超文本标记语言 (Hyper Text Markup Language)</li>
                            <li>HTML 不是一种编程语言，而是一种标记语言 (markup language)</li>
                            <li>标记语言是一套标记标签 (markup tag)</li>
                            <li>HTML 使用标记标签来描述网页</li>
                        </ul>
                        <h4 id="h4-2-html-">
                            <a name="2、HTML 标签" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>2、HTML 标签
                        </h4>
                        <p>HTML 标记标签通常被称为 HTML 标签 (HTML tag)。</p>
                        <ul>
                            <li>HTML 标签是由尖括号包围的关键词，比如 &lt;html&gt;</li>
                            <li>HTML 标签通常是成对出现的，比如 &lt;b&gt; 和 &lt;/b&gt;</li>
                            <li>标签对中的第一个标签是开始标签，第二个标签是结束标签</li>
                            <li>开始和结束标签也被称为开放标签和闭合标签</li>
                        </ul>
                        <h4 id="h4-3-html-">
                            <a name="3、HTML 文档 = 网页" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>3、HTML 文档 = 网页
                        </h4>
                        <ul>
                            <li>HTML 文档描述网页</li>
                            <li>HTML 文档包含 HTML 标签和纯文本</li>
                            <li>HTML 文档也被称为网页</li>
                            <li>Web 浏览器的作用是读取 HTML 文档，并以网页的形式显示出它们。浏览器不会显示 HTML 标签，而是使用标签来解释页面的内容</li>
                        </ul>
                        <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span
    class="token punctuation"
>&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span
    class="token punctuation"
>&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span
    class="token punctuation"
>&gt;</span></span>My First Heading<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span
    class="token punctuation"
>&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span
    class="token punctuation"
>&gt;</span></span>My first paragraph.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span
    class="token punctuation"
>&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span
    class="token punctuation"
>&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span
    class="token punctuation"
>&gt;</span></span>
</code></pre>
                        <p>
                            <strong>代码解释：</strong>
                        </p>
                        <p>&lt;html&gt; 与 &lt;/html&gt; 之间的文本描述网页</p>
                        <p>&lt;body&gt; 与 &lt;/body&gt; 之间的文本是可见的页面内容</p>
                        <p>&lt;h1&gt; 与 &lt;/h1&gt; 之间的文本被显示为标题</p>
                        <p>&lt;p&gt; 与 &lt;/p&gt; 之间的文本被显示为段落</p>
                    </section>
                </div>
            </div>
        </div>
        <a href="http://doc.liangxinghua.com/html/2.html" class="navigation navigation-next">
            <i class="fa fa-angle-right"></i>
        </a>
    </div>
</template>