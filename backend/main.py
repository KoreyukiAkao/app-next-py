# CORS（Cross-Origin Resource Sharing）について:
# CORSは、異なるオリジン（ドメイン、プロトコル、ポート）間でのリソース共有を許可する仕組みです。
# 通常、ブラウザはセキュリティのために異なるオリジン間のリクエストを制限します。
# CORSを設定することで、特定のオリジンからのリクエストを許可し、データ共有を可能にします。

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

# FastAPIのアプリケーションを作成
app = FastAPI()

# CORSの設定を追加
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 必要に応じて特定のオリジンを指定
    allow_credentials=True,
    allow_methods=["*"],  # 必要に応じて特定のメソッドを指定
    allow_headers=["*"],
)

class Theme(BaseModel):
    theme: str

# ルートURLにアクセスしたときの処理
@app.get("/")
async def read_root():
    # "Hello": "World"というメッセージを返す
    return {"Hello!": "World!"}

# /motivateエンドポイントにPOSTリクエストが来たときの処理
@app.post("/motivate")
async def motivate(theme: Theme):
    print(f"Received theme: {theme.theme}")
    # ここにAIサービスとの連携ロジックを追加する
    # 例えば、AIにテーマを送ってモチベーションを高めるメッセージを生成する
    return {"message": f"Motivation for {theme.theme}"}
    # テーマに基づいたモチベーションメッセージを返す