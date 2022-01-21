<template>
    <div class="book-body">
        <div class="body-inner">
            <div class="page-wrapper">
                <div class="page-inner">
                    <section class="normal">
                        <h1>HTML图像和超链接</h1>
                        <h4 id="h4-1-lt-img-gt-">
                            <a name="1、网页中插入图片标签<img/>" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>1、网页中插入图片标签&lt;img/&gt;
                        </h4>
                        <p>
                            格式：&lt;img src="URL" alt="名称" /&gt;
                            <br />示例：&lt;img src="img/1.jpg" alt="荷花" /&gt;
                            <br />属性：
                        </p>
                        <ul>
                            <li>src：图片的url路径，也就是来源，包含路径与名称</li>
                            <li>alt：提示文字，用于鼠标悬停或者图片加载不出来的时候显示，常用于SEO</li>
                            <li>width：图片宽度，绝对宽度像素表示，相对宽度百分比表示，为了不失真，通常只设置实际宽度像素</li>
                            <li>height：图片高度，绝对高度像素表示，相对高度百分比表示，为了不失真，通常只设置实际高度像素</li>
                            <li>border：边框</li>
                            <li>align：对齐方式，取值：top(顶)、right(右)、bottom(底)、left(左)、middle(中间)</li>
                            <li>vspace:垂直边距，即定义图片顶部与底部的空白</li>
                            <li>hspace：水平边距，即定义图片左侧与右侧的空白</li>
                        </ul>
                        <h4 id="h4-2-">
                            <a name="2、超链接—网页的灵魂" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>2、超链接—网页的灵魂
                        </h4>
                        <p>
                            <strong>(1)基本格式</strong>
                            <br />&lt;a href="URL" target="窗口名称" title="指向连接显示的文字"&gt;超链接名称&lt;/a&gt;
                        </p>
                        <p>
                            <strong>(2)属性</strong>
                            <br />href：链接指向的目标地址
                            <br />target:用于指定打开链接的目标窗口,取值如下：
                        </p>
                        <ul>
                            <li>_blank：在新窗口中打开</li>
                            <li>_parent：在上一级窗口，即父窗口中打开，框架中常用</li>
                            <li>_self：当前窗口中打开，一般不设置，默认选项</li>
                            <li>_top：最顶级的浏览器窗口中打开，忽略任何框架</li>
                        </ul>
                        <p>
                            <strong>(3)链接路径分析</strong>
                            <br />URL(Uniform Resource Locator)中文名字为“统一资源定位器,即请求资源的地址。
                            <br />链接路径分类：
                        </p>
                        <ul>
                            <li>
                                绝对路径 如：
                                <a href="http://www.yanfadi.com">http://www.yanfadi.com</a>
                            </li>
                            <li>相对路径 如：new/index.html</li>
                            <li>根路径 如：file：根文件夹</li>
                        </ul>
                        <p>
                            <strong>(4)链接种类</strong>
                        </p>
                        <ul>
                            <li>文字链接 例如：&lt;a href="网站"&gt;紫沐兜&lt;/a&gt;</li>
                            <li>图像链接 例如：&lt;a href=”网站&gt;&lt;img src="img/logo.png" /&gt;&lt;/a&gt;</li>
                            <li>锚点链接：链接到当前网页的任意位置,指向锚时需加“#”</li>
                        </ul>
                        <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#one<span class="token punctuation">"</span></span><span
    class="token punctuation"
>&gt;</span></span>第一段<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span
    class="token punctuation"
>&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#one<span class="token punctuation">"</span></span><span
    class="token punctuation"
>&gt;</span></span>第一段内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span
    class="token punctuation"
>&gt;</span></span>

//E-mail链接 例如：
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>mailto:865207900@qq.com<span class="token punctuation">"</span></span><span
    class="token punctuation"
>&gt;</span></span>联系站长<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span
    class="token punctuation"
>&gt;</span></span>

// FTP链接 例如：
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ftp://主机地址<span class="token punctuation">"</span></span><span
    class="token punctuation"
>&gt;</span></span>进入<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span
    class="token punctuation"
>&gt;</span></span>
</code></pre>
                    </section>
                </div>
            </div>
        </div>
        <a href="http://doc.liangxinghua.com/html/4.html" class="navigation navigation-prev">
            <i class="fa fa-angle-left"></i>
        </a>
        <a href="http://doc.liangxinghua.com/html/6.html" class="navigation navigation-next">
            <i class="fa fa-angle-right"></i>
        </a>
    </div>
</template>