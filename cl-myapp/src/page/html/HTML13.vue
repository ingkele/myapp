<template>
    <div class="book-body">
        <div class="body-inner">
            <div class="page-wrapper">
                <div class="page-inner">
                    <section class="normal">
                        <h1>DOCTYPE彻底掌握</h1>
                        <h3 id="h3--doctype">
                            <a name="一、DOCTYPE" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>一、DOCTYPE
                        </h3>
                        <h4 id="h4-1-doctype-">
                            <a name="1、什么是DOCTYPE?" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>1、什么是DOCTYPE?
                        </h4>
                        <p>DOCTYPE是Document Type（文档类型）的简写，它是一种标准通用标记语言的文档类型声明。目的是要告诉标准通用标记语言解析器，它应该使用什么样的文档类型定义（DTD）来正确解析文档。</p>
                        <h4 id="h4-2-">
                            <a name="2、定义与用法" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>2、定义与用法
                        </h4>
                        <p>
                            &lt;!DOCTYPE&gt; 必须声明，否则效果或出现差异。
                            <br />&lt;!DOCTYPE&gt; 声明必须是 HTML 文档的第一行，位于 &lt;html&gt; 标签之前。
                            <br />&lt;!DOCTYPE&gt; 声明不是 HTML 标签，它是指示 web 浏览器关于页面使用哪个 HTML 版本进行编写的指令。
                            <br />&lt;!DOCTYPE&gt; 声明没有结束标签。
                            <br />&lt;!DOCTYPE&gt; 声明对大小写不敏感。
                            <br />在 HTML 4.01 中，&lt;!DOCTYPE&gt; 声明引用 DTD，因为 HTML 4.01 基于 SGML。DTD 规定了标记语言的规则，这样浏览器才能正确地呈现内容。
                        </p>
                        <h4 id="h4-3-doctype-">
                            <a name="3、官方定义-DOCTYPE语法" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>3、官方定义-DOCTYPE语法
                        </h4>
                        <p>HTML 顶级元素 可用性 “注册//组织//类型 标签//定义 语言””URL”</p>
                        <h4 id="h4-4-">
                            <a name="4、官方定义-可能值" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>4、官方定义-可能值
                        </h4>
                        <p>
                            （1）顶级元素：指定 DTD 中声明的顶级元素类型。这与声明的 SGML 文档类型相对应。 HTML 默认。HTML。
                            <br />可用性：指定正式公开标识符(FPI)是可公开访问的对象还是系统资源。 PUBLIC 默认。可公开访问的对象。SYSTEM 系统资源，如本地文件或 URL。
                            <br />（2）注册：指定组织是否由国际标准化组织(ISO)注册。 + 默认。组织名称已注册。- 组织名称未注册。Internet 工程任务组(IETF)和万维网协会(W3C)并非注册的 ISO 组织。
                            <br />（3）组织：指定表明负责由 !DOCTYPE 声明引用的 DTD 的创建和维护的团体或组织的名称，即 OwnderID。 IETF IETF。 W3C W3C
                            <br />（4）类型：指定公开文本类，即所引用的对象类型。 DTD 默认。DTD。
                            <br />（5）标签：指定公开文本描述，即对所引用的公开文本的唯一描述性名称。后面可附带版本号。 HTML 默认。HTML。
                            <br />（6）定义：指定文档类型定义。
                        </p>
                        <ul>
                            <li>Frameset 框架集文档</li>
                            <li>Strict 排除所有 W3C 专家希望逐步淘汰的代表性属性和元素，因为样式表已经很完善了</li>
                            <li>Transitional 包含除 frameSet 元素的全部内容</li>
                        </ul>
                        <p>
                            （7）语言：指定公开文本语言，即用于创建所引用对象的自然语言编码系统。该语言定义已编写为 ISO 639 语言代码(大写两个字母)。 EN 默认。英语。
                            <br />（8）URL：指定所引用对象的位置
                        </p>
                        <h3 id="h3--doctype-">
                            <a name="二、常用的 DOCTYPE 声明" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>二、常用的 DOCTYPE 声明
                        </h3>
                        <h4 id="h4-1-html5-">
                            <a name="1、HTML5(只有一种)" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>1、HTML5(只有一种)
                        </h4>
                        <p>&lt;!DOCTYPE html&gt;</p>
                        <h4 id="h4-2-html-4-01-strict-">
                            <a name="2、HTML 4.01 Strict (严格的)" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>2、HTML 4.01 Strict (严格的)
                        </h4>
                        <p>该DTD包含所有 HTML 元素和属性，但不包括展示性的和弃用的元素（比如 font）。不允许框架集（Framesets）</p>
                        <pre class="language-html"><code class="language-html"><span
    class="token doctype"
