import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

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
            onRight={() => Actions.employeeCreate()}
            rightTitle={'Add'}
            key={'employeeList'}
            component={EmployeeList}
            title={'Employees'}
            titleStyle={{ alignSelf: 'center' }}
            initial
          />
          <Scene 
            key={'employeeCreate'}
            component={EmployeeCreate}
            title={'employeeCreate'}
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
