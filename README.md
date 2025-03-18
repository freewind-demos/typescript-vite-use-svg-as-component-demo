# 在 Vite 中将 SVG 作为 React 组件使用

这是一个简单的示例项目，展示如何在 Vite + React + TypeScript 项目中将 SVG 文件作为 React 组件使用。

## 运行项目

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm start
```

## 核心配置

### 1. 安装依赖

```bash
pnpm add -D vite-plugin-svgr
```

### 2. 配置 vite.config.ts

```typescript
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

### 3. 使用方式

```tsx
// 导入 SVG 作为 React 组件
import ReactLogo from './assets/svg/react-logo.svg?react';

// 在 JSX 中使用
<ReactLogo className="logo" />
```

## 优势

- 可以像使用普通 React 组件一样使用 SVG
- 可以传递 props（如 className、onClick 等）
- 可以通过 CSS 控制 SVG 样式

## 重要文件

### vite-env.d.ts

这个文件非常重要，它包含了类型声明引用，确保 TypeScript 能够正确识别 SVG 导入。如果没有这个文件，编译过程中会出现类型错误。

```typescript
/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
```

这些类型引用确保：
- `vite/client` - 提供 Vite 特定的类型定义
- `vite-plugin-svgr/client` - 允许 TypeScript 理解 SVG 导入语法（如 `import ReactLogo from './assets/svg/react-logo.svg?react'`）
