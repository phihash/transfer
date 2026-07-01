初めてのコンポーネント ✅

## Day1

- ビジネスの語彙で名前がつくか → モデル
- UIという表現様式があって初めて意味を持つか → UI状態
  1 task モデリング
  - Boolean → boolean（小文字。TypeScriptのプリミティブ型は小文字）
  - taskName / taskId — Task型の中にいるから name / id で十分。task.taskName より task.name の方が自然
    1. import — Task は型やから import type { Task } にする（default export じゃなくて export type で定義してるはず）

    npm install -D tailwindcss @tailwindcss/vite
    @import "tailwindcss"
    vite.config.ts
