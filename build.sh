ENV=$1
BACKEND_PATH="../express-server"

# Check if environment is provided
if [ -z "$ENV" ]; then
  echo "❌ Error: No environment provided. Use 'dev', 'test', or 'live'."
  exit 1
fi

echo "🚀 Starting the $ENV build..."

# Run appropriate build command
case $ENV in
  dev)
    npm run build-dev
    ;;
  live)
    npm run build-live
    ;;
  *)
    echo "❌ Invalid environment: $ENV. Use 'dev', 'test', or 'live'."
    exit 1
    ;;
esac

echo "🧹 Removing old dist directory..."
rm -rf "$BACKEND_PATH/public/"

echo "📁 Copying React build..."
cp -R "dist/." "$BACKEND_PATH/public/"

echo "All set"
