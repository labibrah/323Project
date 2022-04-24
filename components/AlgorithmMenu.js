import * as React from 'react';
import { View } from 'react-native';
import { Button, Menu, Divider, Provider } from 'react-native-paper';

const AlgorithmMenu = () => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <Provider>
      <View
        style={{
          paddingTop: 50,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Button onPress={openMenu}>Choose algorithm</Button>}>
          <Menu.Item onPress={() => {}} title="FCFS" />
          <Menu.Item onPress={() => {}} title="Round robin" />
          {/* <Divider /> */}
          <Menu.Item onPress={() => {}} title="Priority" />
        </Menu>
      </View>
    </Provider>
  );
};

export default AlgorithmMenu;