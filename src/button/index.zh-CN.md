---
map:
  # 映射到docs的路径
  path: /components/button
---

# Button

这是一个简单的按钮。

## 代码演示

### 基本用法

<demo src="./demo/default.vue"
  language="vue"
  title="基本用法"
  desc="默认按钮。">
</demo>

### 按钮大小

<demo src="./demo/size.vue"
  language="vue"
  title="尺寸"
  desc="按钮尺寸。">
</demo>

## API

```ts
import { Button } from 'vue_vitepress'
```

## Props

| 参数 | 说明 |   类型 |        值 |
| ---- | ---: | -----: | --------: | --------- | ------- |
| size | 大小 | string |   'small' | 'medium'  | 'large' |
| type | 类型 | string | 'default' | 'warning' |
