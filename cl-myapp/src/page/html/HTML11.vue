<template>
    <div class="book-body">
        <div class="body-inner">
            <div class="page-wrapper">
                <div class="page-inner">
                    <section class="normal">
                        <h1>多媒体和跑马灯</h1>
                        <h3 id="h3-u591Au5A92u4F53">
                            <a name="多媒体" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>多媒体
                        </h3>
                        <h4 id="h4-1-">
                            <a name="1、音频、视频、动画等" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>1、音频、视频、动画等
                        </h4>
                        <p>用法：&lt;embed src="URL" width="500" height="400"&gt;&lt;/embed&gt;</p>
                        <h4 id="h4-2-lt-embed-gt-">
                            <a name="2、<embed>属性说明" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>2、&lt;embed&gt;属性说明
                        </h4>
                        <ul>
                            <li>src：嵌入内容的url路径，可以是相对路径或绝对路径</li>
                            <li>width：设置嵌入内容的宽度</li>
                            <li>height：设置嵌入内容的高度</li>
                            <li>units：设置指定高和宽的单位为pixels或en</li>
                            <li>autostart：设置音频或视频文件是否在下载完之后就自动播放，取值如下：</li>
                            <li>true：音乐文件在下载完之后自动播放</li>
                            <li>false：音乐文件在下载完之后不自动播放</li>
                            <li>loop：设置音频或视频文件是否循环及循环次数，取值如下：</li>
                            <li>正整数：音频或视频文件的循环次数与正整数值相同</li>
                            <li>true：音频或视频文件循环</li>
                            <li>false：音频或视频文件不循环</li>
                        </ul>
                        <p>示例：</p>
                        <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>embed</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>your.mid<span class="token punctuation">"</span></span> <span class="token attr-name">autostart</span><span class="token attr-value"><span class="token punctuation">=</span>true</span> <span class="token attr-name">loop</span><span class="token attr-value"><span class="token punctuation">=</span>2</span><span
    class="token punctuation"
>&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>embed</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>your.mid<span class="token punctuation">"</span></span> <span class="token attr-name">autostart</span><span class="token attr-value"><span class="token punctuation">=</span>true</span> <span class="token attr-name">loop</span><span class="token attr-value"><span class="token punctuation">=</span>true</span><span
    class="token punctuation"
>&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>embed</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>your.mid<span class="token punctuation">"</span></span> <span class="token attr-name">autostart</span><span class="token attr-value"><span class="token punctuation">=</span>true</span> <span class="token attr-name">loop</span><span class="token attr-value"><span class="token punctuation">=</span>false</span><span
    class="token punctuation"
>&gt;</span></span>
</code></pre>
                        <ul>
                            <li>hidden：设置控制面板是否显示，默认值为false</li>
                            <li>true：隐藏面板</li>
                            <li>false：显示面板</li>
                        </ul>
                        <p>示例：</p>
                        <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>embed</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>your.mid<span class="token punctuation">"</span></span> <span class="token attr-name">hidden</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span
    class="token punctuation"
>&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>embed</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>your.mid<span class="token punctuation">"</span></span> <span class="token attr-name">hidden</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span><span
    class="token punctuation"
