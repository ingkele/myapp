<template>
    <div class="article-body">
        <div class="article-intro" id="content">
            <h1>
                CSS
                <span class="color_h1">表格</span>
            </h1>

            <hr />
            <p class="intro">使用 CSS 可以使 HTML 表格更美观。</p>
            <table class="reference">
                <tbody>
                    <tr>
                        <th>Company</th>
                        <th>Contact</th>
                        <th>Country</th>
                    </tr>
                    <tr>
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                    </tr>
                    <tr class="alt">
                        <td>Berglunds snabbköp</td>
                        <td>Christina Berglund</td>
                        <td>Sweden</td>
                    </tr>
                    <tr>
                        <td>Centro comercial Moctezuma</td>
                        <td>Francisco Chang</td>
                        <td>Mexico</td>
                    </tr>
                    <tr class="alt">
                        <td>Ernst Handel</td>
                        <td>Roland Mendel</td>
                        <td>Austria</td>
                    </tr>
                    <tr>
                        <td>Island Trading</td>
                        <td>Helen Bennett</td>
                        <td>UK</td>
                    </tr>
                    <tr class="alt">
                        <td>Königlich Essen</td>
                        <td>Philip Cramer</td>
                        <td>Germany</td>
                    </tr>
                    <tr>
                        <td>Laughing Bacchus Winecellars</td>
                        <td>Yoshi Tannamuri</td>
                        <td>Canada</td>
                    </tr>
                    <tr class="alt">
                        <td>Magazzini Alimentari Riuniti</td>
                        <td>Giovanni Rovelli</td>
                        <td>Italy</td>
                    </tr>
                    <tr>
                        <td>North/South</td>
                        <td>Simon Crowther</td>
                        <td>UK</td>
                    </tr>
                    <tr class="alt">
                        <td>Paris spécialités</td>
                        <td>Marie Bertrand</td>
                        <td>France</td>
                    </tr>
                    <tr>
                        <td>The Big Cheese</td>
                        <td>Liz Nixon</td>
                        <td>USA</td>
                    </tr>
                    <tr class="alt">
                        <td>Vaffeljernet</td>
                        <td>Palle Ibsen</td>
                        <td>Denmark</td>
                    </tr>
                </tbody>
            </table>
            <hr />

            <h2>表格边框</h2>
            <p>指定CSS表格边框，使用border属性。</p>
            <p>下面的例子指定了一个表格的Th和TD元素的黑色边框：</p>
            <div class="example">
                <h2 class="example">实例</h2>
                <div class="example_code">
                    <div class="hl-main">
                        <span class="hl-identifier">table</span>
                        <span class="hl-code">,</span>
                        <span class="hl-identifier">th</span>
                        <span class="hl-code">,</span>
                        <span class="hl-identifier">td</span>
                        <span class="hl-code"></span>
                        <span class="hl-brackets">{</span>
                        <span class="hl-code"></span>
                        <span class="hl-reserved">border:</span>
                        <span class="hl-code"></span>
                        <span class="hl-number">1</span>
                        <span class="hl-string">px</span>
                        <span class="hl-code"></span>
                        <span class="hl-string">solid</span>
                        <span class="hl-code"></span>
                        <span class="hl-var">black</span>
                        <span class="hl-reserved"></span>
                        <span class="hl-code">;</span>
                        <span class="hl-brackets">}</span>
                    </div>
                </div>
                <br />
            </div>

            <p>请注意，在上面的例子中的表格有双边框。这是因为表和th/ td元素有独立的边界。</p>
            <p>为了显示一个表的单个边框，使用 border-collapse属性。</p>

            <h2>折叠边框</h2>
            <p>border-collapse 属性设置表格的边框是否被折叠成一个单一的边框或隔开：</p>
            <div class="example">
                <h2 class="example">实例</h2>
                <div class="example_code">
                    <div class="hl-main">
                        <span class="hl-identifier">table</span>
                        <span class="hl-code"></span>
                        <span class="hl-brackets">{</span>
                        <span class="hl-code"></span>
                        <span class="hl-reserved">border-collapse:</span>
                        <span class="hl-string">collapse</span>
                        <span class="hl-reserved"></span>
                        <span class="hl-code">;</span>
                        <span class="hl-brackets">}</span>
                        <span class="hl-code"></span>
                        <span class="hl-identifier">table</span>
                        <span class="hl-code">,</span>
                        <span class="hl-identifier">th</span>
                        <span class="hl-code">,</span>
                        <span class="hl-identifier">td</span>
                        <span class="hl-code"></span>
                        <span class="hl-brackets">{</span>
                        <span class="hl-code"></span>
                        <span class="hl-reserved">border:</span>
                        <span class="hl-code"></span>
                        <span class="hl-number">1</span>
                        <span class="hl-string">px</span>
                        <span class="hl-code"></span>
                        <span class="hl-string">solid</span>
                        <span class="hl-code"></span>
                        <span class="hl-var">black</span>
                        <span class="hl-reserved"></span>
                        <span class="hl-code">;</span>
                        <span class="hl-brackets">}</span>
                    </div>
                </div>
                <br />
            </div>
            <br />
            <hr />

            <h2>表格宽度和高度</h2>
            <p>Width和height属性定义表格的宽度和高度。</p>
            <p>下面的例子是设置100％的宽度，50像素的th元素的高度的表格：</p>
            <div class="example">
                <h2 class="example">实例</h2>
                <div class="example_code">
                    <div class="hl-main">
                        <span class="hl-identifier">table</span>
                        <span class="hl-code"></span>
                        <span class="hl-brackets">{</span>
                        <span class="hl-code"></span>
                        <span class="hl-reserved">width:</span>
                        <span class="hl-number">100</span>
                        <span class="hl-string">%</span>
                        <span class="hl-reserved"></span>
                        <span class="hl-code">;</span>
                        <span class="hl-brackets">}</span>
                        <span class="hl-code"></span>
                        <span class="hl-identifier">th</span>
                        <span class="hl-code"></span>
                        <span class="hl-brackets">{</span>
                        <span class="hl-code"></span>
                        <span class="hl-reserved">height:</span>
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

            <h2>表格文字对齐</h2>
            <p>表格中的文本对齐和垂直对齐属性。</p>
            <p>text-align属性设置水平对齐方式，向左，右，或中心：</p>
            <div class="example">
                <h2 class="example">实例</h2>
                <div class="example_code">
                    <div class="hl-main">
                        <span class="hl-identifier">td</span>
                        <span class="hl-code"></span>
                        <span class="hl-brackets">{</span>
                        <span class="hl-code"></span>
                        <span class="hl-reserved">text-align:</span>
                        <span class="hl-string">right</span>
                        <span class="hl-reserved"></span>
                        <span class="hl-code">;</span>
                        <span class="hl-brackets">}</span>
                    </div>
                </div>
                <br />
            </div>

            <p>垂直对齐属性设置垂直对齐，比如顶部，底部或中间：</p>
            <div class="example">
                <h2 class="example">实例</h2>
                <div class="example_code">
                    <div class="hl-main">
                        <span class="hl-identifier">td</span>
                        <span class="hl-code"></span>
                        <span class="hl-brackets">{</span>
                        <span class="hl-code"></span>
                        <span class="hl-reserved">height:</span>
                        <span class="hl-number">50</span>
                        <span class="hl-string">px</span>
                        <span class="hl-reserved"></span>
                        <span class="hl-code">;</span>
                        <span class="hl-reserved">vertical-align:</span>
                        <span class="hl-string">bottom</span>
                        <span class="hl-reserved"></span>
                        <span class="hl-code">;</span>
                        <span class="hl-brackets">}</span>
                    </div>
                </div>
                <br />
            </div>
            <br />
            <hr />

            <h2>表格填充</h2>
            <p>如需控制边框和表格内容之间的间距，应使用td和th元素的填充属性：</p>
            <div class="example">
                <h2 class="example">实例</h2>
                <div class="example_code">
                    <div class="hl-main">
                        <span class="hl-identifier">td</span>
                        <span class="hl-code"></span>
                        <span class="hl-brackets">{</span>
                        <span class="hl-code"></span>
                        <span class="hl-reserved">padding:</span>
                        <span class="hl-number">15</span>
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

            <h2>表格颜色</h2>
            <p>下面的例子指定边框的颜色，和th元素的文本和背景颜色：</p>
            <div class="example">
                <h2 class="example">实例</h2>
                <div class="example_code">
                    <div class="hl-main">
                        <span class="hl-identifier">table</span>
                        <span class="hl-code">,</span>
                        <span class="hl-identifier">td</span>
                        <span class="hl-code">,</span>
                        <span class="hl-identifier">th</span>
                        <span class="hl-code"></span>
                        <span class="hl-brackets">{</span>
                        <span class="hl-code"></span>
                        <span class="hl-reserved">border:</span>
                        <span class="hl-number">1</span>
                        <span class="hl-string">px</span>
                        <span class="hl-code"></span>
                        <span class="hl-string">solid</span>
                        <span class="hl-code"></span>
                        <span class="hl-var">green</span>
                        <span class="hl-reserved"></span>
                        <span class="hl-code">;</span>
                        <span class="hl-brackets">}</span>
                        <span class="hl-code"></span>
                        <span class="hl-identifier">th</span>
                        <span class="hl-code"></span>
                        <span class="hl-brackets">{</span>
                        <span class="hl-code"></span>
                        <span class="hl-reserved">background-color:</span>
                        <span class="hl-var">green</span>
                        <span class="hl-reserved"></span>
                        <span class="hl-code">;</span>
                        <span class="hl-reserved">color:</span>
                        <span class="hl-var">white</span>
                        <span class="hl-reserved"></span>
                        <span class="hl-code">;</span>
                        <span class="hl-brackets">}</span>
                    </div>
                </div>
                <br />
            </div>
            <br />
            <hr />
        </div>
    </div>
</template>