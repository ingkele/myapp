<template>
    <div class="article-intro" id="content">
        <h1>
            CSS
            <span class="color_h1">文本</span>格式
        </h1>
        <br />
        <div style="width:96.5%;border:1px solid gray;padding:8px">
            <h1 style="text-align:center;color:#A7C942">文本格式</h1>
            <p style="text-indent:50px;text-align:justify;letter-spacing:3px">
                This text is styled with some of the text formatting properties. The heading uses the text-align, text-transform, and color properties.
                The paragraph is indented, aligned, and the space between characters is specified. The underline is removed from the
                link.
            </p>
        </div>
        <hr />
        <h2>文本颜色</h2>
        <p>颜色属性被用来设置文字的颜色。</p>
        <p>颜色是通过CSS最经常的指定：</p>
        <ul>
            <li>
                十六进制值 - 如:
                <strong>＃FF0000</strong>
            </li>
            <li>
                一个RGB值 - 如:
                <strong>RGB(255,0,0)</strong>
            </li>
            <li>
                颜色的名称 - 如:
                <strong>red</strong>
            </li>
        </ul>
        <p>
            参阅
            <a>CSS 颜色值</a> 查看完整的颜色值。
        </p>

        <p>一个网页的背景颜色是指在主体内的选择：</p>

        <div class="example">
            <h2 class="example">实例</h2>
            <div class="example_code">
                <div class="hl-main">
                    <span class="hl-identifier">body</span>
                    <span class="hl-code"></span>
                    <span class="hl-brackets">{</span>
                    <span class="hl-reserved">color:</span>
                    <span class="hl-var">red</span>
                    <span class="hl-reserved"></span>
                    <span class="hl-code">;</span>
                    <span class="hl-brackets">}</span>
                    <span class="hl-code"></span>
                    <span class="hl-identifier">h1</span>
                    <span class="hl-code"></span>
                    <span class="hl-brackets">{</span>
                    <span class="hl-reserved">color:</span>
                    <span class="hl-var">#00ff00</span>
                    <span class="hl-reserved"></span>
                    <span class="hl-code">;</span>
                    <span class="hl-brackets">}</span>
                    <span class="hl-code"></span>
                    <span class="hl-identifier">h2</span>
                    <span class="hl-code"></span>
                    <span class="hl-brackets">{</span>
                    <span class="hl-reserved">color:</span>
                    <span class="hl-code">rgb</span>
                    <span class="hl-code">(</span>
                    <span class="hl-number">255</span>
                    <span class="hl-code">,</span>
                    <span class="hl-number">0</span>
                    <span class="hl-code">,</span>
                    <span class="hl-number">0</span>
                    <span class="hl-code">)</span>
                    <span class="hl-reserved"></span>
                    <span class="hl-code">;</span>
                    <span class="hl-brackets">}</span>
                </div>
            </div>
            <br />
        </div>
        <p>对于W3C标准的CSS：如果你定义了颜色属性，你还必须定义背景色属性。</p>
        <hr />
        <h2>文本的对齐方式</h2>
        <p>文本排列属性是用来设置文本的水平对齐方式。</p>
        <p>文本可居中或对齐到左或右,两端对齐.</p>
        <p>当text-align设置为"justify"，每一行被展开为宽度相等，左，右外边距是对齐（如杂志和报纸）。</p>

        <div class="example">
            <h2 class="example">实例</h2>
            <div class="example_code">
                <div class="hl-main">
                    <span class="hl-identifier">h1</span>
                    <span class="hl-code"></span>
                    <span class="hl-brackets">{</span>
                    <span class="hl-reserved">text-align:</span>
                    <span class="hl-string">center</span>
                    <span class="hl-reserved"></span>
                    <span class="hl-code">;</span>
                    <span class="hl-brackets">}</span>
                    <span class="hl-code"></span>
                    <span class="hl-identifier">p</span>
                    <span class="hl-identifier">.date</span>
                    <span class="hl-code"></span>
                    <span class="hl-brackets">{</span>
                    <span class="hl-reserved">text-align:</span>
                    <span class="hl-string">right</span>
                    <span class="hl-reserved"></span>
                    <span class="hl-code">;</span>
                    <span class="hl-brackets">}</span>
                    <span class="hl-code"></span>
                    <span class="hl-identifier">p</span>
                    <span class="hl-identifier">.main</span>
                    <span class="hl-code"></span>
                    <span class="hl-brackets">{</span>
                    <span class="hl-reserved">text-align:</span>
                    <span class="hl-string">justify</span>
                    <span class="hl-reserved"></span>
                    <span class="hl-code">;</span>
                    <span class="hl-brackets">}</span>
                </div>
            </div>
            <br />
        </div>
        <br />
        <hr />
        <h2>文本修饰</h2>
        <p>text-decoration 属性用来设置或删除文本的装饰。</p>
        <p>从设计的角度看 text-decoration属性主要是用来删除链接的下划线：</p>

        <div class="example">
            <h2 class="example">实例</h2>
            <div class="example_code">
                <div class="hl-main">
                    <span class="hl-identifier">a</span>
                    <span class="hl-code"></span>
                    <span class="hl-brackets">{</span>
                    <span class="hl-reserved">text-decoration:</span>
                    <span class="hl-string">none</span>
                    <span class="hl-reserved"></span>
                    <span class="hl-code">;</span>
                    <span class="hl-brackets">}</span>
                </div>
            </div>
            <br />
        </div>
        <p>也可以这样装饰文字：</p>

        <div class="example">
            <h2 class="example">实例</h2>
            <div class="example_code">
                <div class="hl-main">
                    <span class="hl-identifier">h1</span>
                    <span class="hl-code"></span>
                    <span class="hl-brackets">{</span>
                    <span class="hl-reserved">text-decoration:</span>
                    <span class="hl-string">overline</span>
                    <span class="hl-reserved"></span>
                    <span class="hl-code">;</span>
                    <span class="hl-brackets">}</span>
                    <span class="hl-code"></span>
                    <span class="hl-identifier">h2</span>
                    <span class="hl-code"></span>
                    <span class="hl-brackets">{</span>
                    <span class="hl-reserved">text-decoration:</span>
                    <span class="hl-string">line-through</span>
                    <span class="hl-reserved"></span>
                    <span class="hl-code">;</span>
                    <span class="hl-brackets">}</span>
                    <span class="hl-code"></span>
                    <span class="hl-identifier">h3</span>
                    <span class="hl-code"></span>
                    <span class="hl-brackets">{</span>
                    <span class="hl-reserved">text-decoration:</span>
                    <span class="hl-string">underline</span>
                    <span class="hl-reserved"></span>
                    <span class="hl-code">;</span>
                    <span class="hl-brackets">}</span>
                </div>
            </div>
            <br />
        </div>
        <p>我们不建议强调指出不是链接的文本，因为这常常混淆用户。</p>
        <hr />
        <h2>文本转换</h2>
        <p>文本转换属性是用来指定在一个文本中的大写和小写字母。</p>
        <p>可用于所有字句变成大写或小写字母，或每个单词的首字母大写。</p>

        <div class="example">
            <h2 class="example">实例</h2>
            <div class="example_code">
                <div class="hl-main">
                    <span class="hl-identifier">p</span>
                    <span class="hl-identifier">.uppercase</span>
                    <span class="hl-code"></span>
                    <span class="hl-brackets">{</span>
                    <span class="hl-reserved">text-transform:</span>
                    <span class="hl-string">uppercase</span>
                    <span class="hl-reserved"></span>
                    <span class="hl-code">;</span>
                    <span class="hl-brackets">}</span>
                    <span class="hl-code"></span>
                    <span class="hl-identifier">p</span>
                    <span class="hl-identifier">.lowercase</span>
                    <span class="hl-code"></span>
                    <span class="hl-brackets">{</span>
                    <span class="hl-reserved">text-transform:</span>
                    <span class="hl-string">lowercase</span>
                    <span class="hl-reserved"></span>
                    <span class="hl-code">;</span>
                    <span class="hl-brackets">}</span>
                    <span class="hl-code"></span>
                    <span class="hl-identifier">p</span>
                    <span class="hl-identifier">.capitalize</span>
                    <span class="hl-code"></span>
                    <span class="hl-brackets">{</span>
                    <span class="hl-reserved">text-transform:</span>
                    <span class="hl-string">capitalize</span>
                    <span class="hl-reserved"></span>
                    <span class="hl-code">;</span>
                    <span class="hl-brackets">}</span>
                </div>
            </div>
            <br />
        </div>
        <br />
        <hr />
        <h2>文本缩进</h2>
        <p>文本缩进属性是用来指定文本的第一行的缩进。</p>

        <div class="example">
            <h2 class="example">实例</h2>
            <div class="example_code">
                <div class="hl-main">
                    <span class="hl-identifier">p</span>
                    <span class="hl-code"></span>
                    <span class="hl-brackets">{</span>
                    <span class="hl-reserved">text-indent:</span>
                    <span class="hl-number">50</span>
                    <span class="hl-string">px</span>
                    <span class="hl-reserved"></span>
                    <span class="hl-code">;</span>
                    <span class="hl-brackets">}</span>
                </div>
            </div>
            <br />
        </div>
        <br />
        <hr />
        <h2>所有CSS文本属性。</h2>

        <table class="reference">
            <tbody>
                <tr>
                    <th width="20%" align="left">属性</th>
                    <th width="80%" align="left">描述</th>
                </tr>
                <tr>
                    <td>
                        <a>color</a>
                    </td>
                    <td>设置文本颜色</td>
                </tr>
                <tr>
                    <td>
                        <a>direction</a>
                    </td>
                    <td>设置文本方向。</td>
                </tr>
                <tr>
                    <td>
                        <a>letter-spacing</a>
                    </td>
                    <td>设置字符间距</td>
                </tr>
                <tr>
                    <td>
                        <a>line-height</a>
                    </td>
                    <td>设置行高</td>
                </tr>
                <tr>
                    <td>
                        <a>text-align</a>
                    </td>
                    <td>对齐元素中的文本</td>
                </tr>
                <tr>
                    <td>
                        <a>text-decoration</a>
                    </td>
                    <td>向文本添加修饰</td>
                </tr>
                <tr>
                    <td>
                        <a>text-indent</a>
                    </td>
                    <td>缩进元素中文本的首行</td>
                </tr>
                <tr>
                    <td>
                        <a>text-shadow</a>
                    </td>
                    <td>设置文本阴影</td>
                </tr>
                <tr>
                    <td>
                        <a>text-transform</a>
                    </td>
                    <td>控制元素中的字母</td>
                </tr>
                <tr>
                    <td>
                        <a target="_blank">unicode-bidi</a>
                    </td>
                    <td>设置或返回文本是否被重写&nbsp;</td>
                </tr>
                <tr>
                    <td>
                        <a>vertical-align</a>
                    </td>
                    <td>设置元素的垂直对齐</td>
                </tr>
                <tr>
                    <td>
                        <a>white-space</a>
                    </td>
                    <td>设置元素中空白的处理方式</td>
                </tr>
                <tr>
                    <td>
                        <a>word-spacing</a>
                    </td>
                    <td>设置字间距</td>
                </tr>
            </tbody>
        </table>
        <!-- 其他扩展 -->
    </div>
</template>