>&gt;</span></span>
</code></pre>
                        <ul>
                            <li>starttime：设置音频或视频文件开始播放时间.未定义则从文件开头播放,格式:starttime=mm:ss(分:秒)</li>
                            <li>volume：设置音量大小，未定义则使用系统本身的设定。取值：0是最大值，可以使用负值使音量变小</li>
                            <li>controls：设置控制面板的外观。默认值是console</li>
                        </ul>
                        <p>取值如下：</p>
                        <table>
                            <thead>
                                <tr>
                                    <th style="text-align:left">属性</th>
                                    <th style="text-align:left">取值</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style="text-align:left">console</td>
                                    <td style="text-align:left">一般正常面板</td>
                                </tr>
                                <tr>
                                    <td style="text-align:left">smallconsole</td>
                                    <td style="text-align:left">较小的面板</td>
                                </tr>
                                <tr>
                                    <td style="text-align:left">playbutton</td>
                                    <td style="text-align:left">只显示播放按钮</td>
                                </tr>
                                <tr>
                                    <td style="text-align:left">pausebutton</td>
                                    <td style="text-align:left">只显示暂停按钮</td>
                                </tr>
                                <tr>
                                    <td style="text-align:left">stopbutton</td>
                                    <td style="text-align:left">只显示停止按钮</td>
                                </tr>
                                <tr>
                                    <td style="text-align:left">volumelever</td>
                                    <td style="text-align:left">只显示音量调节按钮</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>示例：&lt;embed src="your.mid" controls=smallconsole&gt;</p>
                        <ul>
                            <li>name：设置对象的名称</li>
                            <li>title：设置说明的文字。该属性规定音频或视频文件的说明文字</li>
                        </ul>
                        <p>示例：&lt;embed src="your.mid" title="第一首歌"&gt;</p>
                        <ul>
                            <li>palette：设置前景色和背景色，第一个值为前景色，第二个值为背景色，中间用|隔开</li>
                            <li>align：设置控制面板和当前行中的对象的对齐方式</li>
                        </ul>
                        <table>
                            <thead>
                                <tr>
                                    <th style="text-align:left">属性</th>
                                    <th style="text-align:left">说明</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style="text-align:left">left</td>
                                    <td style="text-align:left">控制面板居左</td>
                                </tr>
                                <tr>
                                    <td style="text-align:left">right</td>
                                    <td style="text-align:left">控制面板居右</td>
                                </tr>
                                <tr>
                                    <td style="text-align:left">top</td>
                                    <td style="text-align:left">控制面板的顶部与当前行中的最高对象的顶部对齐</td>
                                </tr>
                                <tr>
                                    <td style="text-align:left">bottom</td>
                                    <td style="text-align:left">控制面板的底部与当前行中的对象的基线对齐</td>
                                </tr>
                                <tr>
                                    <td style="text-align:left">baseline</td>
                                    <td style="text-align:left">控制面板的底部与文本的基线对齐</td>
                                </tr>
                                <tr>
                                    <td style="text-align:left">texttop</td>
                                    <td style="text-align:left">控制面板的顶部与当前行中的最高的文字顶部对齐</td>
                                </tr>
                                <tr>
                                    <td style="text-align:left">middle</td>
                                    <td style="text-align:left">控制面板的中间与当前行的基线对齐</td>
                                </tr>
                                <tr>
                                    <td style="text-align:left">absmiddle</td>
                                    <td style="text-align:left">控制面板的中间与当前文本或对象的中间对齐</td>
                                </tr>
                                <tr>
                                    <td style="text-align:left">absbottom</td>
                                    <td style="text-align:left">控制面板的底部与文字的底部对齐</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>type：设置播放器类型</p>
                        <ul>
                            <li>Flash：type=”application/x-shockwave-flash”</li>
                            <li>Windows media player：type=”application/x-mplayer2”</li>
                            <li>Realplayer：type=”audio/x-pn-realaudio-plugin”</li>
                        </ul>
                        <h4 id="h4-3-bgsound-">
                            <a name="3、bgsound背景音乐" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>3、bgsound背景音乐
                        </h4>
                        <p>解释：bgsound(background sound),Internet Explorer(ie)专用标签，打开网页的时候自动播放背景音乐</p>
                        <p>属性如下：</p>
                        <ul>
                            <li>balance：调整左右声道的音量平衡，取值范围 -10000～10000</li>
                            <li>loop：指定播放回数。当指定为infinite或-1时无限循环播放</li>
                            <li>
                                src：指定音乐文件的地址。支持
                                <em>.wav,</em>.au,
                                <em>.mid,</em>.aif 等格式
                            </li>
                            <li>volume：调整音量，取值范围 -10000～0 。0 是最大音量</li>
                        </ul>
                        <h4 id="h4-4-applet-">
                            <a name="4、applet标签" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>4、applet标签
                        </h4>
                        <p>解释：需要额外的插件和安装过程才能起作用(一般不建议使用)</p>
                        <h3 id="h3-marquee-">
                            <a name="marquee标签" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>marquee标签
                        </h3>
                        <h4 id="h4-1-">
                            <a name="1、作用" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>1、作用
                        </h4>
                        <p>创建一个滚动的文本字幕</p>
                        <h4 id="h4-2-">
                            <a name="2、属性" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>2、属性
                        </h4>
                        <ul>
                            <li>direction：设置滚动方向</li>
                            <li>left：向左</li>
                            <li>right：向右</li>
                            <li>up：向上</li>
                            <li>down：向下（示例：&lt;marquee direction="down"&gt;向下&lt;/marquee&gt;）</li>
                            <li>behavior：文字滚动方式</li>
                            <li>scroll：连续滚动，重复由一段滚动到另一端</li>
                            <li>slide：滑动一次，不重复</li>
                            <li>alternate：表示两端之间来回滚动</li>
                            <li>loop：循环次数（-1：无限循环（默认），正整数：循环几次）</li>
                            <li>scrollamount：滚动速度，值取正整数，默认是6</li>
                            <li>scrolldelay：停顿时间，值取正整数，默认为0，单位毫秒</li>
                            <li>valign：垂直对齐方式</li>
                            <li>top：顶部对齐</li>
                            <li>middle：居中对齐（默认）</li>
                            <li>bottom：底部对齐</li>
                            <li>align：水平对齐方式</li>
                        </ul>
                        <table>
                            <thead>
                                <tr>
                                    <th style="text-align:left">属性</th>
                                    <th style="text-align:left">说明</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style="text-align:left">absbottom</td>
                                    <td style="text-align:left">绝对底部对齐（与g、p等字母的最下端对齐）</td>
                                </tr>
                                <tr>
                                    <td style="text-align:left">absmiddle</td>
                                    <td style="text-align:left">绝对中央对齐</td>
                                </tr>
                                <tr>
                                    <td style="text-align:left">baseline</td>
                                    <td style="text-align:left">底线对齐</td>
                                </tr>
                                <tr>
                                    <td style="text-align:left">bottom</td>
                                    <td style="text-align:left">底部对齐（默认）</td>
                                </tr>
                                <tr>
                                    <td style="text-align:left">left</td>
                                    <td style="text-align:left">左对齐</td>
                                </tr>
                                <tr>
                                    <td style="text-align:left">middle</td>
                                    <td style="text-align:left">中间对齐</td>
                                </tr>
                                <tr>
                                    <td style="text-align:left">right</td>
                                    <td style="text-align:left">右对齐</td>
                                </tr>
                                <tr>
                                    <td style="text-align:left">texttop</td>
                                    <td style="text-align:left">顶线对齐</td>
                                </tr>
                                <tr>
                                    <td style="text-align:left">top</td>
                                    <td style="text-align:left">顶部对齐</td>
                                </tr>
                            </tbody>
                        </table>
                        <ul>
                            <li>bgcolor：设置活动字幕的背景色，默认白色</li>
                            <li>height：设置活动字幕高度，值取正整数或百分比</li>
                            <li>width：设置活动字幕宽度，值取正整数或百分比</li>
                            <li>hspace：设置活动字幕元素到区域边界的水平距离，值取正整数，单位是像素</li>
                            <li>vspace：设置活动字幕元素到区域边界的垂直距离，值取正整数，单位是像素</li>
                            <li>
                                onmouseover=this.stop() onmouseout=this.start() 表示当鼠标移上区域的时候滚动停止，当鼠标移开的时候又继续滚动。
                                <br />示例：
                                <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>marquee</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>scrollarea<span class="token punctuation">"</span></span> <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>up<span class="token punctuation">"</span></span> <span class="token attr-name">scrolldelay</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>10<span class="token punctuation">"</span></span> 
  <span class="token attr-name">scrollamount</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>150<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>80<span class="token punctuation">"</span></span> 
  <span class="token attr-name">onmouseover</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>this.stop();<span class="token punctuation">"</span></span> 
  <span class="token attr-name">onmouseout</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>this.start();<span class="token punctuation">"</span></span><span
    class="token punctuation"
