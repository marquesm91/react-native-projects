import { Navigation } from 'react-native-navigation';
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const wDim = Dimensions.get('window');
const fixedWidth = Math.round(wDim.width * wDim.scale * 0.8);

const startTabs = () => {
  Promise.all([
    Icon.getImageSource('md-map', 30),
    Icon.getImageSource('ios-share-alt', 30),
    Icon.getImageSource('ios-menu', 30)
  ]).then(sources => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: 'awesome-places.FindPlaceScreen',
          label: 'Find Place',
          title: 'Find Place',
          icon: sources[0],
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[2],
                title: 'Menu',
                id: 'sideDrawerToggle'
              }
            ]
          }
        },
        {
          screen: 'awesome-places.SharePlaceScreen',
          label: 'Share Place',
          title: 'Share Place',
          icon: sources[1],
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[2],
                title: 'Menu',
                id: 'sideDrawerToggle'
              }
            ]
          }
        }
      ],
      drawer: {
        left: {
          screen: 'awesome-places.SideDrawer',
          fixedWidth
          //percentOfScreenWidth: 0.8,
          //disableOpenGesture: false // Disable swipe to left
        }
      }
    });
  });
};

export default startTabs;
