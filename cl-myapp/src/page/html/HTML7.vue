<template>
    <div class="book-body">
        <div class="body-inner">
            <div class="page-wrapper">
                <div class="page-inner">
                    <section class="normal">
                        <h1>网页表格Table标签</h1>
                        <h4 id="h4--">
                            <a name="一、表格基本格式" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>一、表格基本格式
                        </h4>
                        <p>格式：</p>
                        <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span><span
    class="token punctuation"
>&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span
    class="token punctuation"
>&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span
    class="token punctuation"
>&gt;</span></span>表头1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span
    class="token punctuation"
>&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span
    class="token punctuation"
>&gt;</span></span>表头2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span
    class="token punctuation"
>&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span
    class="token punctuation"
>&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span
    class="token punctuation"
>&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span
    class="token punctuation"
>&gt;</span></span>内容1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span
    class="token punctuation"
>&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span
    class="token punctuation"
>&gt;</span></span>内容2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span
    class="token punctuation"
>&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span
    class="token punctuation"
>&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span
    class="token punctuation"
>&gt;</span></span>
</code></pre>
                        <p>说明：</p>
                        <p>&lt;table&gt;…&lt;/table&gt; 用来声明表格开始与结束</p>
                        <p>&lt;tr&gt;…&lt;/tr&gt; 用来设置表格的行</p>
                        <p>&lt;th&gt;…&lt;/th&gt; 用来设置表格标题栏位,默认字体加粗</p>
                        <p>&lt;td&gt;…&lt;/td&gt; 用来设置表格的列</p>
                        <h4 id="h4--">
                            <a name="二、表格完整格式" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>二、表格完整格式
                        </h4>
                        <p>格式：</p>
                        <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span><span
    class="token punctuation"
>&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>caption</span><span
    class="token punctuation"
>&gt;</span></span>表格标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>caption</span><span
    class="token punctuation"
>&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>thead</span><span
    class="token punctuation"
>&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span
    class="token punctuation"
>&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span
    class="token punctuation"
>&gt;</span></span>表头1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span
    class="token punctuation"
>&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span
    class="token punctuation"
>&gt;</span></span>表头2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span
    class="token punctuation"
>&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span
    class="token punctuation"
>&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>thead</span><span
    class="token punctuation"
>&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tbody</span><span
    class="token punctuation"
>&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span
    class="token punctuation"
>&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span
    class="token punctuation"
>&gt;</span></span>主体1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span
    class="token punctuation"
>&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span
    class="token punctuation"
>&gt;</span></span>主体2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span
    class="token punctuation"
>&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span
    class="token punctuation"
>&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tbody</span><span
    class="token punctuation"
>&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tfoot</span><span
    class="token punctuation"
>&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span
    class="token punctuation"
>&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span
    class="token punctuation"
>&gt;</span></span>页脚1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span
    class="token punctuation"
>&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span
    class="token punctuation"
>&gt;</span></span>页脚2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span
    class="token punctuation"
>&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span
    class="token punctuation"
>&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tfoot</span><span
    class="token punctuation"
>&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span
    class="token punctuation"
