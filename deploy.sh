cd client
npm run build
cd ..
rm -rf server/build
cp -rf client/build server/build
cd server
gcloud app deploy
cd ..