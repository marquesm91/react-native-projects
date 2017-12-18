import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ backgroundColor: 'white' }}>
      <Scene key={'root'} hideNavBar>
        <Scene key={'auth'}>
          <Scene
            key={'login'}Stack
            component={LoginForm}
            title={'Please login'}
            titleStyle={{ alignSelf: 'center' }}
            initial
          />
        </Scene>
        <Scene key={'main'}>
          <Scene
            key={'employeeList'}
            component={EmployeeList}
            title={'Employees'}
            titleStyle={{ alignSelf: 'center' }}
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
