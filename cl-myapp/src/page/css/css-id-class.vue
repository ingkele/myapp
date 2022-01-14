<template>
    <div class="article-body">
        <div class="article-intro" id="content">
            <h1>
                CSS
                <span class="color_h1">Id</span> 和
                <span class="color_h1">Class</span>
            </h1>
            <hr />
            <h2>id 和 class 选择器</h2>
            <p>如果你要在HTML元素中设置CSS样式，你需要在元素中设置"id" 和 "class"选择器。</p>
            <hr />
            <h2>id 选择器</h2>

            <p>id 选择器可以为标有特定 id 的 HTML 元素指定特定的样式。</p>
            <p>HTML元素以id属性来设置id选择器,CSS 中 id 选择器以 "#" 来定义。</p>

            <p>以下的样式规则应用于元素属性 id="para1":</p>

            <div class="example">
                <h2 class="example">实例</h2>
                <div class="example_code">
                    <div class="hl-main">
                        <span class="hl-identifier">#para1</span>
                        <span class="hl-code"></span>
                        <span class="hl-brackets">{</span>
                        <span class="hl-code"></span>
                        <span class="hl-reserved">text-align:</span>
                        <span class="hl-string">center</span>
                        <span class="hl-reserved"></span>
                        <span class="hl-code">;</span>
                        <span class="hl-reserved">color:</span>
                        <span class="hl-var">red</span>
                        <span class="hl-reserved"></span>
                        <span class="hl-code">;</span>
                        <span class="hl-brackets">}</span>
                    </div>
                </div>
                <br />
            </div>

            <p>ID属性不要以数字开头，数字开头的ID在 Mozilla/Firefox 浏览器中不起作用。</p>
            <hr />
            <h2>class 选择器</h2>
            <p>class 选择器用于描述一组元素的样式，class 选择器有别于id选择器，class可以在多个元素中使用。</p>

            <p>class 选择器在HTML中以class属性表示, 在 CSS 中，类选择器以一个点"."号显示：</p>
            <p>在以下的例子中，所有拥有 center 类的 HTML 元素均为居中。</p>

            <div class="example">
                <h2 class="example">实例</h2>
                <div class="example_code">
                    <div class="hl-main">
                        <span class="hl-identifier">.center</span>
                        <span class="hl-code"></span>
                        <span class="hl-brackets">{</span>
                        <span class="hl-reserved">text-align:</span>
                        <span class="hl-string">center</span>
                        <span class="hl-reserved"></span>
                        <span class="hl-code">;</span>
                        <span class="hl-brackets">}</span>
                    </div>
                </div>
                <br />
            </div>
            <p>你也可以指定特定的HTML元素使用class。</p>
            <p>在以下实例中, 所有的 p 元素使用 class="center" 让该元素的文本居中:</p>

            <div class="example">
                <h2 class="example">实例</h2>
                <div class="example_code">
                    <div class="hl-main">
                        <span class="hl-identifier">p</span>
                        <span class="hl-identifier">.center</span>
                        <span class="hl-code"></span>
                        <span class="hl-brackets">{</span>
                        <span class="hl-reserved">text-align:</span>
                        <span class="hl-string">center</span>
                        <span class="hl-reserved"></span>
                        <span class="hl-code">;</span>
                        <span class="hl-brackets">}</span>
                    </div>
                </div>
                <br />
            </div>

            <p>类名的第一个字符不能使用数字！它无法在 Mozilla 或 Firefox 中起作用。</p>
            <!-- 其他扩展 -->
        </div>
    </div>
</template>
