from fastapi import FastAPI

# FastAPIのアプリケーションを作成
app = FastAPI()

# ルートURLにアクセスしたときの処理
@app.get("/")
async def read_root():
    # "Hello": "World"というメッセージを返す
    return {"Hello!": "World!"}

# /motivateエンドポイントにPOSTリクエストが来たときの処理
@app.post("/motivate")
async def motivate(theme: str):
    # ここにAIサービスとの連携ロジックを追加する
    # 例えば、AIにテーマを送ってモチベーションを高めるメッセージを生成する
    return {"message": f"Motivation for {theme}"}
    # テーマに基づいたモチベーションメッセージを返す