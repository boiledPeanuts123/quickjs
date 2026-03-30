# QuickJS（含 XMLHttpRequest 扩展）

## 文档入口

QuickJS 主文档：

- `doc/quickjs.pdf`
- `doc/quickjs.html`

## 本仓库额外改动

本仓库移植了 `txiki.js` 的 `XMLHttpRequest` 支持，当前实现行为与 `txiki.js` 对齐。

## 依赖安装

`XMLHttpRequest` 依赖 `libcurl`，在 Debian/Ubuntu 下可执行：

```bash
sudo apt-get install -y pkg-config libcurl4-openssl-dev
```

## 使用方式

1. 编译 QuickJS。
2. 运行示例脚本：

```bash
./qjs examples/test_xhr.js
```

## 兼容性

- 已在 `Ubuntu 18.04.6` 验证通过。
- 除 `libcurl` 外无额外外部依赖。
- 理论上可兼容其他 Linux 发行版。
