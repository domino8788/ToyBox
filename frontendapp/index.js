import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import 'react-native-get-random-values';
import storybook from './storybook';

AppRegistry.registerComponent(appName, () => storybook);
