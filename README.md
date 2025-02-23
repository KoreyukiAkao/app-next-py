# アプリ名：Wikipedia 要約アプリ

## プロジェクト概要

- Wikipedia の日本語記事を検索・取得し、その内容を要約して表示する Web アプリケーション。
  - ユーザーが指定したキーワードで Wikipedia を検索
  - 取得した記事を要約し、重要なポイントを表示
  - Next.js で UI を提供
  - Python(FastAPI)で Wikipedia API へのリクエストと要約処理を実行

## プロジェクトの目的

- モダン言語 (Next.js, Python) を使用したシンプルな Web アプリを作成
- デプロイ環境は Vercel・Render を使用し、ライブ環境で動作するアプリを構築
- フロントエンドとバックエンド間の API 通信を学ぶことを目的とする

## 機能一覧

- Wikipedia 日本語記事の検索と取得
- 取得記事の自動要約 (シンプルな自然言語処理を使用)
- 入力キーワードに応じた関連情報の提供
- エラーハンドリング (存在しない記事やネットワークエラー対応)
- Next.js と FastAPI 間の API 通信
- Vercel (フロント) × Render (バックエンド) デプロイ構成

## 想定スタック：

- Next.js(Hosting:Vercel)
- Python(Hosting:Render)
- Wikipedia API

## セットアップ手順

フロントエンドのセットアップ (Next.js)

```
# フロントエンドディレクトリに移動
cd app-next-py

# 依存関係をインストール
npm install

# 環境変数を設定
echo "NEXT_PUBLIC_BACKEND_URL=https://your-backend-url.onrender.com" > .env.local

# 開発サーバーを起動
npm run dev
```

バックエンドのセットアップ (FastAPI)

```
# バックエンドディレクトリに移動
cd backend

# 仮想環境を作成してアクティベート
python3 -m venv venv
source venv/bin/activate  # macOS/Linux
venv\Scripts\activate     # Windows

# 依存関係をインストール
pip install -r requirements.txt

# サーバー起動
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

## Fast API のエンドポイント

| メソッド | エンドポイント | 概要                       | パラメータ                    |
| -------- | -------------- | -------------------------- | ----------------------------- |
| POST     | /summarize     | Wikipedia 記事を取得・要約 | { "query": "検索キーワード" } |

## 環境変数

```
例：
NEXT_PUBLIC_BACKEND_URL=https://your-backend-url.onrender.com
```

※Vercel デプロイ時にも「Environment Variables」で設定。

## トラブルシューティング

- CORS policy エラー
  - FastAPI に CORS ミドルウェアを追加する。
- 404 Not Found
  - 正しいバックエンド URL を.env.local に設定。
- Invalid credentials エラー
  - 環境変数や API キー設定を再確認する。

## 目標開発期間：

- 6 日
  - 要件定義（1 日）
  - ベース実装（4 日）
  - 調整・テスト（1 日）

## デプロイに関する制約（注意点）：

- Vercel でデプロイし、URL でアクセス可能な状態にする
- Render でデプロイし、URL でアクセス可能な状態にする
- API キーや機密情報は環境変数として管理

## 全体フロー

1. [Next.js (フロントエンド)]

   - ユーザーが入力 (インプット)
   - `fetch` API を使って Python に JSON 形式でリクエストを送信

2. [Python (FastAPI バックエンド)]

   - ユーザーの入力を受信
   - wikipedia API にリクエストを送信

3. [Wikipedia API]

   - ユーザーの入力を受信
   - ユーザーの入力に応じた wikipedia 記事を検索

4. [Python (FastAPI バックエンド)]

   - 取得した記事を要約
   - 要約結果を JSON 形式で Next.js に返却

5. [Next.js (フロントエンド)]
   - 結果を画面に表示

## 目標スケジュール

- **1 日目**:
  - プロジェクトの目的と範囲の確認
  - 要件定義の作成
  - スケジュールとリソースの計画
- **2 日目**:
  - プロジェクトのセットアップ
  - フロントエンドの基本構築 - テストデプロイ
  - バックエンドの基本構築 - テストデプロイ
- **🚨 3 - 4 日目**:
  - フロントエンドとバックエンドの統合 - ローカル
  - wikipedia API との連携
  - フロントエンドでの結果表示
- **🚨 5 日目**:
  - ライブ環境での動作テスト（ここが山場?）
- **6 日目**:
  - スタイル調整(TailwindCss)

## 個人的に心がけること

- **技術を深追いしない**:

  - 必要最低限の知識で動くものを作ることを優先。
  - 時間を効率的に使うことを心がける。

- **まずはデプロイすることを優先する**:

  - 実際に動作するプロダクトを早期にデプロイ。

## 開発記録

### 1 日目: 準備と計画

- Readme の作成:

  - プロジェクトの概要と目的を記述。
  - 使用する技術やツールを明記。
  - スケジュールとリソースの計画を作成。

- テスト開発
  - Next.js のインストール
  - Vercel のセットアップ
  - テストデプロイ
  - ルーティングシステム変更（app -> pages ）
  - index.js の編集
  - TailwindCss のスタイリングテスト

### 2 日目: フロントエンドの基本構築

- フロントエンドの基本構築

  - コンポーネントの作成
  - props のテスト

- バックエンドの基本構築

  ```
    #Python のインストール
    pip3 install fastapi uvicorn


    #システムエラー（システム全体への Python パッケージのインストールが制限されている）が出たので、仮想環境の構築を行う。
    #仮想環境の構築(venv)
    python3 -m venv venv


    #仮想環境の有効化
    source venv/bin/activate


    #uvicornのインストール
    pip install uvicorn


    #サーバーの起動
    uvicorn backend.main:app --reload

    #仮想環境の無効化
    deactivate

  ```

- フロントエンドとバックエンドの統合
  - フロントエンドからバックエンドへの API リクエストの実装
  - fetch API を使用して、ユーザーの入力をバックエンドに送信
  - バックエンドでのリクエスト受信とレスポンスの確認

### 3 日目: バックエンドの機能追加

- Python と Hugging Face の連携

  ```
  #パッケージのインストール
  pip install requests


  #パッケージのインストール
  pip install python-dotenv


  #パッケージのインストール
  pip install python-dotenv

  ```

- 🧐 アプリを変更を検討

  - gpt2 が期待した結果を返さない
  - AI の使用に制限がある
  - モデルの選択とカスタマイズが難し

- 🧐wikipedia API の使用を検討

  - ユーザーの入力に応じた wikipedia 記事を検索
  - 記事を要約
  - 要約結果を JSON 形式で Next.js に返却

- 🧐 デプロイ環境を検討

  - Vercel と Render の比較

- プロジェクトの変更 （app-next-py へ）
- バックエンドのパッケージのインストール
- バックエンドのリポジトリを作成
- Render へのデプロイ
- GitHubとの再接続
  - プロジェクト変更、リポジトリ追加、作業コストが高い（もっと良い方法はないか？）
- Next: ローカル開発

### 4 日目: バックエンドの機能追加

- バックエンドの機能追加

  - wikipedia API との連携
  - バックエンドでのリクエスト受信とレスポンスの確認

- フロントエンドの機能追加

  - バックエンドからのレスポンスを受け取り、画面に表示

- デプロイテスト
  - ライブ環境で正常に動作するのか？
