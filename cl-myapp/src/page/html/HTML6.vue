<template>
    <div class="book-body">
        <div class="body-inner">
            <div class="page-wrapper">
                <div class="page-inner">
                    <section class="normal">
                        <h1>网页常用列表</h1>
                        <h4 id="h4-1-lt-ul-gt-lt-li-gt-">
                            <a name="1、无序列表 <ul>和<li>" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>1、无序列表 &lt;ul&gt;和&lt;li&gt;
                        </h4>
                        <p>
                            解释：使用一组●(实心圆)、○(空心圆)、■(实心方形)等没有序号的符号表示每个列表项
                            <br />格式：
                        </p>
                        <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span
    class="token punctuation"
>&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span
    class="token punctuation"
>&gt;</span></span>列表项<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span
    class="token punctuation"
>&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span
    class="token punctuation"
>&gt;</span></span>列表项<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span
    class="token punctuation"
>&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span
    class="token punctuation"
>&gt;</span></span>
</code></pre>
                        <p>属性：名称：type，取值：dise(实心圆、默认)、circle(空心圆)、square(实心方块)</p>
                        <h4 id="h4-2-lt-ol-gt-lt-li-gt-">
                            <a name="2、有序列表 <ol>和<li>" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>2、有序列表 &lt;ol&gt;和&lt;li&gt;
                        </h4>
                        <p>
                            解释：按照数字或字母等顺序来排列列表项
                            <br />格式：
                        </p>
                        <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol</span><span
    class="token punctuation"
>&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span
    class="token punctuation"
>&gt;</span></span>列表项<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span
    class="token punctuation"
>&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span
    class="token punctuation"
>&gt;</span></span>列表项<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span
    class="token punctuation"
>&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol</span><span
    class="token punctuation"
>&gt;</span></span>
</code></pre>
                        <p>
                            属性1：名称type
                            <br />取值：
                        </p>
                        <ul>
                            <li>1：数字顺序 1,2,3,4…默认项</li>
                            <li>a：小写字母 a,b,c,d…</li>
                            <li>A：大写字母 A,B,C,D…</li>
                            <li>i：小写罗马数字 i,ii,iii…</li>
                            <li>I: 大写罗马数字 I,II,III…</li>
                        </ul>
                        <p>属性2：start属性，用于调整数字开始值</p>
                        <h4 id="h4-3-dl-dt-dd">
                            <a name="3、定义列表 dl dt dd" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>3、定义列表 dl dt dd
                        </h4>
                        <p>
                            解释：用于解释名词，不包含项目符号
                            <br />格式：
                        </p>
                        <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl</span><span
    class="token punctuation"
>&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dt</span><span
    class="token punctuation"
>&gt;</span></span>列表标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dt</span><span
    class="token punctuation"
>&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dd</span><span
    class="token punctuation"
>&gt;</span></span>列表内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dd</span><span
    class="token punctuation"
>&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dd</span><span
    class="token punctuation"
>&gt;</span></span>列表内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dd</span><span
    class="token punctuation"
>&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dl</span><span
    class="token punctuation"
>&gt;</span></span>
</code></pre>
                        <p>说明：dt和dd是放于dl标签内，标签dt与dd处于dl下相同级。dt不能放入dd内，dd不能放入dt内，不能单独使用。</p>
                    </section>
                </div>
            </div>
        </div>
        <a href="http://doc.liangxinghua.com/html/5.html" class="navigation navigation-prev">
            <i class="fa fa-angle-left"></i>
        </a>
        <a href="http://doc.liangxinghua.com/html/7.html" class="navigation navigation-next">
            <i class="fa fa-angle-right"></i>
        </a>
    </div>
</template>