>&gt;</span></span>紫沐兜
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>marquee</span><span
    class="token punctuation"
>&gt;</span></span>
</code></pre>
                                <strong>3、常见跑马灯</strong>
                                <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>marquee</span><span
    class="token punctuation"
>&gt;</span></span>跑马灯<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>marquee</span><span
    class="token punctuation"
>&gt;</span></span>普通
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>marquee</span> <span class="token attr-name">behavior</span><span class="token attr-value"><span class="token punctuation">=</span>slide</span><span
    class="token punctuation"
>&gt;</span></span>跑马灯<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>marquee</span><span
    class="token punctuation"
>&gt;</span></span>滑动 一次
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>marquee</span> <span class="token attr-name">behavior</span><span class="token attr-value"><span class="token punctuation">=</span>scroll</span><span
    class="token punctuation"
>&gt;</span></span>跑马灯<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>marquee</span><span
    class="token punctuation"
>&gt;</span></span>连续滚动
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>marquee</span> <span class="token attr-name">behavior</span><span class="token attr-value"><span class="token punctuation">=</span>alternate</span><span
    class="token punctuation"
>&gt;</span></span>跑马灯<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>marquee</span><span
    class="token punctuation"
>&gt;</span></span>来回滚动
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>marquee</span> <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation">=</span>down</span><span
    class="token punctuation"
