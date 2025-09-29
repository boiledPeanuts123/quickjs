The main documentation is in doc/quickjs.pdf or doc/quickjs.html.




移植了txiki.js的XMLHttpRequest的支持，所以对XMLHttpRequest支持程度就是和txiki.js一样
由于实现是依赖libcurl需要安装一下
sudo apt-get install -y pkg-config libcurl4-openssl-dev
编译后demo脚本在examples/test_xhr.js
已经在ubuntu18.04.06上验证通过了
由于很精简除开libcurl没有其它依赖，所以也兼容其它发行版Linux
