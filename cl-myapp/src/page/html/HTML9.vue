<template>
    <div class="book-body">
        <div class="body-inner">
            <div class="page-wrapper">
                <div class="page-inner">
                    <section class="normal">
                        <h1>与用户交互,表单域</h1>
                        <h4 id="h4-1-">
                            <a name="1、单行文本框" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>1、单行文本框
                        </h4>
                        <p>
                            解释：文本框是一种让访问者自己输入内容的表单对象，通常被用来填写简短的内容和回答
                            <br />语法：&lt;input type="text" name="名称" value="值" size="宽度" maxlength="输入最大长度" readonly="readonly"/&gt;
                        </p>
                        <h4 id="h4-2-">
                            <a name="2、密码文本框" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>2、密码文本框
                        </h4>
                        <p>
                            解释：密码框是为了隐藏用户输入密码信息
                            <br />语法：&lt;input type="password" name="名称" value="值" size="宽度" maxlength="输入最大长度" readonly="readonly"/&gt;
                        </p>
                        <h4 id="h4-3-">
                            <a name="3、单行文本框与密码框属性说明：" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>3、单行文本框与密码框属性说明：
                        </h4>
                        <ul>
                            <li>type：定义文本框类型，text(文本框)、password(密码框)、hidden(隐藏域)</li>
                            <li>name：文本框名称，为了保证数据采集准确性，必须唯一</li>
                            <li>id：文本框的id，常用于jquery验证或采集数据</li>
                            <li>size：定义文本框的长度，单位是单个字符的宽度</li>
                            <li>maxlength：定义文本框最多输入的字符数</li>
                            <li>value：文本框的初始值(默认值)</li>
                            <li>readonly：设置文本框是否只读</li>
                        </ul>
                        <h4 id="h4-4-">
                            <a name="4、隐藏域" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>4、隐藏域
                        </h4>
                        <p>
                            解释：隐藏域是用来收集或发送信息的不可见元素，对于网页访问者，隐藏域是看不见的。当表单被提交时，隐藏域就会将信息用你设置定义的名称和值发送到服务器上
                            <br />语法：&lt;input type="hidden" name="名称" value="值"/&gt;
                            <br />隐藏域的优点：
                            <br />（1）不需要任何服务器资源。
                            <br />（2）支持广泛，任何客户端都支持隐藏域
                            <br />（3）实现简单，隐藏域属于HTML控件，无需像服务器控件那样有需要编程知识
                            <br />隐藏域的缺点：
                            <br />（1）具有较高的安全隐患，因为客户端源码可以看见
                            <br />（2）存储结构简单
                            <br />（3）如果存储了较多的较大的值，则会导致性能问题
                            <br />（4）如果隐藏域过多，则在某些客户端中被禁止
                            <br />（5）隐藏域将数据存储在服务器上，而不存储在客户端
                        </p>
                        <h4 id="h4-5-">
                            <a name="5、多行文本框" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>5、多行文本框
                        </h4>
                        <p>
                            解释：一种让访问者自己输入内容的表单对象，能让访问者填写较长的内容
                            <br />语法：&lt;textarea name="名称" rows="3" cols="20" wrap="virtual" /&gt;…&lt;/textarea&gt;
                            <br />属性说明：
                        </p>
                        <ul>
                            <li>name：定义多行文本框名称，为了保证数据采集准确性，必须唯一</li>
                            <li>cols：定义多行文本框的宽度，单位是单个字符宽度</li>
                            <li>rows：定义多行文本框的高度，单位是单个字符宽度</li>
                            <li>wrap：定义输入内容大于文本域时显示的方式，可选值如下：</li>
                        </ul>
                        <p>
                            （1）默认值是文本自动换行,当输入内容超过右边界时会自动转到下一行,在数据被提交时自动换行的地方不会有换行符出现
                            <br />（2）Off，用来避免文本换行，当输入的内容超过右边界时，文本将向左滚动，必须用Return才能将插入点移到下一行
                            <br />（3）Virtual，允许文本自动换行。当输入内容超过右边界时会自动转到下一行，在数据被提交时自动换行的地方不会有换行符出现
                            <br />（4）Physical，让文本换行，在数据被提交处理时换行符也将被一起提交处理
                        </p>
                        <h4 id="h4-6-">
                            <a name="6、单选框" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>6、单选框
                        </h4>
                        <p>
                            解释：用于唯一选择，比如单选题、状态选择等
                            <br />语法：&lt;input type="radio" name="名称" value="值" checked="checked" disabled="disabled"/&gt;
                            <br />属性说明：
                        </p>
                        <ul>
                            <li>type：定义类型为单选按钮</li>
                            <li>name：定义单选框名称，为了保证数据采集准确性，单选框都是以组为单位使用，在同一组中的单选项都必须用同一个名称</li>
                            <li>value：定义单选框的值，在同一组中，它们的域值必须是不同的</li>
                            <li>checked：定义单选框是否被选中，如不需要选中则去掉checked=”checked”</li>
                            <li>disable：定义单选按钮不可用，不可点击</li>
                        </ul>
                        <h4 id="h4-7-">
                            <a name="7、复选框" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>7、复选框
                        </h4>
                        <p>
                            解释：复选框允许在待选项中选中一项以上的选项。每个复选框都是一个独立的元素，都必须有一个唯一的名称。
                            <br />语法：&lt;input type="checkbox" name="名称" value="值" checked="checked" disabled="disabled"/&gt;
                            <br />属性说明：
                        </p>
                        <ul>
                            <li>type：定义类型为复选框</li>
                            <li>name：定义复选框名称，为了保证数据采集准确性，必须唯一</li>
                            <li>value：定义复选框的值</li>
                            <li>checked：定义复选框是否被选中，如不需要选中则去掉checked=”checked”</li>
                            <li>disable：定义复选框不可用，不可点击</li>
                        </ul>
                        <h4 id="h4-8-">
                            <a name="8、下拉选择框" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>8、下拉选择框
                        </h4>
                        <p>
                            解释：下拉选择框允许你在一个有限的空间设置多种选项，比如城市级联选择等
                            <br />语法：
                        </p>
                        <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>名称<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>数字<span class="token punctuation">"</span></span> <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>选项值 <span class="token punctuation">"</span></span> <span class="token attr-name">selected</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>selected<span class="token punctuation">"</span></span> <span class="token attr-name">multiple</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>multiple<span class="token punctuation">"</span></span><span
    class="token punctuation"
