<template>
    <p>在计算机屏幕上，sans-serif字体被认为是比serif字体容易阅读</p>
    <hr />
    <h2>字体系列</h2>
    <p>font-family 属性设置文本的字体系列。</p>
    <p>font-family 属性应该设置几个字体名称作为一种"后备"机制，如果浏览器不支持第一种字体，他将尝试下一种字体。</p>
    <p>
        <b>注意</b>: 如果字体系列的名称超过一个字，它必须用引号，如Font Family："宋体"。
    </p>
    <p>多个字体系列是用一个逗号分隔指明：</p>
    <div class="example">
        <h2 class="example">实例</h2>
        <div class="example_code notranslate">p{font-family:"Times New Roman", Times, serif;}</div>
        <br />
    </div>
    <hr />
    <h2>用em来设置字体大小</h2>
    <p>为了避免Internet Explorer 中无法调整文本的问题，许多开发者使用 em 单位代替像素。</p>
    <p>em的尺寸单位由W3C建议。</p>
    <p>1em和当前字体大小相等。在浏览器中默认的文字大小是16px。</p>
    <p>
        因此，1em的默认大小是16px。可以通过下面这个公式将像素转换为em：
        <span class="marked">px/16=em</span>
    </p>
    <div class="example">
        <h2 class="example">实例</h2>
        <div class="example_code notranslate">
            h1 {font-size:2.5em;} /* 40px/16=2.5em */
            <br />
            h2 {font-size:1.875em;} /* 30px/16=1.875em */
            <br />
            p {font-size:0.875em;} /* 14px/16=0.875em */
        </div>
        <br />
    </div>
    <p>在上面的例子，em的文字大小是与前面的例子中像素一样。不过，如果使用 em 单位，则可以在所有浏览器中调整文本大小。</p>
    <p>不幸的是，仍然是IE浏览器的问题。调整文本的大小时，会比正常的尺寸更大或更小。</p>
    <hr />
    <h2>使用百分比和EM组合</h2>
    <p>在所有浏览器的解决方案中，设置 &lt;body&gt;元素的默认字体大小的是百分比：</p>
    <div class="example">
        <h2 class="example">实例</h2>
        <div class="example_code notranslate">
            body {font-size:100%;}
            <br />
            h1 {font-size:2.5em;}
            <br />
            h2 {font-size:1.875em;}
            <br />
            p {font-size:0.875em;}
        </div>
        <br />
    </div>
    <p>我们的代码非常有效。在所有浏览器中，可以显示相同的文本大小，并允许所有浏览器缩放文本的大小。</p>
    <hr />
    <h2>所有CSS字体属性</h2>
    <table class="reference notranslate">
        <tbody>
            <tr>
                <th width="25%" align="left">Property</th>
                <th width="75%" align="left">描述</th>
            </tr>
            <tr>
                <td>
                    <a href="/">font</a>
                </td>
                <td>在一个声明中设置所有的字体属性</td>
            </tr>
            <tr>
                <td>
                    <a href="/">font-family</a>
                </td>
                <td>指定文本的字体系列</td>
            </tr>
            <tr>
                <td>
                    <a href="/">font-size</a>
                </td>
                <td>指定文本的字体大小</td>
            </tr>
            <tr>
                <td>
                    <a href="/">font-style</a>
                </td>
                <td>指定文本的字体样式</td>
            </tr>
            <tr>
                <td>
                    <a href="/">font-variant</a>
                </td>
                <td>以小型大写字体或者正常字体显示文本。</td>
            </tr>
            <tr>
                <td>
                    <a href="/">font-weight</a>
                </td>
                <td>指定字体的粗细。</td>
            </tr>
        </tbody>
    </table>
</template>