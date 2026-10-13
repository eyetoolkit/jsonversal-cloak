# cloak.jsonversal.com — 面向欧美的安全/隐私工具上线调研

> 调研日期：2026-10-13
> 目标：cloak 子域的定位是「面向欧美国家用户的安全工具站」
> 依据：综合 privacytools.io、anonymiz.com、webtoolsplanet.com、pentesterworld.com、
>       thectoclub.com（数据脱敏）、aiprivacy.report（匿名化）、devconverter.dev 等公开资料

---

## 一、结论速览（品牌定位 + 主线）

`cloak` = 隐藏 / 保护 / 遮蔽。欧美隐私受众对这类品牌词直觉是「把敏感信息藏起来」。
结合 jsonversal 现有基因（纯前端、静态、开发者工具站），最契合的切入线是：

**「client-side privacy & security tools」—— 所有工具在浏览器本地运行、不上传你的数据、免登录。**

这不是凭空定位，而是欧美隐私工具市场的压倒性共识：
- privacytools.io / European Alternatives 主打「answer to European law, not a US subpoena」
- anonymiz.com 的标题就是 **"Best Free Privacy Tools 2026 — No Signup Required"**
- 多家竞品（webtoolsplanet、devconverter、alltoolsverse）反复强调
  *"runs entirely in your browser, never leaves your device"*

**一句话主张（建议 slogon）：**
> Cloak — client-side privacy & security tools. Nothing you enter ever leaves your browser.

---

## 二、推荐上线的工具清单（按「贴合 cloak 语义」程度分三档）

### 🥇 第一档：数据隐藏 / 脱敏 —— 最贴 cloak 语义，优先上（Tier 1）

| 工具 | 功能 | 为什么上 | 调研来源印证 |
|---|---|---|---|
| **PII 脱敏 / 文本遮蔽器** | 粘贴文本，自动识别并遮掩姓名、邮箱、电话、身份证、卡号、IP | 直接对应 "cloak"；AI 时代上传文档前脱敏是高频刚需 | blurdata.app、Microsoft Presidio 生态 |
| **数据脱敏 / 掩码生成器** | 把结构化文本/CSV 的敏感字段替换为 `••••` 或 token | 开发者/运营贴日志、报错时避免泄露 | NIST SP 800-188 三类方法之一 |
| **假数据生成器** | 生成假名、假邮箱、假地址、假信用卡号（合规测试用） | 欧美 GDPR 测试环境强需求；与 monorepo 已做的工具同族 | K2view / Tonic.ai 商业市场印证 |
| **图片打码 / 模糊器** | 上传图片，框选区域做像素化/模糊/涂黑 | "photo censor" 竞品高频；客服截图、漏洞报告前必用 | webtoolsplanet "Photo Censor" |
| **EXIF 元数据清除器** | 上传图片，剥离 GPS/相机/时间等元数据再下载 | 手机照片含 GPS，社媒晒图泄露位置是欧美用户痛点 | privacytools「Metadata Removal」分类 |

### 🥈 第二档：密码与凭据安全 —— 高流量、低门槛（Tier 1~2）

| 工具 | 功能 | 说明 |
|---|---|---|
| **强密码生成器** | crypto.getRandomValues 生成，可配长度/字符集/熵值 | 几乎所有竞品的流量入口工具 |
| **助记词 / 口令生成器** | 生成易记高熵 passphrase（如 correct-horse-battery-staple） | 比随机密码更友好，欧美推崇 |
| **密码强度检测器** | 熵评分 + 预估破解时间 + 常见弱模式提示 | 教育向，SEO 友好 |
| **UUID / Token 生成器** | v4 UUID、随机 token、API key 草稿 | 开发者日常 |
| **Salt 生成器** | 随机盐值，防彩虹表 | 后端开发配套 |

### 🥉 第三档：编码 / 哈希 / 加密 —— 与 monorepo 现有工具同族，复用度高（Tier 1~2）

| 工具 | 功能 | 说明 |
|---|---|---|
| **哈希生成器** | MD5/SHA-1/256/384/512、HMAC、CRC32 | 校验和、完整性验证；标注「哈希≠加密」 |
| **Bcrypt / PBKDF2 生成器** | 慢哈希，专为密码存储 | 区分于 MD5，做正确的安全教育 |
| **Base64 编解码** | URL-safe 模式、自动识别 | API/日志调试 |
| **URL / HTML 实体编解码** | 转义特殊字符 | XSS/调试 |
| **AES-256 文本加密** | 口令加密一段文本，本地可逆 | 临时传密文；强调「密钥自保管」 |
| **JWT 解码器** | 解析 header/payload/claims/exp，不验签 | OAuth/OIDC 调试；竞品标配 |

### 🔍 第四档：隐私泄露自检 —— 差异化亮点，但偏「测自己的暴露面」（Tier 2）