>&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>选项值<span class="token punctuation">"</span></span><span
    class="token punctuation"
>&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>选项值<span class="token punctuation">"</span></span><span
    class="token punctuation"
>&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span
    class="token punctuation"
>&gt;</span></span>
</code></pre>
                        <p>属性说明：</p>
                        <ul>
                            <li>name：定义下拉选择框的名称</li>
                            <li>size：定义下拉列表中可见选项的数目</li>
                            <li>value：定义选择项的值</li>
                            <li>selected：表示默认已经选择本选项</li>
                            <li>multiple：表示可以多选，如果不设置本属性，那么只能单选，默认单选。</li>
                            <li>optgroup：定义下拉选项组</li>
                        </ul>
                        <p>
                            optgroup属性：
                            <br />（1）label：选项组的标签描述
                            <br />（2）disabled：禁止改选项组，灰色显示
                            <br />optgroup示例如下：
                        </p>
                        <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span><span
    class="token punctuation"
>&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>optgroup</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Swedish Cars<span class="token punctuation">"</span></span><span
    class="token punctuation"
>&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>volvo<span class="token punctuation">"</span></span><span
    class="token punctuation"
>&gt;</span></span>Volvo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span
    class="token punctuation"
>&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>saab<span class="token punctuation">"</span></span><span
    class="token punctuation"
>&gt;</span></span>Saab<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span
    class="token punctuation"
>&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>optgroup</span><span
    class="token punctuation"
>&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>optgroup</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>German Cars<span class="token punctuation">"</span></span><span
    class="token punctuation"
>&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>mercedes<span class="token punctuation">"</span></span><span
    class="token punctuation"
>&gt;</span></span>Mercedes<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span
    class="token punctuation"
>&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>audi<span class="token punctuation">"</span></span><span
    class="token punctuation"
>&gt;</span></span>Audi<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span
    class="token punctuation"
>&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>optgroup</span><span
    class="token punctuation"
>&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span
    class="token punctuation"
>&gt;</span></span>
</code></pre>
                        <h4 id="h4-9-">
                            <a name="9、文件上传框" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>9、文件上传框
                        </h4>
                        <p>
                            解释：用于用户在客户端上传文件。
                            <br />语法：&lt;input type="file" name="名称" size="15" maxlength="100"/&gt;
                            <br />属性说明：
                        </p>
                        <ul>
                            <li>type：定义文件上传框</li>
                            <li>name：定义文件上传框名称，为了保证数据采集准确性，必须唯一</li>
                            <li>size：定义文本框的长度，单位是单个字符的宽度</li>
                            <li>maxlength：定义文本框最多输入的字符数</li>
                        </ul>
                        <h4 id="h4-10-">
                            <a name="10、按钮" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>10、按钮
                        </h4>
                        <p>
                            （1）提交按钮：&lt;input type="submit" value="提交"/&gt;
                            <br />（2）重置按钮：&lt;input type="reset" value="重置"/&gt;
                            <br />（3）一般按钮：&lt;input type="button" value="Click me" onclick="msg()"/&gt;
                            <br />（4）图像按钮：&lt;input type="image" src="submit.gif" alt="Submit"/&gt;
                            <br />（5）按钮图片：&lt;button name=”提交” type=”button”&gt;&lt;img src=”URL”/&gt;&lt;/button&gt;
                        </p>
                        <h4 id="h4-11-fieldset-legend">
                            <a name="11、表单fieldset与legend" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>11、表单fieldset与legend
                        </h4>
                        <p>
                            说明：fieldset定义表单外边框，legend定义表单标题
                            <br />示例如下：
                        </p>
                        <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span><span
    class="token punctuation"
