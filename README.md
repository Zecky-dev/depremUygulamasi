# Türkiye Geneli Depremler Uygulaması

## Açıklama

Bu uygulamanın genel amacı Türkiye genelinde gerçekleşen depremler hakkında kullanan kişilere bilgi vermektir.

## Kullanılan Teknolojiler ve Paketler

### Genel Bilgiler

* Bu uygulama **react native** kullanılarak yazılmıştır, **android** işletim sisteminde test edilmiştir **iOS** işletim sisteminde testleri yapılmamıştır.
* API: https://deprem.afad.gov.tr/event-service servisinden bilgi çekilmektedir.
* Uygulama, telefon temasına uygun olacak şekilde tema geçişi otomatik olarak yapar.
* Depremler listesinde, her depremin konumu, tarihi ve şiddeti gibi bilgiler görüntülenebilir.
* "Düdük" sekmesi aracılığıyla, depremzedeler uygulamayı kullandıkları sırada seslerini duyurmaya çalışabilirler.


### Paketler

* @react-native-community/checkbox
* @react-native-community/geolocation
* @react-navigation/bottom-tabs
* @react-navigation/native
* @react-navigation/native-stack
* axios
* lottie-react-native
* moment
* react-native-maps
* react-native-screens
* react-native-sound
* react-native-vector-icons

## Uygulama Videosu

https://github.com/Zecky-dev/depremUygulamasi/assets/77771717/daa20bc7-9d57-48c1-a55c-8269f4a0a8dd

## Kurulum Aşamaları

1. Uygulamanın dosyalarını `git clone` komutu ile bilgisayarınıza kopyalayın.
2. Uygulamayı herhangi bir editör ile dosya konumu ile birlikte açın.
3. Bilgisayarınızda **node js kurulu değilse kurulumunu gerçekleştirin!** 
4. Uygulamada kullanılan paketleri proje içerisine dahil etmek için terminale `npm install` komutunu yazın ve paketlerin yüklenmesini bekleyin.
5. `npx react-native run-android` komutunu kullanarak telefonunuzda veya emulatörünüzde uygulamayı başlatın.







