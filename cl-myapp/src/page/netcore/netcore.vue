<template>
    <view class="" hover-class="none" hover-stop-propagation="false">

        <div id="cnblogs_post_body" class="blogpost-body blogpost-body-html">
            <p>“作为 ASP.NET Core 开发者，我接下来应该学习什么？”，下面将介绍需要学习的东西，其中包括：依赖注入、数据库、缓存、日志、模板引擎、实时通信、测试、任务调度、设计模式等。</p>
            <h2>免责声明<button class="cnblogs-toc-button" title="显示目录导航" aria-expanded="false"></button></h2>
            <blockquote>
                <p>该指南的目的是为了给读者心有个大概的轮廓。如果你对接下来要学习的内容感到困惑，这张路线图将指导你，而不是鼓励你选择时髦的东西。
                    你应该逐渐理解为什么一种工具比另一种工具更适合某些场景，并且记住时髦和新颖的东西并不总是意味着最适合这个工作。</p>
            </blockquote>
            <p>&nbsp;</p>
            <p><img src="https://img2018.cnblogs.com/blog/546912/201912/546912-20191220152430685-473906357.png" alt=""
                    class="medium-zoom-image"></p>
            <h2>说明<button class="cnblogs-toc-button" title="显示目录导航" aria-expanded="false"></button></h2>
            <h2>1. 先决条件<button class="cnblogs-toc-button" title="显示目录导航" aria-expanded="false"></button></h2>
            <p> - [C#](https://www.pluralsight.com/paths/csharp)<br> - [Entity
                Framework](https://www.pluralsight.com/search?q=entity%20framework%20core)<br> - [ASP.NET
                Core](https://www.pluralsight.com/search?q=asp.net%20core)<br> - SQL基础知识</p>
            <h2>2. 通用开发技能<button class="cnblogs-toc-button" title="显示目录导航" aria-expanded="false"></button></h2>
            <p> - 学习GIT, 在GitHub中创建开源项目<br> - 掌握HTTP(S)协议, 及其请求方法(GET, POST, PUT, PATCH, DELETE, OPTIONS)<br> - 不要害怕使用
                Google, [Google搜索技巧](http://www.powersearchingwithgoogle.com/)<br> - 学习 [dotnet
                CLI](https://docs.microsoft.com/zh-cn/dotnet/core/tools)<br> - 阅读一些关于算法和数据结构的书籍</p>
            <h2>3. 依赖注入<button class="cnblogs-toc-button" title="显示目录导航" aria-expanded="false"></button></h2>
            <p> 1. DI容器<br> -
                [Microsoft.Extensions.DependencyInjection](https://docs.microsoft.com/zh-cn/aspnet/core/fundamentals/dependency-injection)<br>
                - [AutoFac](https://autofaccn.readthedocs.io/en/latest/integration/aspnetcore.html)<br> -
                [Ninject](http://www.ninject.org/)<br> - [StructureMap](https://github.com/structuremap/structuremap)<br> -
                [Castle Windsor](https://github.com/castleproject/Windsor)<br> 2.
                [生命周期](https://docs.microsoft.com/zh-cn/aspnet/core/fundamentals/dependency-injection#service-lifetimes)<br>
                3. [Scrutor](https://github.com/khellang/Scrutor)</p>
            <h2>4. 数据库<button class="cnblogs-toc-button" title="显示目录导航" aria-expanded="false"></button></h2>
            <p> 1. 关系数据库<br> 1. [SQL Server](https://www.microsoft.com/zh-cn/sql-server/sql-server-2017)<br> 2.
                [PostgreSQL](https://www.postgresql.org/)<br> 3. [MariaDB](https://mariadb.org/)<br> 4.
                [MySQL](https://www.mysql.com/)<br> 2. 云数据库<br> -
                [CosmosDB](https://docs.microsoft.com/zh-cn/azure/cosmos-db)<br> -
                [DynamoDB](https://aws.amazon.com/dynamodb/)<br> 3. 搜索引擎<br> - [ElasticSearch](https://www.elastic.co/)<br>
                - [Solr](http://lucene.apache.org/solr/)<br> - [Sphinx](http://sphinxsearch.com/)<br> 4. NoSQL<br> -
                [MongoDB](https://docs.microsoft.com/zh-cn/aspnet/core/tutorials/first-mongo-app)<br> -
                [Redis](https://redis.io/)<br> - [Apache Cassandra](http://cassandra.apache.org/)<br> -
                [LiteDB](https://github.com/mbdavid/LiteDB)<br> - [RavenDB](https://github.com/ravendb/ravendb)<br> -
                [CouchDB](http://couchdb.apache.org/)</p>
            <h2>5. 缓存<button class="cnblogs-toc-button" title="显示目录导航" aria-expanded="false"></button></h2>
            <p> 1. Entity Framework 二级缓存<br> 1.
                [EFSecondLevelCache.Core](https://github.com/VahidN/EFSecondLevelCache.Core)<br> 2.
                [EntityFrameworkCore.Cacheable](https://github.com/SteffenMangold/EntityFrameworkCore.Cacheable)<br> 2.
                [分布式缓存](https://docs.microsoft.com/en-us/aspnet/core/performance/caching/distributed)<br> 1.
                [Redis](https://redis.io/)<br> 2. [Memcached](https://memcached.org/)<br> 3.
                [内存缓存](https://docs.microsoft.com/en-us/aspnet/core/performance/caching/memory)</p>
            <h2>6. 日志<button class="cnblogs-toc-button" title="显示目录导航" aria-expanded="false"></button></h2>
            <p> 1. 日志框架<br> - [Serilog](https://github.com/serilog/serilog)<br> - [NLog](https://github.com/NLog/NLog)<br> -
            [Elmah](https://elmah.github.io/)<br> -
            [log4net](https://github.com/huorswords/Microsoft.Extensions.Logging.Log4Net.AspNetCore)<br> 2. 日志管理系统<br> -
            [Sentry.io](http://sentry.io)<br> - [Loggly.com](https://loggly.com)<br> - [Elmah.io](http://elmah.io)</p>
        <h2>7. 模板引擎<button class="cnblogs-toc-button" title="显示目录导航" aria-expanded="false"></button></h2>
        <p> 1. [Razor](https://docs.microsoft.com/zh-cn/aspnet/core/mvc/views/razor)<br> 2.
            [DotLiquid](https://github.com/dotliquid/dotliquid)<br> 3.
            [Scriban](https://github.com/lunet-io/scriban)<br> 4. [Fluid](https://github.com/sebastienros/fluid)</p>
        <h2>8. 实时通信<button class="cnblogs-toc-button" title="显示目录导航" aria-expanded="false"></button></h2>
        <p> 1. [SignalR](https://docs.microsoft.com/en-us/aspnet/core/signalr)</p>
        <h2>9. 对象映射<button class="cnblogs-toc-button" title="显示目录导航" aria-expanded="false"></button></h2>
        <p> - [AutoMapper](https://github.com/AutoMapper/AutoMapper)<br> -
            [Mapster](https://github.com/MapsterMapper/Mapster)<br> -
            [AgileMapper](https://github.com/agileobjects/AgileMapper)<br> - [ExpressMapper](http://expressmapper.org/)
        </p>
        <h2>10. API客户端<button class="cnblogs-toc-button" title="显示目录导航" aria-expanded="false"></button></h2>
        <p> 1. REST<br> -
            [OData](https://blogs.msdn.microsoft.com/odatateam/2018/07/03/asp-net-core-odata-now-available/)<br> -
            [Sieve](https://github.com/Biarity/Sieve)<br> 2. GraphQL<br> -
            [GraphQL-dotnet](https://github.com/graphql-dotnet/graphql-dotnet)</p>
        <h2>11. 最好掌握<button class="cnblogs-toc-button" title="显示目录导航" aria-expanded="false"></button></h2>
        <p> - [MediatR](https://github.com/jbogard/MediatR)<br> - [Fluent
            Validation](https://github.com/JeremySkinner/FluentValidation)<br> -
            [Swashbuckle](https://github.com/domaindrivendev/Swashbuckle.AspNetCore)<br> -
            [Benchmark.NET](https://github.com/dotnet/BenchmarkDotNet)<br> -
            [Polly](https://github.com/App-vNext/Polly)<br> - [NodaTime](https://github.com/nodatime/nodatime)<br> -
            [GenFu](https://github.com/MisterJames/GenFu)</p>
        <h2>12. 测试<button class="cnblogs-toc-button" title="显示目录导航" aria-expanded="false"></button></h2>
        <p> 1. 单元测试<br> 1. 测试框架<br> -
            [MSTest](https://docs.microsoft.com/zh-cn/dotnet/core/testing/unit-testing-with-mstest)<br> -
            [NUnit](https://docs.microsoft.com/zh-cn/dotnet/core/testing/unit-testing-with-nunit)<br> -
            [xUnit](https://docs.microsoft.com/zh-cn/dotnet/core/testing/unit-testing-with-dotnet-test)<br> 2. 模拟工具<br>
            - [Moq](https://github.com/moq/moq4)<br> - [NSubstitute](https://github.com/nsubstitute/NSubstitute)<br> -
            [FakeItEasy](https://github.com/FakeItEasy/FakeItEasy)<br> 3. 断言工具<br> -
            [FluentAssertion](https://github.com/fluentassertions/fluentassertions)<br> -
            [Shouldly](https://github.com/shouldly/shouldly)<br> 2. 行为测试<br> -
            [BDDfy](https://github.com/TestStack/TestStack.BDDfy)<br> -
            [SpecFlow](https://github.com/techtalk/SpecFlow/tree/DotNetCore)<br> -
            [LightBDD](https://github.com/LightBDD/LightBDD)<br> 3. 集成测试<br> -
            [WebApplicationFactory](https://docs.microsoft.com/en-us/aspnet/core/test/integration-tests)<br> -
            [TestServer](https://koukia.ca/integration-testing-in-asp-net-core-2-0-51d14ede3968)<br> 4. 端到端测试<br> -
            [Selenium](https://www.automatetheplanet.com/webdriver-dotnetcore2/)<br> -
            [Puppeteer-Sharp](https://github.com/kblok/puppeteer-sharp)</p>
        <h2>13. 任务调度<button class="cnblogs-toc-button" title="显示目录导航" aria-expanded="false"></button></h2>
        <p> - [HangFire](https://github.com/HangfireIO/Hangfire)<br> - [Coravel](https://github.com/jamesmh/coravel)<br>
            - [Fluent Scheduler](https://github.com/fluentscheduler/FluentScheduler)</p>
        <h2>14. 微服务<button class="cnblogs-toc-button" title="显示目录导航" aria-expanded="false"></button></h2>
        <p> 1. 消息队列<br> - [RabbitMQ](https://www.rabbitmq.com/tutorials/tutorial-one-dotnet.html)<br> - [Apache
            Kafka](https://github.com/confluentinc/confluent-kafka-dotnet)<br> -
            [ActiveMQ](https://github.com/apache/activemq)<br> - [Azure Service
            Bus](https://docs.microsoft.com/zh-cn/azure/service-bus-messaging/service-bus-messaging-overview)<br> 2.
            消息总线<br> - [MassTransit](https://github.com/MassTransit/MassTransit)<br> -
            [NServiceBus](https://github.com/Particular/NServiceBus)<br> - [CAP](https://github.com/dotnetcore/CAP)</p>
        <h2>15. SOLID原则<button class="cnblogs-toc-button" title="显示目录导航" aria-expanded="false"></button></h2>
        <p> -
            [单一责任原则(SRP)](https://www.dotnetcurry.com/software-gardening/1148/solid-single-responsibility-principle)<br>
            - [开放封闭原则(OCP)](https://www.dotnetcurry.com/software-gardening/1176/solid-open-closed-principle)<br> -
            [里氏替换原则(LSP)](https://www.dotnetcurry.com/software-gardening/1235/liskov-substitution-principle-lsp-solid-patterns)<br>
            -
            [依赖倒置原则(ISP)](https://www.dotnetcurry.com/software-gardening/1257/interface-segregation-principle-isp-solid-principle)<br>
            - [接口分离原则(DIP)](https://www.dotnetcurry.com/software-gardening/1284/dependency-injection-solid-principles)
        </p>
        <h2>16. 设计模式<button class="cnblogs-toc-button" title="显示目录导航" aria-expanded="false"></button></h2>
        <p> - [CQRS](https://docs.microsoft.com/zh-cn/azure/architecture/patterns/cqrs)<br> -
            [装饰模式](https://www.dofactory.com/net/decorator-design-pattern)<br> -
            [策略模式](https://www.dofactory.com/net/strategy-design-pattern)<br> -
            [观察者模式](https://www.dofactory.com/net/observer-design-pattern)<br> -
            [建造者模式](https://www.dofactory.com/net/builder-design-pattern)<br> -
            [单例模式](https://www.dofactory.com/net/singleton-design-pattern)<br> -
            [外观模式](https://www.dofactory.com/net/facade-design-pattern)<br> -
            [中介者模式](https://www.dofactory.com/net/mediator-design-pattern)</p>
        <h2>地址<button class="cnblogs-toc-button" title="显示目录导航" aria-expanded="false"></button></h2>
        <p>此文章是转载Github上的一个项目，地址：&nbsp;<a
                href="https://github.com/MoienTajik/AspNetCore-Developer-Roadmap/blob/master/ReadMe.zh-Hans.md"
                rel="noopener">https://github.com/MoienTajik/AspNetCore-Developer-Roadmap/blob/master/ReadMe.zh-Hans.md</a>&nbsp;，如果喜欢的给个小星星。
        </p>
        <p>&nbsp;</p>
    </div>
</view></template>