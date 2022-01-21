<template>
    <div class="book-body">
        <div class="body-inner">
            <div class="page-wrapper">
                <div class="page-inner">
                    <section class="normal">
                        <h1>HTML文字颜色与排版</h1>
                        <h4 id="h4-1-html-">
                            <a name="1、HTML中颜色表示法" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>1、HTML中颜色表示法
                        </h4>
                        <p>
                            三种表示方法：
                            <br />（1）直接用英文单词表示，例如:white(白色)
                            <br />（2）以六位十六进制表示，例如:#ffffff(白色)
                            <br />（3）以RGB模式表示，也就是用3个0至255之间的数字来分别表示红绿蓝三色的比重，例如 rgb(255，255，255) (白色)
                        </p>
                        <h4 id="h4-2-lt-br-gt-">
                            <a name="2、回车换行<br />" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>2、回车换行&lt;br /&gt;
                        </h4>
                        <p>解释：单标签、无属性标签，用于强制换行</p>
                        <h4 id="h4-3-lt-p-gt-">
                            <a name="3、段落<p>" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>3、段落&lt;p&gt;
                        </h4>
                        <p>
                            解释：用以区别文字的不同段落
                            <br />格式：&lt;p align="参数"&gt;…&lt;/p&gt;
                            <br />align参数取值：left(默认)、center、right，分别表示段落文字居左、居中、居右对齐。
                        </p>
                        <h4 id="h4-4-lt-hr-gt-">
                            <a name="4、水平线 <hr />" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>4、水平线 &lt;hr /&gt;
                        </h4>
                        <p>
                            解释：单标签，显示水平线，段落之间的分隔
                            <br />格式：&lt;hr /&gt;
                            <br />属性：
                        </p>
                        <ul>
                            <li>size:设置水平分割线的粗细，以数值表示，值越大，线越粗。以百分比表示，百分比越大，线越粗。</li>
                            <li>width:设置水平分隔线的宽度，以数值表示，宽度固定。以百分比表示，窗口随着百分比变化。</li>
                            <li>align:设置对齐方式(left,center,right),默认center。</li>
                            <li>color:设置颜色，默认black(黑色)。</li>
                            <li>noshade:取消水平线阴影</li>
                        </ul>
                        <p>使用建议：不建议直接使用，建议使用样式替换。</p>
                        <h4 id="h4-5-lt-center-gt-">
                            <a name="5、居中对齐<center>" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>5、居中对齐&lt;center&gt;
                        </h4>
                        <p>
                            解释：双标签，用于文字图片等居中显示，被废弃的标签，html5不支持。
                            <br />格式：&lt;center&gt;…&lt;/center&gt;
                        </p>
                        <h4 id="h4-6-lt-pre-gt-">
                            <a name="6、预格式化文本标签<pre>" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>6、预格式化文本标签&lt;pre&gt;
                        </h4>
                        <p>
                            解释：双标签，用于保留原始文字排版格式(空格、换行等)显示。
                            <br />格式：&lt;pre&gt;…&lt;/pre&gt;
                        </p>
                        <h4 id="h4-7-">
                            <a name="7、空格" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>7、空格
                        </h4>
                        <p>
                            解释：用&nbsp;表示，两个空格表示一个汉字的位置。
                            <br />使用建议：HTML会自动截去多余的空格。不管你加多少空格，都被看做一个空格
                        </p>
                        <h4 id="h4-8-lt-font-gt-">
                            <a name="8、文字标签<font>" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>8、文字标签&lt;font&gt;
                        </h4>
                        <p>
                            解释：规定文本的字体、字体尺寸、字体颜色
                            <br />格式：&lt;font&gt;…&lt;/font&gt;
                            <br />属性:
                        </p>
                        <ul>
                            <li>size：设置文字大小，参数取值范围1-7，数字越大，字体越大。默认3</li>
                            <li>color：设置文字颜色，默认黑色</li>
                            <li>face：设置文字使用字体，默认宋体</li>
                        </ul>
                        <h4 id="h4-9-">
                            <a name="9、标题文字" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>9、标题文字
                        </h4>
                        <p>&lt;h1&gt;…&lt;/h1&gt;：一号标题</p>
                        <p>&lt;h2&gt;…&lt;/h2&gt;：二号标题</p>
                        <p>&lt;h3&gt;…&lt;/h3&gt;：三号标题</p>
                        <p>&lt;h4&gt;…&lt;/h4&gt;：四号标题</p>
                        <p>&lt;h5&gt;…&lt;/h5&gt;：五号标题</p>
                        <p>
                            &lt;h6&gt;…&lt;/h6&gt;：六号标题
                            <br />说明：数字越小字体越大
                        </p>
                        <h4 id="h4-10-lt-blockquote-gt-">
                            <a name="10、引用文本<blockquote>" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>10、引用文本&lt;blockquote&gt;
                        </h4>
                        <p>
                            解释：用于语句块的引用
                            <br />格式：&lt;blockquote&gt;…&lt;/blockquote&gt;
                            <br />属性：属性名称cite,属性值为URL
                        </p>
                        <h4 id="h4-11-">
                            <a name="11、逻辑字体" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>11、逻辑字体
                        </h4>
                        <p>解释：不指明字体如何显示，让Web浏览器自行决定显示方式。</p>
                        <p>
                            &lt;address&gt;将网页需要显示的地址文字突出显示，斜体显示。&lt;/address&gt;
                            <br />&lt;em&gt;用于强调，斜体表示&lt;/em&gt;
                            <br />&lt;strong&gt;特别强调，粗体显示&lt;/strong&gt;
                            <br />&lt;code&gt;显示命令与代码&lt;/code&gt;
                            <br />&lt;samp&gt;用于字母序列&lt;/samp&gt;
                            <br />&lt;kbd&gt;定义键盘文本&lt;/kbd&gt;
                            <br />&lt;var&gt;表示程序变量名，斜体显示&lt;/var&gt;
                            <br />&lt;dfn&gt;对特殊术语或短语的定义,斜体显示&lt;/dfn&gt;
                            <br />&lt;cite&gt;用于标题文字，斜体显示&lt;/cite&gt;
                        </p>
                        <p>
                            &lt;strike&gt;删除线&lt;/strike&gt;
                            <br />&lt;small&gt;缩小字体，比网页字体减少一号&lt;/small&gt;
                        </p>
                        <p>&lt;big&gt;放大字体，比网页中缺省字体放大一号&lt;/big&gt;</p>
                        <h4 id="h4-12-">
                            <a name="12、物理字体" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>12、物理字体
                        </h4>
                        <p>
                            解释：物理字体明确了字体类型，表明无论何种浏览器遇到这些标签，都以相同的方式显示。
                            <br />&lt;b&gt;粗体&lt;/b&gt;
                            <br />&lt;i&gt;斜体&lt;/i&gt;
                            <br />&lt;u&gt;下划线&lt;/u&gt;
                            <br />&lt;sup&gt;上标，将文字显示为上标&lt;/sup&gt;
                            <br />&lt;sub&gt;下标，将文字显示为下标&lt;/sub&gt;
                        </p>
                        <p>
                            &lt;tt&gt;宽字体显示文字，相当于打字机的效果&lt;/tt&gt;
                            <br />&lt;s&gt;删除线&lt;/s&gt;
                        </p>
                    </section>
                </div>
            </div>
        </div>
        <a href="http://doc.liangxinghua.com/html/3.html" class="navigation navigation-prev">
            <i class="fa fa-angle-left"></i>
        </a>
        <a href="http://doc.liangxinghua.com/html/5.html" class="navigation navigation-next">
            <i class="fa fa-angle-right"></i>
        </a>
    </div>
</template>