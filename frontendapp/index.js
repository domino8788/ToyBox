import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import 'react-native-get-random-values';
import storybook from './storybook';
import Config from 'react-native-config';

let Root = App;
switch (Config.BUILD_ENV) {
  case 'STORYBOOK': {
    Root = storybook;
    break;
  }
  default: {
    Root = App;
  }
}

AppRegistry.registerComponent(appName, () => Root);