>&lt;!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt;</span>
</code></pre>
                        <h4 id="h4-3-html-4-01-transitional-">
                            <a name="3、HTML 4.01 Transitional (过渡的)" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>3、HTML 4.01 Transitional (过渡的)
                        </h4>
                        <p>该 DTD 包含所有 HTML 元素和属性，包括展示性的和弃用的元素（比如 font）。不允许框架集（Framesets）</p>
                        <pre class="language-html"><code class="language-html"><span
    class="token doctype"
>&lt;!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"&gt;</span>
</code></pre>
                        <h4 id="h4-4-html-4-01-frameset-">
                            <a name="4、HTML 4.01 Frameset (框架的)" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>4、HTML 4.01 Frameset (框架的)
                        </h4>
                        <p>该 DTD 等同于 HTML 4.01 Transitional，但允许框架集内容</p>
                        <pre class="language-html"><code class="language-html"><span
    class="token doctype"
>&lt;!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd"&gt;</span>
</code></pre>
                        <h4 id="h4-5-xhtml-1-0-strict-">
                            <a name="5、XHTML 1.0 Strict (严格的)" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>5、XHTML 1.0 Strict (严格的)
                        </h4>
                        <p>该 DTD 包含所有 HTML 元素和属性，但不包括展示性的和弃用的元素（比如 font）。不允许框架集（Framesets）。必须以格式正确的 XML 来编写标记</p>
                        <pre class="language-html"><code class="language-html"><span
    class="token doctype"
>&lt;!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"&gt;</span>
</code></pre>
                        <h4 id="h4-6-xhtml-1-0-transitiona-">
                            <a name="6、XHTML 1.0 Transitiona (过渡的)" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>6、XHTML 1.0 Transitiona (过渡的)
                        </h4>
                        <p>该 DTD 包含所有 HTML 元素和属性，包括展示性的和弃用的元素（比如 font）。不允许框架集（Framesets）。必须以格式正确的 XML 来编写标记</p>
                        <pre class="language-html"><code class="language-html"><span
    class="token doctype"
>&lt;!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"&gt;</span>
</code></pre>
                        <h4 id="h4-7-xhtml-1-0-frameset-">
                            <a name="7、XHTML 1.0 Frameset (框架的)" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>7、XHTML 1.0 Frameset (框架的)
                        </h4>
                        <p>该 DTD 等同于 XHTML 1.0 Transitional，但允许框架集内容</p>
                        <pre class="language-html"><code class="language-html"><span
    class="token doctype"
>&lt;!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd"&gt;</span>
</code></pre>
                        <h4 id="h4-8-xhtml-1-1">
                            <a name="8、XHTML 1.1" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>8、XHTML 1.1
                        </h4>
                        <p>该 DTD 等同于 XHTML 1.0 Strict，但允许添加模型（例如提供对东亚语系的 ruby 支持）</p>
                        <pre class="language-html"><code class="language-html"><span
    class="token doctype"
>&lt;!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd"&gt;</span>
</code></pre>
                    </section>
                </div>
            </div>
        </div>
        <a href="http://doc.liangxinghua.com/html/12.html" class="navigation navigation-prev">
            <i class="fa fa-angle-left"></i>
        </a>
        <a href="http://doc.liangxinghua.com/html/14.html" class="navigation navigation-next">
            <i class="fa fa-angle-right"></i>
        </a>
    </div>
</template>