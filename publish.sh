#!/bin/bash

# chmod +x publish.sh
ionic cordova build android --prod --release
# keytool -genkey -v -keystore qreduca.keystore -alias qreduca -keyalg RSA -keysize 2048 -validity 10000
cp qreduca.keystore platforms/android/app/build/outputs/apk/release/qreduca.keystore
cd platforms/android/app/build/outputs/apk/release/
rm qreduca.apk
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore qreduca.keystore app-release-unsigned.apk qreduca -storepass "qreduca123"
zipalign -v 4 app-release-unsigned.apk qreduca.apk
nautilus .