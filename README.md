# 邬志鹏 · 游戏策划作品集

保留蓝天草地的开阔首屏，以可切换的作品档案组织系统拆解、团队策划与独立开发。
原生 HTML、CSS、JavaScript；静态多页，不依赖框架或服务端。

## 修改内容

唯一内容入口为 `data/portfolio.json`，包含中英文文案、项目职责、产出和已有材料链接。

```powershell
node scripts/build.cjs
python -m http.server 8766 --bind 127.0.0.1
```

访问终端实际服务的 `http://127.0.0.1:8766/`。无需 npm 安装。
也可直接用浏览器打开 `index.html`，各个项目的 HTML 均可独立访问。

## 维护入口

- 数据：`data/portfolio.json`。
- 页面模板：`js/views.js`。
- 交互：`js/main.js`。
- 样式：`css/style.css`。
- 静态生成：`scripts/build.cjs`。
- 生成页面：`index.html` 和 `projects/*.html`。
- `js/content.js` 由生成脚本输出，不要单独修改。

修改数据或模板后重新执行生成命令，检查四个详情入口和中英文文本。
发布时保留 `index.html`、`projects`、`css`、`js` 和使用的 `images` 相对结构。
根域和 GitHub Pages `/portfolio/` 子路径均使用相对资源路径，无需 SPA 路由回退。

## 媒体与事实范围

蓝天草地背景为前轮用户明确要求生成并已确认的装饰图。
《囚城营救》标题和游戏内画面来自用户已有素材，WebP 是为网页生成的压缩副本。
其余项目使用文字与内容结构示意；这些示意不表示游戏实机截图。
没有复制参考网站的插画、品牌或项目素材。

《三角洲行动》是现有系统的个人学习拆解，文档和配置示例由本人独立整理。
Game Jam 状态仅按 2026-10-12 的确认记录呈现；AI NPC 为《囚城营救》的未来计划。

## 阶段与发布

本工作树使用 `portfolio-archive-prototype` 分支，供确认新版具体布局。
现有 `main` 与线上网站仍为此前已发布版本，未合并本原型。
任务依据与交接记录见 `docs/site-plan.md`，实际检查记录见 `docs/verification.md`。

版本由 Git 历史管理。
