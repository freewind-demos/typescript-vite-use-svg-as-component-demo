# TypeScript Vite 将 SVG 作为 React 组件使用示例

本项目演示了如何在 Vite 项目中使用 `vite-plugin-svgr` 插件通过 `?react` 查询后缀方式将 SVG 文件作为 React 组件使用。

## 功能特点

- 使用 `?react` 查询后缀将 SVG 导入为 React 组件
- 使用默认导入方式将 SVG 作为 URL 使用（用于比较）
- 使用 CSS 样式化 SVG 组件

## 开始使用

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm start
```

## 工作原理

本示例使用 `vite-plugin-svgr` 插件将 SVG 文件转换为 React 组件。该插件在 `vite.config.ts` 中配置为仅处理带有 `?react` 查询后缀的 SVG。

### 配置

```typescript
// vite.config.ts
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: "**/*.svg?react"
    }) as any,
  ],
})
```

这个配置告诉插件只处理使用 `?react` 后缀导入的 SVG 文件，这比处理所有 SVG 文件的方式更加简洁。

### 在组件中的使用方式

本示例中有两种使用 SVG 的方式：

1. **作为 React 组件**（使用 `?react` 后缀）：
   ```tsx
   import ReactLogo from './assets/svg/react-logo.svg?react';
   <ReactLogo className="logo" />
   ```

2. **作为 URL**（用于比较）：
   ```tsx
   import reactLogoUrl from './assets/svg/react-logo.svg';
   <img src={reactLogoUrl} alt="React Logo" className="logo" />
   ```

## `?react` 查询后缀方式的优势

- **更简洁的导入方式**：不需要像 `{ ReactComponent as ... }` 这样的命名导入
- **显式处理**：只有你明确想要作为组件的 SVG 才会被处理
- **更好的性能**：插件只处理带有 `?react` 后缀的 SVG，而不是所有 SVG
- **简化的 TypeScript 配置**：不需要复杂的模块声明
- **与 Vite 的查询后缀模式一致**：遵循 Vite 的资源处理模式（如 `?url`、`?raw`）

## 将 SVG 作为 React 组件使用的优势

- SVG 被视为 React 组件，具有所有组件生命周期的优势
- 可以直接向 SVG 组件传递 props
- 可以使用 CSS 样式化 SVG 的特定部分
- 更好的 TypeScript 支持，具有适当的类型定义
- 可以直接向 SVG 元素添加事件处理程序

## 参考资料

- [vite-plugin-svgr](https://www.npmjs.com/package/vite-plugin-svgr)
- [SVGR](https://react-svgr.com/)
- [Vite 资源处理](https://vitejs.dev/guide/assets.html)
