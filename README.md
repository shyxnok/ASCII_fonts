# ASCII Fonts API

基于 Figlet.js 的 ASCII 艺术字生成 Cloudflare Worker API。

## 功能特性

- 支持 200+ 种 ASCII 字体风格
- 仅支持 POST 方法调用
- 支持 CORS 跨域访问
- 自动从 CDN 加载字体文件

## API 接口

### 1. 获取字体列表

```bash
GET /api/fonts
```

**响应示例：**
```json
{
  "fonts": ["ANSI Shadow", "Banner", "Big", "Block", ...]
}
```

### 2. 生成 ASCII 艺术字

```bash
POST /api/generate
Content-Type: application/json
```

**请求参数：**

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|------|------|------|--------|------|
| text | string | 是 | - | 要转换的文字内容 |
| font | string | 否 | ANSI Shadow | 字体名称 |

**请求示例：**
```bash
curl -X POST https://fonts.201562.xyz/api/generate \
  -H "Content-Type: application/json" \
  -d '{
    "text": "Hello World",
    "font": "ANSI Shadow"
  }'
```

**响应示例：**
```json
{
  "success": true,
  "text": "Hello World",
  "font": "ANSI Shadow",
  "art": "██╗  ██╗███████╗██╗     ██╗      ██████╗ ...",
  "lines": 7,
  "chars": 11
}
```

## 支持的字体

支持 200+ 种字体，部分常用字体包括：
- `ANSI Shadow` - 阴影效果
- `Banner` - 横幅风格
- `Big` - 大号字体
- `Block` - 方块风格
- `Bubble` - 气泡风格
- `Digital` - 数字风格
- `Doom` - Doom 游戏风格
- `Fire Font-k` - 火焰风格
- `Graffiti` - 涂鸦风格
- `Small` - 小号字体

完整字体列表可通过 `/api/fonts` 接口获取。

## 部署说明

### 本地开发

```bash
# 安装依赖
npm install -g wrangler

# 启动开发服务器
npx wrangler dev --log-level none
```

### 部署到 Cloudflare

```bash
# 登录 Cloudflare
npx wrangler login

# 部署
npx wrangler deploy
```

## 项目结构

```
ASCII_fonts/
├── workers.js          # Cloudflare Worker 入口文件
├── wrangler.jsonc      # Wrangler 配置文件
├── fonts/              # 字体文件目录（FLF 格式）
│   ├── ANSI Shadow.flf
│   ├── Banner.flf
│   └── ...
├── figlet.js           # 原始 Figlet.js 库
└── index.html          # Web 演示页面
```

## 技术栈

- Cloudflare Workers
- Figlet.js
- JavaScript (ES6+)

## 来源

字体文件源自：https://github.com/patorjk/figlet.js

## 许可证

MIT License