>&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fieldset</span><span
    class="token punctuation"
>&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>legend</span><span
    class="token punctuation"
>&gt;</span></span>标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>legend</span><span
    class="token punctuation"
>&gt;</span></span>
          height: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
          weight: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fieldset</span><span
    class="token punctuation"
>&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span
    class="token punctuation"
>&gt;</span></span>
</code></pre>
                        <h4 id="h4-12-form-">
                            <a name="12、form完整用户注册示例" class="reference-link"></a>
                            <span class="header-link octicon octicon-link"></span>12、form完整用户注册示例
                        </h4>
                        <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>User.php<span class="token punctuation">"</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>post<span class="token punctuation">"</span></span> <span class="token attr-name">enctype</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>MIME<span class="token punctuation">"</span></span><span
    class="token punctuation"
>&gt;</span></span>
    用户名：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>20<span class="token punctuation">"</span></span> <span class="token attr-name">maxlength</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>10<span class="token punctuation">"</span></span><span
    class="token punctuation"
>/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span
    class="token punctuation"
>/&gt;</span></span>
    密码：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>20<span class="token punctuation">"</span></span> <span class="token attr-name">maxlength</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>10<span class="token punctuation">"</span></span><span
    class="token punctuation"
>/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span
    class="token punctuation"
>/&gt;</span></span>
    性别：
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>radio<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sex<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>boy<span class="token punctuation">"</span></span> <span class="token attr-name">checked</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>checked<span class="token punctuation">"</span></span><span
    class="token punctuation"
>/&gt;</span></span>男
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>radio<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sex<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>gril<span class="token punctuation">"</span></span><span
    class="token punctuation"
>/&gt;</span></span>女
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span
    class="token punctuation"
>/&gt;</span></span>
    爱好：
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ins<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>basketball<span class="token punctuation">"</span></span><span
    class="token punctuation"
>/&gt;</span></span>篮球
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ins<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>football<span class="token punctuation">"</span></span> <span class="token attr-name">checked</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>checked<span class="token punctuation">"</span></span><span
    class="token punctuation"
>/&gt;</span></span>足球
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ins<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>badminton<span class="token punctuation">"</span></span><span
    class="token punctuation"
>/&gt;</span></span>羽毛球
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span
    class="token punctuation"
>/&gt;</span></span>
    家乡：
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>home<span class="token punctuation">"</span></span><span
    class="token punctuation"
>&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>四川<span class="token punctuation">"</span></span> <span class="token attr-name">selected</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>selected<span class="token punctuation">"</span></span><span
    class="token punctuation"
>&gt;</span></span>四川<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span
    class="token punctuation"
>&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>重庆<span class="token punctuation">"</span></span><span
    class="token punctuation"
>&gt;</span></span>重庆<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span
    class="token punctuation"
>&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>北京<span class="token punctuation">"</span></span><span
    class="token punctuation"
>&gt;</span></span>北京<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span
    class="token punctuation"
>&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span
    class="token punctuation"
>&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span
    class="token punctuation"
>/&gt;</span></span>
    头像:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>file<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>icon<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>15<span class="token punctuation">"</span></span> <span class="token attr-name">maxlength</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span><span
    class="token punctuation"
>/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span
    class="token punctuation"
>/&gt;</span></span>
    备注：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>textarea</span> <span class="token attr-name">rows</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span> <span class="token attr-name">cols</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>20<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>remark<span class="token punctuation">"</span></span><span
    class="token punctuation"
>&gt;</span></span><span
    class="token tag"
><span class="token tag"><span class="token punctuation">&lt;/</span>textarea</span><span
    class="token punctuation"
>&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span
    class="token punctuation"
>/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>hidden<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>id<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span><span
    class="token punctuation"
>&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>提交<span class="token punctuation">"</span></span><span
    class="token punctuation"
>/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>reset<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>重置<span class="token punctuation">"</span></span><span
    class="token punctuation"
>/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span
    class="token punctuation"
>&gt;</span></span>
</code></pre>
                        <p>以上基本上就是form表单常用的属性，示例效果请复制粘贴运行即可。</p>
                    </section>
                </div>
            </div>
        </div>
        <a href="http://doc.liangxinghua.com/html/8.html" class="navigation navigation-prev">
            <i class="fa fa-angle-left"></i>
        </a>
        <a href="http://doc.liangxinghua.com/html/10.html" class="navigation navigation-next">
            <i class="fa fa-angle-right"></i>
        </a>
    </div>
</template>