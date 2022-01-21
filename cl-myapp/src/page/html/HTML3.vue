<template>
    <div class="book-body">
        <div class="body-inner">
            <div class="page-wrapper">
                <div class="page-inner">
                    <section class="normal">
                        <h1>HTML基础语法</h1>
                        <h4 id="h4-1-html-">
                            <a name="1、HTML语法由标签和属性组成" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>1、HTML语法由标签和属性组成
                        </h4>
                        <p>标签被尖括号 &lt; 和 &gt; 包围，并且成对出现，不同标签可以嵌套，对大小写不敏感，&lt;b&gt;和&lt;B&gt;效果一样。</p>
                        <h4 id="h4-2-html-">
                            <a name="2、HTML标签分为单标签和双标签两种类型" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>2、HTML标签分为单标签和双标签两种类型
                        </h4>
                        <p>
                            （1）单标签：由一个标签组成，使用时最好加上关闭（/）。
                            <br />常用单标签:
                        </p>
                        <ul>
                            <li>&lt;br /&gt; : 换行</li>
                            <li>&lt;hr /&gt; : 分割线</li>
                            <li>&lt;img /&gt; : 显示图片资源</li>
                            <li>&lt;meta /&gt; : 描述网页用于搜索引擎</li>
                            <li>&lt;link /&gt; : 定义文档与外部资源,常用于链接CSS外部样式表</li>
                            <li>&lt;input /&gt; : 表单输入框</li>
                            <li>&lt;param /&gt; : 定义网页中嵌入内容的运行时参数</li>
                        </ul>
                        <p>（2）双标签：由开始标签和结束标签组成，必须成对使用。除了单标签几乎都是双标签，例如&lt;p&gt;&lt;/p&gt;</p>
                        <h4 id="h4-3-html-">
                            <a name="3、HTML元素表示形式" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>3、HTML元素表示形式
                        </h4>
                        <p>
                            空元素: 例如&lt;br&gt;
                            <br />带属性的空元素: &lt;hr color="blue"&gt;
                            <br />带有内容的元素: &lt;title&gt;标题&lt;/title&gt;
                            <br />带有内容和属性的元素: &lt;font color="red"&gt;文字显示&lt;/font&gt;
                            <br />注意:对于&lt;br&gt;这类单标签，使用时最好写成&lt;br /&gt;
                        </p>
                        <h4 id="h4-4-">
                            <a name="4、注释" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>4、注释
                        </h4>
                        <p>
                            解释：增加代码可读性，可以出现在代码任何位置，不会在网页中显示。
                            <br />格式：&lt;!-- 注释 --&gt; 用惊叹号“!”和两个“-”开始，两个“-”结束。
                        </p>
                        <h4 id="h4-5-">
                            <a name="5、示例" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>5、示例
                        </h4>
                        <pre class="language-html"><code class="language-html"><span class="token doctype">&lt;!DOCTYPE HTML&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span
    class="token punctuation"
>&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span
    class="token punctuation"
>&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Content-Type<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text/html; charset=utf-8<span class="token punctuation">"</span></span><span
    class="token punctuation"
>&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span
    class="token punctuation"
>&gt;</span></span>HTML的代码注释<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span
    class="token punctuation"
>&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span
    class="token punctuation"
>&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span
    class="token punctuation"
>&gt;</span></span>
        <span class="token comment">&lt;!-- 单标签-换行 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>

        <span class="token comment">&lt;!-- 带属性标签 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>font</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>red<span class="token punctuation">"</span></span><span
    class="token punctuation"
>&gt;</span></span>文字显示<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>font</span><span
    class="token punctuation"
>&gt;</span></span>

        <span class="token comment">&lt;!--注释 begin--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span
    class="token punctuation"
>&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span
    class="token punctuation"
>&gt;</span></span>专做IT编程技能教程<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span
    class="token punctuation"
>&gt;</span></span>个人博客<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span
    class="token punctuation"
>&gt;</span></span><span
    class="token tag"
><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span
    class="token punctuation"
>&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span
    class="token punctuation"
>&gt;</span></span>
        <span class="token comment">&lt;!--注释 end--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span
    class="token punctuation"
>&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span
    class="token punctuation"
>&gt;</span></span>
</code></pre>
                    </section>
                </div>
            </div>
        </div>
        <a href="http://doc.liangxinghua.com/html/2.html" class="navigation navigation-prev">
            <i class="fa fa-angle-left"></i>
        </a>
        <a href="http://doc.liangxinghua.com/html/4.html" class="navigation navigation-next">
            <i class="fa fa-angle-right"></i>
        </a>
    </div>
</template>