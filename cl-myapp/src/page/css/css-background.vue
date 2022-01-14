<template>
    <div class="article-body">
        <div class="article-intro" id="content">
            <h1>
                CSS
                <span class="color_h1">背景</span>
            </h1>
            <br />
            <p>CSS 背景属性用于定义HTML元素的背景。</p>
            <p>CSS 属性定义背景效果:</p>
            <ul>
                <li>background-color</li>
                <li>background-image</li>
                <li>background-repeat</li>
                <li>background-attachment</li>
                <li>background-position</li>
            </ul>

            <h2>背景颜色</h2>
            <p>background-color 属性定义了元素的背景颜色.</p>
            <p>页面的背景颜色使用在body的选择器中:</p>

            <div class="example">
                <h2 class="example">实例</h2>
                <div class="example_code notranslate">body {background-color:#b0c4de;}</div>
                <br />
            </div>
            <p>CSS中，颜色值通常以以下方式定义:</p>
            <ul>
                <li>十六进制 - 如："#ff0000"</li>
                <li>RGB - 如："rgb(255,0,0)"</li>
                <li>颜色名称 - 如："red"</li>
            </ul>

            <p>以下实例中, h1, p, 和 div 元素拥有不同的背景颜色:</p>

            <div class="example">
                <h2 class="example">实例</h2>
                <div class="example_code notranslate">
                    h1 {background-color:#6495ed;}
                    <br />
                    p {background-color:#e0ffff;}
                    <br />
                    div {background-color:#b0c4de;}
                </div>
                <br />
            </div>
            <br />
            <hr />
            <h2>背景图像</h2>
            <p>background-image 属性描述了元素的背景图像.</p>
            <p>默认情况下，背景图像进行平铺重复显示，以覆盖整个元素实体.</p>
            <p>页面背景图片设置实例:</p>

            <div class="example">
                <h2 class="example">实例</h2>
                <div class="example_code notranslate">body {background-image:url('paper.gif');}</div>
                <br />
            </div>
            <p>下面是一个例子是一个糟糕的文字和背景图像组合。文本可读性差:</p>

            <div class="example">
                <h2 class="example">实例</h2>
                <div class="example_code notranslate">body {background-image:url('bgdesert.jpg');}</div>
                <br />
            </div>
            <br />
            <hr />
            <h2>背景图像 - 水平或垂直平铺</h2>
            <p>默认情况下 background-image 属性会在页面的水平或者垂直方向平铺。</p>
            <p>一些图像如果在水平方向与垂直方向平铺，这样看起来很不协调，如下所示:&nbsp;</p>

            <div class="example">
                <h2 class="example">实例</h2>
                <div class="example_code notranslate">
                    body
                    <br />{
                    <br />background-image:url('gradient2.png');
                    <br />}
                </div>
                <br />
            </div>
            <p>如果图像只在水平方向平铺 (repeat-x), 页面背景会更好些:</p>

            <div class="example">
                <h2 class="example">实例</h2>
                <div class="example_code notranslate">
                    body
                    <br />{
                    <br />background-image:url('gradient2.png');
                    <br />background-repeat:repeat-x;
                    <br />}
                </div>
                <br />
            </div>
            <br />
            <hr />
            <h2>背景图像- 设置定位与不平铺</h2>
            <p>让背景图像不影响文本的排版</p>
            <p>如果你不想让图像平铺，你可以使用 background-repeat 属性:</p>

            <div class="example">
                <h2 class="example">实例</h2>
                <div class="example_code notranslate">
                    body
                    <br />{
                    <br />background-image:url('img_tree.png');
                    <br />background-repeat:no-repeat;
                    <br />}
                </div>
                <br />
            </div>
            <p>以上实例中，背景图像与文本显示在同一个位置，为了让页面排版更加合理，不影响文本的阅读，我们可以改变图像的位置。</p>
            <p>可以利用 background-position 属性改变图像在背景中的位置:</p>

            <div class="example">
                <h2 class="example">实例</h2>
                <div class="example_code notranslate">
                    body
                    <br />{
                    <br />background-image:url('img_tree.png');
                    <br />background-repeat:no-repeat;
                    <br />background-position:right top;
                    <br />}
                </div>
                <br />
            </div>
            <br />
            <hr />
            <h2>背景- 简写属性</h2>
            <p>在以上实例中我们可以看到页面的背景颜色通过了很多的属性来控制。</p>
            <p>为了简化这些属性的代码，我们可以将这些属性合并在同一个属性中.</p>
            <p>背景颜色的简写属性为 "background":</p>
            <div class="example">
                <h2 class="example">实例</h2>
                <div
                    class="example_code notranslate"
                >body {background:#ffffff url('img_tree.png') no-repeat right top;}</div>
                <br />
            </div>
            <p>当使用简写属性时，属性值的顺序为：:</p>
            <ul>
                <li>background-color</li>
                <li>background-image</li>
                <li>background-repeat</li>
                <li>background-attachment</li>
                <li>background-position</li>
            </ul>
            <p>以上属性无需全部使用，你可以按照页面的实际需要使用.</p>
            <hr />
            <h2>CSS 背景属性</h2>

            <table class="reference notranslate">
                <tbody>
                    <tr>
                        <th width="30%" align="left">Property</th>
                        <th width="70%" align="left">描述</th>
                    </tr>
                    <tr>
                        <td>background</td>
                        <td>简写属性，作用是将背景属性设置在一个声明中。</td>
                    </tr>
                    <tr>
                        <td>background-attachment</td>
                        <td>背景图像是否固定或者随着页面的其余部分滚动。</td>
                    </tr>
                    <tr>
                        <td>background-color</td>
                        <td>设置元素的背景颜色。</td>
                    </tr>
                    <tr>
                        <td>background-image</td>
                        <td>把图像设置为背景。</td>
                    </tr>
                    <tr>
                        <td>background-position</td>
                        <td>设置背景图像的起始位置。</td>
                    </tr>
                    <tr>
                        <td>background-repeat</td>
                        <td>设置背景图像是否及如何重复。</td>
                    </tr>
                </tbody>
            </table>
            <!-- 其他扩展 -->
        </div>
    </div>
</template>
