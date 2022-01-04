import crashlytics from '@react-native-firebase/crashlytics';


export function handleForceCrashApp() {
  crashlytics().log('Teste de crash')
  crashlytics().setCrashlyticsCollectionEnabled(true)
  crashlytics().crash()
}