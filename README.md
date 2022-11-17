# プロジェクト説明
FullstarのSPAテスト用サイト

## 初回起動
1. docker-compose up -d
2. docker exec -it laravel-app bash
3. composer update
4. cp .env.example .env
5. envファイルのDB部分を修正

```
DB_CONNECTION=pgsql
DB_HOST=postgresql
DB_PORT=5432
DB_DATABASE=spa_test_db
DB_USERNAME=user
DB_PASSWORD=pass
```

6. php artisan key:generate
7. php artisan migrate
8. npm install @vitejs/plugin-vue --save-dev
   場合によっては、npm install -g npm@9.1.1
9. npm install @vitejs/plugin-react --save-dev
10. npm install react react-dom --save-dev
11. npm run dev

#### 動かなくなった場合。。。
プロジェクトディレクトリ内で
docker-compose down --rmi local 

これで、dockerの停止とimageの削除までしてくれる。

## vite
laravel9からデフォルトのビルドツールがWebpack(Laravel Mix)からViteに変更された。
せっかくなのでそっち使ってみる。

こちらのURL参考
### vue
https://reffect.co.jp/laravel/laravel9_vite

### react
https://reffect.co.jp/laravel/laravel9_vite_react

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