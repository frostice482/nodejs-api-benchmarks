export $(cat .env | xargs)
echo "==> GET sweep"
k6 run --env BASE_URL=$BASE_URL --summary-export="$OUT_DIR/sweep_get.json" sweep-get.js

echo "==> POST sweep"
k6 run --env BASE_URL=$BASE_URL --summary-export="$OUT_DIR/sweep_post.json" sweep-post.js