| 工具 | 功能 | 说明 |
|---|---|---|
| **What is my IP** | 显示公网 IP / ISP / 地理位置 | 简单引流 |
| **WebRTC 泄露检测** | 检测即便开 VPN 是否泄露真实 IP | 隐私意识强用户最爱测 |
| **DNS 泄露检测** | 验证 DNS 是否走 VPN 隧道 | 同上 |
| **浏览器指纹检测** | 你的浏览器有多「独特可追踪」 | EFF Cover Your Tracks 同款 |
| **邮箱泄露查询** | 对接 Have I Been Pwned 风格（需合规处理） | 引流强，但涉及第三方 API 与隐私，慎上 |

### 🛡 第五档：Web 安全与合规（开发者向，Tier 3）

| 工具 | 功能 |
|---|---|
| **HTTP 安全头检测** | 评级 CSP / HSTS / X-Frame-Options 等（A–F） |
| **SSL 证书检测** | 证书有效性、链、到期 |
| **SPF / DMARC / DKIM 检测** | 邮件认证记录 |
| **WHOIS 查询** | 域名注册信息 |

---

## 三、建议的上线分期

**Phase 1（首发，2–3 周）** —— 立住 "cloak = 把数据藏起来" 的人设：
- PII 文本脱敏器 + 图片打码 + 假数据生成器 + EXIF 清除
- 强密码生成器 + 密码强度检测（流量基本盘）

**Phase 2（1 个月）** —— 开发者安全工具同族补齐：
- 哈希生成器 + Base64 + JWT 解码 + UUID + AES 文本加密 + 助记词生成

**Phase 3（可选，差异化）** —— 隐私自检：
- What is my IP / WebRTC / DNS 泄露 / 浏览器指纹

---

## 四、合规与信任要点（欧美上线必做，否则会被信任危机反噬）

1. **client-side 是核心卖点，必须真做到**：所有计算放浏览器，零后端、零上传。
   - 凡是需要后端的（如邮箱泄露查询），要么不做，要么明确告知并走合规第三方。
2. **GDPR / ePrivacy 合规**：
   - Cookie 同意横幅（即使只用必要 cookie 也要声明）；
   - 隐私政策页（说清「我们不收集/不上传任何输入」）；
   - 若用 Cloudflare，说明其作为处理者角色；欧盟用户数据流经 CF 需在隐私政策注明。
3. **别踩「免费工具贩卖你的数据」的坑**：竞品反复警告的雷区。
   - 不接第三方分析追踪器（或仅用匿名聚合、默认关）；
   - 不卖 usage data；在页脚明示 "No tracking. No signup. Your data stays on your device."
4. **安全教育而非误导**：哈希≠加密、编码≠加密、解码 JWT≠验证——每个工具加一行说明。
5. **语言**：首发以 **英文（en）** 为主，后续可加 de/fr/es（欧盟多语）。

---

## 五、技术落地建议（对齐 jsonversal 现有栈）

- **复用 monorepo 的 Astro 架构**：`jsonversal-monorepo` 已是 Astro 多页站，可在其下新增
  `apps/cloak`（或独立 Astro 项目），保持统一的 UI 组件（`packages/ui`、`all-tools.js` 配置）。
- **全部纯前端**：上述工具 95% 可用浏览器原生 API（`crypto`、`Canvas`、`FileReader`、
  `crypto.subtle`）实现，无需函数/后端——正好规避 Cloudflare Pages Functions 的部署坑。
- **零后端 = 零 Functions = 部署稳**：上轮 mquickcalc 卡在 Pages Function 发布，cloak 纯静态可规避。
- **CI/CD**：沿用已建好的 `.github/workflows/deploy.yml`（wrangler pages deploy），
  但需先补上 Actions secrets（当前仓库 secrets 为 0）。
- **i18n**：先用英文文案 + 数据字典，结构上预留多语。

---

## 六、不建议上的（避坑）

- ❌ 真实「VPN / 翻墙」类（合规与资质风险高，且与工具站定位不符）
- ❌ 真实密码管理器（Bitwarden/1Password 已是事实标准，难差异化且责任重）
- ❌ 需要持久账号的「私密笔记 / 阅后即焚」（需后端存储，违背 client-side 主张）
- ❌ 任何会把用户输入发到第三方的 "AI 分析" 类（除非本地 LLM，否则破坏信任内核）

---

## 附：竞品功能密度参考（用于排优先级）

- webtoolsplanet / devconverter / pentesterworld 的「安全」分类几乎都覆盖：
  **password gen、hash、JWT、base64、UUID、AES、HTTP headers**。
- 隐私/脱敏（PII redaction、fake data、photo censor、EXIF）是 **cloak 能做出差异化的独有区**，
  竞品多为单点工具、不成体系；做成一个「脱敏工具包」反而能形成品牌。
