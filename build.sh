ENV=$1

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
  test)
    npm run build-test
    ;;
  live)
    npm run build-live
    ;;
  *)
    echo "❌ Invalid environment: $ENV. Use 'dev', 'test', or 'live'."
    exit 1
    ;;
esac