>&gt;</span></span>
</code></pre>
                        <p>说明：</p>
                        <p>&lt;caption&gt;…&lt;/caption&gt; 定义表格标题，每个表格只能定义一个标题，通常居中显示于表格之上</p>
                        <p>&lt;thead&gt;…&lt;/thead&gt; 定义表格的表头</p>
                        <p>&lt;tbody&gt;…&lt;/tbody&gt; 定义表格主体(正文)</p>
                        <p>
                            &lt;tfoot&gt;…&lt;/tfoot&gt; 定义表格页脚(脚注或表注)
                            <br />注意：表格的标签必须成对使用
                        </p>
                        <h4 id="h4--lt-table-gt-">
                            <a name="三、<table>标签属性" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>三、&lt;table&gt;标签属性
                        </h4>
                        <ul>
                            <li>border：设置表格边框的宽度 (取整数值，单位像素)</li>
                            <li>bordercolor：设置表格边框的颜色 (取英文或十六进制颜色)</li>
                            <li>bordercolorlight：设置表格亮边框颜色 (取英文或十六进制颜色)</li>
                            <li>bordercolordark：设置表格暗边框颜色 (取英文或十六进制颜色)</li>
                            <li>bgcolor：设置表格的背景颜色 (取英文或十六进制颜色)</li>
                            <li>background：设置表格的背景图片 (URL)</li>
                            <li>width：设置表格的宽度 (像素或百分比)</li>
                            <li>height：设置表格的高度 (像素或百分比)</li>
                            <li>cellspacing：设置单元格之间的间距 (像素或百分比)</li>
                            <li>cellpadding：设置表格单元格边框与单元内容之间的间距 (像素或百分比)</li>
                            <li>align：设置对齐方式，取值left(左对齐)、center(居中对齐)、right(右对齐)，建议不使用</li>
                            <li>summary：定义表格内容摘要 (字符串)</li>
                        </ul>
                        <h4 id="h4--lt-table-gt-">
                            <a name="四、<table>标签内部分割线与外部分割线的属性" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>四、&lt;table&gt;标签内部分割线与外部分割线的属性
                        </h4>
                        <p>（1）外部分隔线frame属性</p>
                        <ul>
                            <li>void：不显示表格边框，默认项</li>
                            <li>above：只显示表格上边框</li>
                            <li>below：只显示表格下边框</li>
                            <li>hsides：只显示表格上下边框</li>
                            <li>vsides：只显示表格左右边框</li>
                            <li>lhs：只显示表格左边框</li>
                            <li>rhs：只显示表格右边框</li>
                            <li>box/border：显示表格四个边上的边框</li>
                        </ul>
                        <p>（2）内部分隔线rules属性</p>
                        <ul>
                            <li>rows：只显示横向分隔线</li>
                            <li>cols：只显示纵向分隔线</li>
                            <li>none：不显示任何边框</li>
                            <li>all：显示所有边框</li>
                            <li>groups：显示行组与列组之间的线条,即在&lt;thead&gt;&lt;tbody&gt;&lt;tfoot&gt;之间显示横线</li>
                        </ul>
                        <h4 id="h4--lt-tr-gt-lt-th-gt-lt-td-gt-">
                            <a name="五、单元格<tr><th><td>标签属性" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>五、单元格&lt;tr&gt;&lt;th&gt;&lt;td&gt;标签属性
                        </h4>
                        <p>
                            （1）&lt;th&gt;和&lt;td&gt;都是插入单元格的标签，这两个标签必须嵌套在&lt;tr&gt;标签内,成对出现。
                            <br />（2）&lt;th&gt;用于表头标签，表头标签一般位于首行或首列，标签之间的内容就是位于该单元格内的标题内容,以粗体居中显示。
                            <br />（3）&lt;tr&gt;&lt;th&gt;&lt;td&gt;以下属性必须在border不等于0的情况下生效。
                        </p>
                        <ul>
                            <li>width：设置表格的宽度 (像素或百分比)</li>
                            <li>height：设置表格的高度 (像素或百分比)</li>
                            <li>bgcolor：设置表格的背景颜色 (取英文或十六进制颜色)</li>
                            <li>background：设置表格的背景图片 (URL)</li>
                            <li>align：设置水平方向对齐，取值left(左对齐)、center(居中对齐)、right(右对齐)</li>
                            <li>valign：设置垂直方向对齐，取值top(顶端)、middle(居中)、bottom(底部)、baseline(基线)</li>
                        </ul>
                        <p>（4）&lt;th&gt;和&lt;tr&gt;标签合并属性</p>
                        <ul>
                            <li>colspan：横向向右合并单元格的列</li>
                            <li>rowspan：纵向向下合并单元格的行</li>
                        </ul>
                        <h4 id="h4--lt-colgroup-gt-">
                            <a name="六、<colgroup>标签" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>六、&lt;colgroup&gt;标签
                        </h4>
                        <p>（1）定义与用法</p>
                        <p>
                            &lt;colgroup&gt;标签用于对表格中的列进行组合，以便对其进行格式化。
                            <br />如需对全部列应用样式，&lt;colgroup&gt; 标签很有用，这样就不需要对各个单元和各行重复应用样式了。
                        </p>
                        <p>
                            &lt;colgroup&gt; 标签只能在 table 元素中使用。
                            <br />（2）属性
                        </p>
                        <ul>
                            <li>align：设置水平方向对齐，取值left(左对齐)、center(居中对齐)、right(右对齐)</li>
                            <li>valign：设置垂直方向对齐，取值top(顶端)、middle(居中)、bottom(底部)、baseline(基线)</li>
                            <li>width：设置表格的宽度 (像素或百分比)</li>
                            <li>span：设置列组应该横跨的列数，就是控制那几列生效。</li>
                        </ul>
                        <p>经过测试：align和valign基本不生效</p>
                        <p>
                            （3）colgroup和col区别
                            <br />colgroup和col标签必须出现在表格当中，定义表格单独列的任意属性，col必须在colgroup中使用。col能覆盖colgroup定义的属性
                        </p>
                        <p>（4）示例</p>
                        <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span> <span class="token attr-name">border</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span><span
    class="token punctuation"
>&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>colgroup</span> <span class="token attr-name">span</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span><span
    class="token style-attr language-css"
><span class="token attr-name"> <span class="token attr-name">style</span></span><span
    class="token punctuation"
>="</span><span class="token attr-value"><span class="token property">background-color</span><span class="token punctuation">:</span>red</span><span
    class="token punctuation"
>"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>30px;<span class="token punctuation">"</span></span><span
    class="token punctuation"
>&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>col</span><span
    class="token style-attr language-css"
><span class="token attr-name"> <span class="token attr-name">style</span></span><span
    class="token punctuation"
