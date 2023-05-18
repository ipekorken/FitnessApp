import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import StoreProvider from './StoreProvider';
import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => StoreProvider);