>&gt;</span></span>跑马灯<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>marquee</span><span
    class="token punctuation"
>&gt;</span></span>向下滚动
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>marquee</span> <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation">=</span>up</span><span
    class="token punctuation"
>&gt;</span></span>跑马灯<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>marquee</span><span
    class="token punctuation"
>&gt;</span></span>向上滚动 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>marquee</span> <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation">=</span>right</span><span
    class="token punctuation"
>&gt;</span></span>跑马灯<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>marquee</span><span
    class="token punctuation"
>&gt;</span></span>向右滚动 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>marquee</span> <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation">=</span>’left’</span><span
    class="token punctuation"
>&gt;</span></span>跑马灯<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>marquee</span><span
    class="token punctuation"
>&gt;</span></span>向左滚动 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>marquee</span> <span class="token attr-name">loop</span><span class="token attr-value"><span class="token punctuation">=</span>2</span><span
    class="token punctuation"
>&gt;</span></span>跑马灯<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>marquee</span><span
    class="token punctuation"
>&gt;</span></span>滚动次数 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>marquee</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation">=</span>180</span><span
    class="token punctuation"
>&gt;</span></span>跑马灯<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>marquee</span><span
    class="token punctuation"
>&gt;</span></span>设定宽度 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>marquee</span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation">=</span>30</span><span
    class="token punctuation"
>&gt;</span></span>跑马灯<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>marquee</span><span
    class="token punctuation"
>&gt;</span></span>设定高度 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>marquee</span> <span class="token attr-name">bgcolor</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>red<span class="token punctuation">"</span></span><span
    class="token punctuation"
>&gt;</span></span>跑马灯<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>marquee</span><span
    class="token punctuation"
>&gt;</span></span>设定背景颜色 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>marquee</span> <span class="token attr-name">scrollamount</span><span class="token attr-value"><span class="token punctuation">=</span>30</span><span
    class="token punctuation"
>&gt;</span></span>跑马灯<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>marquee</span><span
    class="token punctuation"
>&gt;</span></span>设定滚动速度 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>marquee</span> <span class="token attr-name">scrolldelay</span><span class="token attr-value"><span class="token punctuation">=</span>300</span><span
    class="token punctuation"
>&gt;</span></span>跑马灯<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>marquee</span><span
    class="token punctuation"
>&gt;</span></span>设定滚动时间 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>marquee</span> <span class="token attr-name">onmouseover</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>this.stop()<span class="token punctuation">"</span></span><span
    class="token punctuation"
>&gt;</span></span>跑马灯<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>marquee</span><span
    class="token punctuation"
>&gt;</span></span>鼠标经过上面时停止滚动 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>marquee</span> <span class="token attr-name">onmouseover</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>this.start()<span class="token punctuation">"</span></span><span
    class="token punctuation"
>&gt;</span></span>跑马灯<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>marquee</span><span
    class="token punctuation"
>&gt;</span></span>鼠标离开时开始滚动
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>marquee</span> <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation">=</span>left</span> <span class="token attr-name">loop</span><span class="token attr-value"><span class="token punctuation">=</span>2</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation">=</span>960</span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation">=</span>30</span> <span class="token attr-name">scrollamount</span><span class="token attr-value"><span class="token punctuation">=</span>30</span> <span class="token attr-name">scrolldelay</span><span class="token attr-value"><span class="token punctuation">=</span>300</span> 
<span class="token attr-name">onmouseover</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>this.stop()<span class="token punctuation">"</span></span> <span class="token attr-name">onmouseover</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>this.start()<span class="token punctuation">"</span></span><span
    class="token punctuation"
>&gt;</span></span>跑马灯<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>marquee</span><span
    class="token punctuation"
>&gt;</span></span>
</code></pre>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
        <a href="http://doc.liangxinghua.com/html/10.html" class="navigation navigation-prev">
            <i class="fa fa-angle-left"></i>
        </a>
        <a href="http://doc.liangxinghua.com/html/12.html" class="navigation navigation-next">
            <i class="fa fa-angle-right"></i>
        </a>
    </div>
</template>