>="</span><span class="token attr-value"><span class="token property">background-color</span><span class="token punctuation">:</span>#FFF</span><span
    class="token punctuation"
>"</span></span><span
    class="token punctuation"
>&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>col</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>50px<span class="token punctuation">"</span></span><span
    class="token punctuation"
>&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>col</span> <span class="token attr-name">span</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>100px<span class="token punctuation">"</span></span><span
    class="token punctuation"
>&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>colgroup</span><span
    class="token punctuation"
>&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span
    class="token punctuation"
>&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span
    class="token punctuation"
>&gt;</span></span>table<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span
    class="token punctuation"
>&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span
    class="token punctuation"
>&gt;</span></span>colgroup<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span
    class="token punctuation"
>&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span
    class="token punctuation"
>&gt;</span></span>col<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span
    class="token punctuation"
>&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span
    class="token punctuation"
>&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span
    class="token punctuation"
>&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span
    class="token punctuation"
>&gt;</span></span>html<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span
    class="token punctuation"
>&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span
    class="token punctuation"
>&gt;</span></span>table<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span
    class="token punctuation"
>&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span
    class="token punctuation"
>&gt;</span></span>css<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span
    class="token punctuation"
>&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span
    class="token punctuation"
>&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span
    class="token punctuation"
>&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span
    class="token punctuation"
>&gt;</span></span>html2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span
    class="token punctuation"
>&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span
    class="token punctuation"
>&gt;</span></span>table2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span
    class="token punctuation"
>&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span
    class="token punctuation"
>&gt;</span></span>css2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span
    class="token punctuation"
>&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span
    class="token punctuation"
>&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span
    class="token punctuation"
>&gt;</span></span>
</code></pre>
                        <p>
                            注解：
                            <br />colgroup 中的 span=”3” 是控制style给表格中的前3列(如果后面无col则有效)，背景色为红色，宽度为30。
                            <br />以上例子如果内部没有col，结果为表格所有列的背景色为红色，宽度为30。
                            <br />第一个col定义表格第一列，col的白色背景色覆盖了colgroup中的红色，结果第一列背景色为白色。
                            <br />第二个col定义表格第二列，结果第二列宽度为50。
                            <br />第三个col中span=”1”,表示从第三列开始的1列长度为100，如果span=”2”,则表示第三列开始的2列。
                        </p>
                        <h4 id="h4--">
                            <a name="七、表格的嵌套" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>七、表格的嵌套
                        </h4>
                        <p>
                            一个大表格可以嵌套一个或者多个小的表格，由于CSS+DIV的出现，目前table常用于后台管理系统中。
                            <br />示例：
                        </p>
                        <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span> <span class="token attr-name">border</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>500<span class="token punctuation">"</span></span><span
    class="token punctuation"
>&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span
    class="token punctuation"
>&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span
    class="token punctuation"
>&gt;</span></span>表头1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span
    class="token punctuation"
>&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span
    class="token punctuation"
>&gt;</span></span>表头2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span
    class="token punctuation"
>&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span
    class="token punctuation"
>&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span
    class="token punctuation"
>&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span
    class="token punctuation"
>&gt;</span></span>外围表格<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span
    class="token punctuation"
>&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span
    class="token punctuation"
>&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>100%<span class="token punctuation">"</span></span> <span class="token attr-name">border</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span><span
    class="token punctuation"
>&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span
    class="token punctuation"
>&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span
    class="token punctuation"
>&gt;</span></span>嵌套表格<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span
    class="token punctuation"
>&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span
    class="token punctuation"
>&gt;</span></span>嵌套表格<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span
    class="token punctuation"
>&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span
    class="token punctuation"
>&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span
    class="token punctuation"
>&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span
    class="token punctuation"
>&gt;</span></span>嵌套表格<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span
    class="token punctuation"
>&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span
    class="token punctuation"
>&gt;</span></span>嵌套表格<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span
    class="token punctuation"
>&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span
    class="token punctuation"
>&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span
    class="token punctuation"
>&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span
    class="token punctuation"
>&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span
    class="token punctuation"
>&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span
    class="token punctuation"
>&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span
    class="token punctuation"
>&gt;</span></span>外围表格<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span
    class="token punctuation"
>&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span
    class="token punctuation"
>&gt;</span></span>外围表格<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span
    class="token punctuation"
>&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span
    class="token punctuation"
>&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span
    class="token punctuation"
>&gt;</span></span>
</code></pre>
                        <p>以上基本上就是table表格常用的属性了，示例效果请复制粘贴运行即可。</p>
                    </section>
                </div>
            </div>
        </div>
        <a href="http://doc.liangxinghua.com/html/6.html" class="navigation navigation-prev">
            <i class="fa fa-angle-left"></i>
        </a>
        <a href="http://doc.liangxinghua.com/html/8.html" class="navigation navigation-next">
            <i class="fa fa-angle-right"></i>
        </a>
    </div>
</template>