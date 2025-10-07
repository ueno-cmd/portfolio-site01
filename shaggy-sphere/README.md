# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🖼️ Assets Notes (LP 運用)

- 画像は仮素材です。後でCanva等で差し替え可能です。
- 画像は `public/asset/images/` 配下に配置してください（そのまま公開配信されます）。
- 可能な範囲で最適化（サイズ圧縮/適切なフォーマット）してコミットしてください。
- 外部リンクには `rel="noopener"` を付与してください。

### 画像ガイドライン（推奨）
- フォーマット: 写真は WebP 推奨（品質70–85）。ロゴ/イラストは SVG か PNG（ロスレス）。透過が必要な写真は PNG も可（サイズ注意）。アニメGIFは非推奨（必要なら MP4/WebM）。
- 寸法目安: ヒーロー背景は横 2000–2400px 程度、一般的なカード/セクション内は横 800–1200px 程度（2x画像は不要）。サムネイルは横 600–800px で十分。
- ファイルサイズ: 1枚あたり 100–200KB 目安、最大でも 300KB 程度に抑制（ヒーローは例外で 400–600KB まで許容）。
- 命名規則: kebab-case・半角英数、用途と中身が分かる短い名前（例: `hero-bg.jpg`, `profile-headshot.webp`, `logo-mark.svg`）。バリエーションは `-sm/-md/-lg` や `-2x` などをサフィックスに。
- アクセシビリティ: 伝達情報がある画像は `alt` を簡潔に記述。純装飾は `alt=""`（空）にしてスクリーンリーダーから除外。
- 配置/参照: 一般画像は `public/asset/images/` に置き、HTMLから相対参照。ヒーロー背景だけは `src/assets/hero.jpg` をCSSの `background-image` で参照（Viteがハッシュ付きで配信）。
- ツール例: Squoosh.app、ImageOptim、TinyPNG/TinyJPG などで事前に圧縮。

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
