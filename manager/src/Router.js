import React from 'react';
import { Stack, Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ backgroundColor: 'white' }}>
      <Stack key={'root'}>
        <Scene
          key={'login'}
          component={LoginForm}
          title={'Please login'}
          titleStyle={{ alignSelf: 'center' }}
          initial
        />
        <Scene
          key={'employeeList'}
          component={EmployeeList}
          title={'Employees'}
          titleStyle={{ alignSelf: 'center' }}
        />
      </Stack>
    </Router>
  );
};

export default RouterComponent;
