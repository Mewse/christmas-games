cd client
npm run build
cd ..
rm -rf server/build
cp -rf ui/build server/build
cd server
gcloud app deploy
cd ..