<template>
    <div class="article-intro" id="content">
        <h1>
            CSS
            <span class="color_h1">链接</span>
        </h1>
        <hr />
        <p class="intro">不同的链接可以有不同的样式。</p>

        <hr />
        <h2>链接样式</h2>
        <p>链接的样式，可以用任何CSS属性（如颜色，字体，背景等）。</p>
        <p>特别的链接，可以有不同的样式，这取决于他们是什么状态。</p>
        <p>这四个链接状态是：</p>
        <ul>
            <li>a:link - 正常，未访问过的链接</li>
            <li>a:visited - 用户已访问过的链接</li>
            <li>a:hover - 当用户鼠标放在链接上时</li>
            <li>a:active - 链接被点击的那一刻</li>
        </ul>
        <div class="example">
            <h2 class="example">实例</h2>
            <div class="example_code">
                <div class="hl-main">
                    <span class="hl-identifier">a</span>
                    <span class="hl-special">:link</span>
                    <span class="hl-code"></span>
                    <span class="hl-brackets">{</span>
                    <span class="hl-reserved">color:</span>
                    <span class="hl-var">#000000</span>
                    <span class="hl-reserved"></span>
                    <span class="hl-code">;</span>
                    <span class="hl-brackets">}</span>
                    <span class="hl-code"></span>
                    <span class="hl-comment">/*</span>
                    <span class="hl-comment">未访问链接</span>
                    <span class="hl-comment">*/</span>
                    <span class="hl-code"></span>
                    <span class="hl-identifier">a</span>
                    <span class="hl-special">:visited</span>
                    <span class="hl-code"></span>
                    <span class="hl-brackets">{</span>
                    <span class="hl-reserved">color:</span>
                    <span class="hl-var">#00FF00</span>
                    <span class="hl-reserved"></span>
                    <span class="hl-code">;</span>
                    <span class="hl-brackets">}</span>
                    <span class="hl-code"></span>
                    <span class="hl-comment">/*</span>
                    <span class="hl-comment">已访问链接</span>
                    <span class="hl-comment">*/</span>
                    <span class="hl-code"></span>
                    <span class="hl-identifier">a</span>
                    <span class="hl-special">:hover</span>
                    <span class="hl-code"></span>
                    <span class="hl-brackets">{</span>
                    <span class="hl-reserved">color:</span>
                    <span class="hl-var">#FF00FF</span>
                    <span class="hl-reserved"></span>
                    <span class="hl-code">;</span>
                    <span class="hl-brackets">}</span>
                    <span class="hl-code"></span>
                    <span class="hl-comment">/*</span>
                    <span class="hl-comment">鼠标移动到链接上</span>
                    <span class="hl-comment">*/</span>
                    <span class="hl-code"></span>
                    <span class="hl-identifier">a</span>
                    <span class="hl-special">:active</span>
                    <span class="hl-code"></span>
                    <span class="hl-brackets">{</span>
                    <span class="hl-reserved">color:</span>
                    <span class="hl-var">#0000FF</span>
                    <span class="hl-reserved"></span>
                    <span class="hl-code">;</span>
                    <span class="hl-brackets">}</span>
                    <span class="hl-code"></span>
                    <span class="hl-comment">/*</span>
                    <span class="hl-comment">鼠标点击时</span>
                    <span class="hl-comment">*/</span>
                </div>
            </div>
            <br />
        </div>
        <p>当设置为若干链路状态的样式，也有一些顺序规则：</p>
        <ul>
            <li>a:hover 必须跟在 a:link 和 a:visited后面</li>
            <li>a:active 必须跟在 a:hover后面</li>
        </ul>
        <hr />
        <h2>常见的链接样式</h2>
        <p>根据上述链接的颜色变化的例子，看它是在什么状态。</p>
        <p>让我们通过一些其他常见的方式转到链接样式：</p>
        <h2>文本修饰</h2>
        <p>text-decoration 属性主要用于删除链接中的下划线：</p>

        <div class="example">
            <h2 class="example">实例</h2>
            <div class="example_code">
                <div class="hl-main">
                    <span class="hl-identifier">a</span>
                    <span class="hl-special">:link</span>
                    <span class="hl-code"></span>
                    <span class="hl-brackets">{</span>
                    <span class="hl-reserved">text-decoration:</span>
                    <span class="hl-string">none</span>
                    <span class="hl-reserved"></span>
                    <span class="hl-code">;</span>
                    <span class="hl-brackets">}</span>
                    <span class="hl-code"></span>
                    <span class="hl-identifier">a</span>
                    <span class="hl-special">:visited</span>
                    <span class="hl-code"></span>
                    <span class="hl-brackets">{</span>
                    <span class="hl-reserved">text-decoration:</span>
                    <span class="hl-string">none</span>
                    <span class="hl-reserved"></span>
                    <span class="hl-code">;</span>
                    <span class="hl-brackets">}</span>
                    <span class="hl-code"></span>
                    <span class="hl-identifier">a</span>
                    <span class="hl-special">:hover</span>
                    <span class="hl-code"></span>
                    <span class="hl-brackets">{</span>
                    <span class="hl-reserved">text-decoration:</span>
                    <span class="hl-string">underline</span>
                    <span class="hl-reserved"></span>
                    <span class="hl-code">;</span>
                    <span class="hl-brackets">}</span>
                    <span class="hl-code"></span>
                    <span class="hl-identifier">a</span>
                    <span class="hl-special">:active</span>
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

        <h2>背景颜色</h2>
        <p>背景颜色属性指定链接背景色：</p>

        <div class="example">
            <h2 class="example">实例</h2>
            <div class="example_code">
                <div class="hl-main">
                    <span class="hl-identifier">a</span>
                    <span class="hl-special">:link</span>
                    <span class="hl-code"></span>
                    <span class="hl-brackets">{</span>
                    <span class="hl-reserved">background-color:</span>
                    <span class="hl-var">#B2FF99</span>
                    <span class="hl-reserved"></span>
                    <span class="hl-code">;</span>
                    <span class="hl-brackets">}</span>
                    <span class="hl-code"></span>
                    <span class="hl-identifier">a</span>
                    <span class="hl-special">:visited</span>
                    <span class="hl-code"></span>
                    <span class="hl-brackets">{</span>
                    <span class="hl-reserved">background-color:</span>
                    <span class="hl-var">#FFFF85</span>
                    <span class="hl-reserved"></span>
                    <span class="hl-code">;</span>
                    <span class="hl-brackets">}</span>
                    <span class="hl-code"></span>
                    <span class="hl-identifier">a</span>
                    <span class="hl-special">:hover</span>
                    <span class="hl-code"></span>
                    <span class="hl-brackets">{</span>
                    <span class="hl-reserved">background-color:</span>
                    <span class="hl-var">#FF704D</span>
                    <span class="hl-reserved"></span>
                    <span class="hl-code">;</span>
                    <span class="hl-brackets">}</span>
                    <span class="hl-code"></span>
                    <span class="hl-identifier">a</span>
                    <span class="hl-special">:active</span>
                    <span class="hl-code"></span>
                    <span class="hl-brackets">{</span>
                    <span class="hl-reserved">background-color:</span>
                    <span class="hl-var">#FF704D</span>
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
</template>