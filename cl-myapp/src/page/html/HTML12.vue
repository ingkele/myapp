<template>
    <div class="book-body">
        <div class="body-inner">
            <div class="page-wrapper">
                <div class="page-inner">
                    <section class="normal">
                        <h1>特殊字符</h1>
                        <h4 id="h4--html-character-entities-">
                            <a name="一、HTML字符实体(Character Entities)" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>一、HTML字符实体(Character Entities)
                        </h4>
                        <p>
                            <strong>1、实体</strong>
                            <br />在 HTML 中，某些字符是预留的。
                            <br />在 HTML 中不能使用小于号（&lt;）和大于号（&gt;），这是因为浏览器会误认为它们是标签。
                            <br />如果希望正确地显示预留字符，我们必须在 HTML 源代码中使用字符实体（character entities)。
                        </p>
                        <p>
                            <strong>2、字符实体组成</strong>
                            <br />字符实体由三部分组成：
                            <br />第一部分：&amp; 符号，英文叫ampersand
                            <br />第二部分：实体(Entity)名字或 # 加上实体(Entity)编号
                            <br />第三部分：; 分号
                            <br />示例：小于符号—- &lt; 或 &lt;
                            <br />注意：Entity区分大小写
                        </p>
                        <h4 id="h4--non-breaking-space-">
                            <a name="二、不间断空格(non-breaking space)" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>二、不间断空格(non-breaking space)
                        </h4>
                        <p>
                            1、Html中的不间断空格其实就是空格—-&nbsp;
                            <br />2、HTML会自动截去多余的空格。不管你加多少空格，都被看做一个空格。比如你在两个字之间加了10个空格，HTML会截去9个空格，只保留一个。为了在网页中增加空格，你可以使用&nbsp;表示空格。
                            <br />3、常用实体特殊符号如下：
                            <br />
                            <img
                                src="http://liangxinghua.com/uploads/image/20190213/1550026808.jpg"
                            />
                        </p>
                    </section>
                </div>
            </div>
        </div>
        <a href="http://doc.liangxinghua.com/html/11.html" class="navigation navigation-prev">
            <i class="fa fa-angle-left"></i>
        </a>
        <a href="http://doc.liangxinghua.com/html/13.html" class="navigation navigation-next">
            <i class="fa fa-angle-right"></i>
        </a>
    </div>
</template>