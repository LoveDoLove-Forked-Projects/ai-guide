## WPS里装上deepseek，简直就是办公神器


整个的安装步骤，一共分为三步

### 1、申请API key 

首先，我们要搞到一个deepseek的api key

![img](https://pic.yupi.icu/yuyi/1739501221582-0e249f21-782e-4dcd-b30a-c7a22e7ecf0a.webp)

右上角，点开api开放平台，幸运的话，可以直接登录。

![img](https://pic.yupi.icu/yuyi/1739501221520-2d20074b-f524-4fc5-bc00-2f150ffc1268.webp)

然后，点击左侧的API keys，就可以免费申请创建一个你自己的密钥。

这个keys等会需要用到这里注意，既然是密钥，肯定是只有你自己知道的，注意保管好，不要告诉别人。

申请下来的keys ，就是一长串字符串。

### 2、配置WPS宏 

接下来，我们打开WPS，在WPS的文字文档里，配置一个宏。

方法是，先新建一个Word文字文档，然后点击【工具】-【开发工具】

![img](https://pic.yupi.icu/yuyi/1739501221480-fbcd3786-40ae-4d90-b66a-361ba356c01e.webp)

在开发工具里，点击【查看代码】

![img](https://pic.yupi.icu/yuyi/1739501221479-9be0859c-19b6-4880-b470-310f63396fed.webp)

即可打开WPS的宏编辑界面：

![img](https://pic.yupi.icu/yuyi/1739501221549-36470faa-7272-479e-9576-9dc40259a7ac.webp)

然后，直接点击左侧的Normal.dotm文件，右键单击，插入一个【模块】

![img](https://pic.yupi.icu/yuyi/1739501221866-58178bd0-8b3a-4377-910c-0f4fb34075c1.png)

然后，把新建的这个代码块的名字，改成：deepseek

![img](https://pic.yupi.icu/yuyi/1739501221880-951d8180-8fbd-44d1-8891-682ab8431132.webp)

这样，WPS的宏，就新建好了，接下来，把JS宏代码，给复制进来。

这里，我已经准备了一段JS宏代码，需要的学友，可以找我们领取，复制过去即可。

![img](https://pic.yupi.icu/yuyi/1739501221967-8b7f780b-3de6-4eaa-b50d-f36929ab3c15.webp)

JS代码里，需要把三个地方，改成你自己的：

**API key：**这里填上你刚才在第一步里，申请搞到的API key

**API URL：**这里写调用的AI模型网址，我们这里用的是硅基流动的API，所以就填的硅基的网址。

**model：**这里填模型的名称。

填好之后，点击保存，WPS的宏代码，就配置OK了。

### 3、WPS里唤起deepseek 

宏配置完成后，最后，回到WPS的文字操作界面，唤起deepseek：

也就是让你的WPS工具栏里，要能够像我这样出现一个deepseek的按钮：

![img](https://pic.yupi.icu/yuyi/1739501221997-05c0c5bd-4c5b-4c1c-a252-3345b636c4c0.webp)

方法也很简单：

在文字里，点击菜单栏的【文件】-选项

弹出选项配置框：

然后点击这里的【自定义功能区】-【工具】，新建一个组

![img](https://pic.yupi.icu/yuyi/1739501222362-91a6de6b-7b1c-40ed-a719-0b8defdf5586.webp)

然后，点击中间命令栏里的【宏】，就会看到刚才我们在第二步里，新建的deepseek宏

把deepseek宏，添加到右侧的【新建组】里，然后重新给取个名字就可以了。

我这里，取的名字是：**deepseek扩写**

这样配置好后，最后**点击【确定】，就大功告成**

这个时候，你再点击WPS的【工具】，就可以看到工具栏了，出现了那个让我们激动万分的：deepseek

![img](https://pic.yupi.icu/yuyi/1739501222286-414296aa-ef87-4d97-b979-23fcc525a54b.webp)

赶快来看一下实际效果：

我们在WPS里，打字输入：

***最近很火的******deepseek******是什么***

然后，选中这句话，点击【deepseek扩写】，唤起deepseek，开始让它那启动那神奇的创作：

![img](https://pic.yupi.icu/yuyi/1739501222374-7effa2a3-906b-4b08-bac8-92948150af42.webp)

就这么一下，给扩写了这么一大篇

![img](https://pic.yupi.icu/yuyi/1739501222419-9bc7de49-b964-4971-9c28-ec6f3e884b12.webp)

肉眼可见的好用！

有了deepseek加持的WPS，感觉就是插上了火箭的翅膀。直接把AI智能办公的效率给拉满格了。



> 来源：https://mp.weixin.qq.com/s/ukkxKMf18Ma0E79nrpPUHQ