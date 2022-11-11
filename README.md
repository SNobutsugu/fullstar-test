# spa_test_site
SPAのテストサイト

## 初回起動
1. docker-compose up -d
2. docker exec -it laravel-app bash
3. php artisan migrate
4. npm install @vitejs/plugin-vue --save-dev
5. npm run dev

## vite
laravel9からデフォルトのビルドツールがWebpack(Laravel Mix)からViteに変更された。
せっかくなのでそっち使ってみる。

こちらのURL参考
https://reffect.co.jp/laravel/laravel9_vite

### viteを見れるように設定する（docker）
https://qiita.com/hitotch/items/aa319c49d625c2a9b65e

## web
http://localhost:8081/
## db
db名：spa_test_db
user:
pass:
port:5432
適当にbookテーブルを作ってる