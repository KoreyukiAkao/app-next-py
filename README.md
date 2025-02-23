# アプリ名：AI モチベーター

## プロジェクト概要

- ユーザーがテーマを入力すると、AI がモチベーションを高める前向きな一言アドバイスを生成。

## プロジェクトの目的

- モダン言語 (Next.js, Python) を使用したシンプルな Web アプリを作成
- 初心者が 3 日以内でベース部分を完成できるシンプルな構成
- デプロイ環境は Vercel を使用し、実際に動作するアプリを構築
- フロントエンドとバックエンド間の API 通信を学ぶことを目的とする

## 想定スタック：

- Next.js
- Vercel
- Python(FastAPI)
- Hugging Face(OpenAI)

## 想定期間：

- 5 日
  - 要件定義（1 日）
  - ベース実装（3 日）
  - 調整・テスト（1 日）

## デプロイに関する制約（注意点）：

- Vercel でデプロイし、URL でアクセス可能な状態にする
- API キーや機密情報は環境変数として管理

## 全体フロー

1. [Next.js (フロントエンド)]

   - ユーザーが入力 (インプット)
   - `fetch` API を使って Python に JSON 形式でリクエストを送信

2. [Python (FastAPI/Flask バックエンド)]

   - ユーザーの入力を受信
   - 入力内容を分析・プロンプトを作成
   - `requests` モジュールを使用して AI API にプロンプトを送信

3. [AI サービス (OpenAI / Hugging Face など)]

   - AI がプロンプトに基づいて回答を生成
   - AI のレスポンスを Python に返却

4. [Python (FastAPI/Flask バックエンド)]

   - AI の回答を受信・整形
   - JSON 形式で Next.js にレスポンスを返却

5. [Next.js (フロントエンド)]
   - 結果を画面に表示

## 目標スケジュール

- **1 日目**:
  - プロジェクトの目的と範囲の確認
  - 要件定義の作成
  - スケジュールとリソースの計画
- **2 日目**:
  - プロジェクトのセットアップ
  - フロントエンドの基本構築
  - バックエンドの基本構築
- **3 日目**:
  - フロントエンドとバックエンドの統合
  - AI サービスとの連携
  - フロントエンドでの結果表示
- **4 日目**:
  - ライブ環境での動作テスト（ここが山場と予想）
    - 🚨ローカルでは動作しているが、Vercel にデプロイしたときに動作しない可能性がある
- **5 日目**:
  - スタイル調整
  - プロンプトの改善
  - テスト
  - デプロイ

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

  - Python のインストール

    ```
    pip3 install fastapi uvicorn
    ```

    システムエラー（システム全体へのPythonパッケージのインストールが制限されている）が出たので、仮想環境の構築を行う。

  - 仮想環境の構築(venv)

    ```
    python3 -m venv venv
    ```

  - 仮想環境の有効化

    ```
    source venv/bin/activate
    ```

  - `uvicorn`のインストール

    ```
    pip install uvicorn
    ```

  - サーバーの起動

    ```
    uvicorn backend.main:app --reload
    ```

  - 仮想環境の無効化
    ```
    deactivate
    ```
- フロントエンドとバックエンドの統合
  - フロントエンドからバックエンドへのAPIリクエストの実装
  - fetch APIを使用して、ユーザーの入力をバックエンドに送信
  - バックエンドでのリクエスト受信とレスポンスの確認

### 3 日目: バックエンドの機能追加

- Python と Hugging Face の連携

  - パッケージのインストール

    ```
    pip install requests
    ```

  - パッケージのインストール

    ```
    pip install python-dotenv
    ```

  - パッケージのインストール

    ```
    pip install python-dotenv
    ```
# app-next-py
