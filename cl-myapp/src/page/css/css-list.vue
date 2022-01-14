<template>
    <h1>
        CSS
        <span class="color_h1">列表</span>
    </h1>
    <hr />
    <p class="intro">CSS 列表属性作用如下：</p>
    <ul>
        <li>设置不同的列表项标记为有序列表</li>
        <li>设置不同的列表项标记为无序列表</li>
        <li>设置列表项标记为图像</li>
    </ul>
    <br />
    <hr />
    <h2>列表</h2>
    <p>在 HTML中，有两种类型的列表：</p>
    <ul>
        <li>
            无序列表
            <span class="marked">ul</span> - 列表项标记用特殊图形（如小黑点、小方框等）
        </li>
        <li>
            有序列表
            <span class="marked">ol</span> - 列表项的标记有数字或字母
        </li>
    </ul>
    <p>使用 CSS，可以列出进一步的样式，并可用图像作列表项标记。</p>
    <h3>无序列表如下所示:</h3>
    <ul style="list-style:circle">
        <li>Coffee</li>
        <li>Tea</li>
        <li>Coca Cola</li>
    </ul>
    <ul style="list-style:square">
        <li>Coffee</li>
        <li>Tea</li>
        <li>Coca Cola</li>
    </ul>
    <h3>有序列表如下所示:</h3>
    <ol style="list-style:decimal">
        <li>Coffee</li>
        <li>Tea</li>
        <li>Coca Cola</li>
    </ol>
    <ol style="list-style:upper-roman">
        <li>Coffee</li>
        <li>Tea</li>
        <li>Coca Cola</li>
    </ol>
    <hr />
    <h2>不同的列表项标记</h2>
    <p>list-style-type属性指定列表项标记的类型是：</p>
    <div class="example">
        <h2 class="example">实例</h2>
        <div class="example_code">
            <div class="hl-main">
                <span class="hl-identifier">ul</span>
                <span class="hl-identifier">.a</span>
                <span class="hl-code"></span>
                <span class="hl-brackets">{</span>
                <span class="hl-reserved">list-style-type:</span>
                <span class="hl-code"></span>
                <span class="hl-string">circle</span>
                <span class="hl-reserved"></span>
                <span class="hl-code">;</span>
                <span class="hl-brackets">}</span>
                <span class="hl-code"></span>
                <span class="hl-identifier">ul</span>
                <span class="hl-identifier">.b</span>
                <span class="hl-code"></span>
                <span class="hl-brackets">{</span>
                <span class="hl-reserved">list-style-type:</span>
                <span class="hl-code"></span>
                <span class="hl-string">square</span>
                <span class="hl-reserved"></span>
                <span class="hl-code">;</span>
                <span class="hl-brackets">}</span>
                <span class="hl-code"></span>
                <span class="hl-identifier">ol</span>
                <span class="hl-identifier">.c</span>
                <span class="hl-code"></span>
                <span class="hl-brackets">{</span>
                <span class="hl-reserved">list-style-type:</span>
                <span class="hl-code"></span>
                <span class="hl-string">upper-roman</span>
                <span class="hl-reserved"></span>
                <span class="hl-code">;</span>
                <span class="hl-brackets">}</span>
                <span class="hl-code"></span>
                <span class="hl-identifier">ol</span>
                <span class="hl-identifier">.d</span>
                <span class="hl-code"></span>
                <span class="hl-brackets">{</span>
                <span class="hl-reserved">list-style-type:</span>
                <span class="hl-code"></span>
                <span class="hl-string">lower-alpha</span>
                <span class="hl-reserved"></span>
                <span class="hl-code">;</span>
                <span class="hl-brackets">}</span>
            </div>
        </div>
        <br />
    </div>
    <p>一些值是无序列表，以及有些是有序列表。</p>
    <hr />
    <h2>作为列表项标记的图像</h2>
    <p>要指定列表项标记的图像，使用列表样式图像属性：</p>
    <div class="example">
        <h2 class="example">实例</h2>
        <div class="example_code">
            <div class="hl-main">
                <span class="hl-identifier">ul</span>
                <span class="hl-code"></span>
                <span class="hl-brackets">{</span>
                <span class="hl-code"></span>
                <span class="hl-reserved">list-style-image:</span>
                <span class="hl-code"></span>
                <span class="hl-code">url</span>
                <span class="hl-code">('</span>
                <span class="hl-code">sqpurple</span>
                <span class="hl-code">.</span>
                <span class="hl-code">gif</span>
                <span class="hl-code">')</span>
                <span class="hl-reserved"></span>
                <span class="hl-code">;</span>
                <span class="hl-brackets">}</span>
            </div>
        </div>
        <br />
    </div>
    <p>上面的例子在所有浏览器中显示并不相同，IE 和 Opera 显示图像标记比火狐，Chrome 和 Safari更高一点点。</p>
    <p>如果你想在所有的浏览器放置同样的形象标志，就应使用浏览器兼容性解决方案，过程如下</p>
    <h2>浏览器兼容性解决方案</h2>
    <p>同样在所有的浏览器，下面的例子会显示的图像标记：</p>
    <div class="example">
        <h2 class="example">实例</h2>
        <div class="example_code">
            <div class="hl-main">
                <span class="hl-identifier">ul</span>
                <span class="hl-code"></span>
                <span class="hl-brackets">{</span>
                <span class="hl-code"></span>
                <span class="hl-reserved">list-style-type:</span>
                <span class="hl-code"></span>
                <span class="hl-string">none</span>
                <span class="hl-reserved"></span>
                <span class="hl-code">;</span>
                <span class="hl-reserved">padding:</span>
                <span class="hl-code"></span>
                <span class="hl-number">0</span>
                <span class="hl-string">px</span>
                <span class="hl-reserved"></span>
                <span class="hl-code">;</span>
                <span class="hl-reserved">margin:</span>
                <span class="hl-code"></span>
                <span class="hl-number">0</span>
                <span class="hl-string">px</span>
                <span class="hl-reserved"></span>
                <span class="hl-code">;</span>
                <span class="hl-brackets">}</span>
                <span class="hl-code"></span>
                <span class="hl-identifier">ul</span>
                <span class="hl-code"></span>
                <span class="hl-identifier">li</span>
                <span class="hl-code"></span>
                <span class="hl-brackets">{</span>
                <span class="hl-code"></span>
                <span class="hl-reserved">background-image:</span>
                <span class="hl-code"></span>
                <span class="hl-code">url</span>
                <span class="hl-code">(</span>
                <span class="hl-code">sqpurple</span>
                <span class="hl-code">.</span>
                <span class="hl-code">gif</span>
                <span class="hl-code">)</span>
                <span class="hl-reserved"></span>
                <span class="hl-code">;</span>
                <span class="hl-reserved">background-repeat:</span>
                <span class="hl-code"></span>
                <span class="hl-string">no-repeat</span>
                <span class="hl-reserved"></span>
                <span class="hl-code">;</span>
                <span class="hl-reserved">background-position:</span>
                <span class="hl-code"></span>
                <span class="hl-number">0</span>
                <span class="hl-string">px</span>
                <span class="hl-code"></span>
                <span class="hl-number">5</span>
                <span class="hl-string">px</span>
                <span class="hl-reserved"></span>
                <span class="hl-code">;</span>
                <span class="hl-reserved">padding-left:</span>
                <span class="hl-code"></span>
                <span class="hl-number">14</span>
                <span class="hl-string">px</span>
                <span class="hl-reserved"></span>
                <span class="hl-code">;</span>
                <span class="hl-brackets">}</span>
            </div>
        </div>
        <br />
    </div>
    <p>例子解释：</p>
    <ul>
        <li>
            ul:
            <ul>
                <li>设置列表类型为没有列表项标记</li>
                <li>设置填充和边距 0px（浏览器兼容性）</li>
            </ul>
        </li>
        <li>
            ul 中所有 li:
            <ul>
                <li>设置图像的 URL，并设置它只显示一次（无重复）</li>
                <li>您需要的定位图像位置（左 0px 和上下 5px）</li>
                <li>用 padding-left 属性把文本置于列表中</li>
            </ul>
        </li>
    </ul>
    <hr />
    <h2>列表 - 简写属性</h2>
    <p>在单个属性中可以指定所有的列表属性。这就是所谓的简写属性。</p>
    <p>为列表使用简写属性，列表样式属性设置如下：</p>
    <div class="example">
        <h2 class="example">实例</h2>
        <div class="example_code">
            <div class="hl-main">
                <span class="hl-identifier">ul</span>
                <span class="hl-code"></span>
                <span class="hl-brackets">{</span>
                <span class="hl-code"></span>
                <span class="hl-reserved">list-style:</span>
                <span class="hl-code"></span>
                <span class="hl-string">square</span>
                <span class="hl-code"></span>
                <span class="hl-code">url</span>
                <span class="hl-code">("</span>
                <span class="hl-code">sqpurple</span>
                <span class="hl-code">.</span>
                <span class="hl-code">gif</span>
                <span class="hl-code">")</span>
                <span class="hl-reserved"></span>
                <span class="hl-code">;</span>
                <span class="hl-brackets">}</span>
            </div>
        </div>
        <br />
    </div>
    <p>可以按顺序设置如下属性：</p>
    <ul>
        <li>list-style-type</li>
        <li>list-style-position (有关说明，请参见下面的CSS属性表)</li>
        <li>list-style-image</li>
    </ul>
    <p>如果上述值丢失一个，其余仍在指定的顺序，就没关系。</p>
    <hr />
    <h2>移除默认设置</h2>
    <p>list-style-type:none 属性可以用于移除小标记。默认情况下列表 &lt;ul&gt; 或 &lt;ol&gt; 还设置了内边距和外边距，可使用 margin:0 和 padding:0 来移除:</p>
    <div class="example">
        <h2 class="example">实例</h2>
        <div class="example_code">
            <div class="hl-main">
                <span class="hl-identifier">ul</span>
                <span class="hl-code"></span>
                <span class="hl-brackets">{</span>
                <span class="hl-code"></span>
                <span class="hl-reserved">list-style-type:</span>
                <span class="hl-code"></span>
                <span class="hl-string">none</span>
                <span class="hl-reserved"></span>
                <span class="hl-code">;</span>
                <span class="hl-reserved">margin:</span>
                <span class="hl-code"></span>
                <span class="hl-number">0</span>
                <span class="hl-reserved"></span>
                <span class="hl-code">;</span>
                <span class="hl-reserved">padding:</span>
                <span class="hl-code"></span>
                <span class="hl-number">0</span>
                <span class="hl-reserved"></span>
                <span class="hl-code">;</span>
                <span class="hl-brackets">}</span>
            </div>
        </div>
        <br />
    </div>
    <hr />
    <h2>所有的CSS列表属性</h2>
    <table class="reference">
        <tbody>
            <tr>
                <th width="20%" align="left">属性</th>
                <th width="80%" align="left">描述</th>
            </tr>
            <tr>
                <td>
                    <a href="/">list-style</a>
                </td>
                <td>简写属性。用于把所有用于列表的属性设置于一个声明中</td>
            </tr>
            <tr>
                <td>
                    <a href="/">list-style-image</a>
                </td>
                <td>将图像设置为列表项标志。</td>
            </tr>
            <tr>
                <td>
                    <a href="/">list-style-position</a>
                </td>
                <td>设置列表中列表项标志的位置。</td>
            </tr>
            <tr>
                <td>
                    <a href="/">list-style-type</a>
                </td>
                <td>设置列表项标志的类型。</td>
            </tr>
        </tbody>
    </table>
</template>