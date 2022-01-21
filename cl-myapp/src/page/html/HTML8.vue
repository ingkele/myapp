<template>
    <div class="book-body">
        <div class="body-inner">
            <div class="page-wrapper">
                <div class="page-inner">
                    <section class="normal">
                        <h1>认识表单标签</h1>
                        <h4 id="h4-1-">
                            <a name="1、表单概述" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>1、表单概述
                        </h4>
                        <p>
                            （1）、表单功能
                            <br />表单是浏览器客户端与服务器端交互的重要手段，在网页中负责数据采集功能。
                        </p>
                        <p>
                            （2）、表单由三部分组成
                            <br />表单标签：用于描述表单处理程序的URL地址，数据提交的方式等表单的相关信息
                            <br />表单域：包括文本框、密码框、隐藏域、多行文本框、文件上传框、下拉选择框、单选框、多选框
                            <br />表单按钮：包括提交按钮、重置按钮、一般按钮。
                        </p>
                        <h4 id="h4-2-lt-form-gt-">
                            <a name="2、表单标签<form>" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>2、表单标签&lt;form&gt;
                        </h4>
                        <p>（1）、表单语法：</p>
                        <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>URL<span class="token punctuation">"</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>get/post<span class="token punctuation">"</span></span> <span class="token attr-name">enctype</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>MIME<span class="token punctuation">"</span></span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>打开方式<span class="token punctuation">"</span></span><span
    class="token punctuation"
>&gt;</span></span>
…
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span
    class="token punctuation"
>&gt;</span></span>
</code></pre>
                        <p>（2）、表单属性</p>
                        <ul>
                            <li>id：表单名称</li>
                            <li>name：表单名称</li>
                            <li>action：用来定义表单处理程序(ASP、JSP、PHP等),使用相对地址或绝对地址</li>
                            <li>method：定义表单数据从浏览器传送到服务器的方式，一般有两种：get和post</li>
                            <li>enctype：用于指定表单提交数据时所采用的编码方式，默认值：application/x-www-form-urlencoded</li>
                            <li>target：指定提交的结果文档显示的位置，很少使用。取值：_blank、_parent、_self、_top</li>
                        </ul>
                        <h4 id="h4-3-form-enctype-">
                            <a name="3、表单form的enctype属性各取值" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>3、表单form的enctype属性各取值
                        </h4>
                        <ul>
                            <li>text/plain：以纯文本的形式传送</li>
                            <li>application/x-www-form-urlencoded：默认的编码形式，即url编码形式</li>
                            <li>multipart/form-data：MIME编码，上传文件的表单必须选择该项</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
        <a href="http://doc.liangxinghua.com/html/7.html" class="navigation navigation-prev">
            <i class="fa fa-angle-left"></i>
        </a>
        <a href="http://doc.liangxinghua.com/html/9.html" class="navigation navigation-next">
            <i class="fa fa-angle-right"></i>
        </a>
    </div>
</template>