import React from "react";
import { View, Image, Text, Dimensions } from "react-native";
import LottieView from 'lottie-react-native';
import { Provider as PaperProvider, TextInput, Button, Portal, Modal} from 'react-native-paper';

export default function TabOneScreen() {
  const [username, inputUsername] = React.useState("");
  const [password, inputPassword] = React.useState("");
  const [sVisible, setsVisible] = React.useState(false);
  const [fVisible, setfVisible] = React.useState(false);
  const showModal = () => setsVisible(true);
  const hideModal = () => setsVisible(false);
  const showModalF = () => setfVisible(true);
  const hideModalF = () => setfVisible(false);
  
  const containerStyle = {backgroundColor: 'white', padding: 20}

  return (
    
    <PaperProvider>
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        paddingHorizontal: 20
      }}
    >
      <Portal>
        <Modal visible={sVisible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <Text>Success</Text>
        </Modal>
      </Portal>
      <Portal>
        <Modal visible={fVisible} onDismiss={hideModalF} contentContainerStyle={containerStyle}>
          <Text>Failed</Text>
        </Modal>
      </Portal>
      <View style={{
        flex: 1,
      }}>
        <LottieView
          source={require('../assets/lottie/47759-process-cellphone-error.json')}
          autoPlay={true}
          loop={true}
          style={{
            flex: 1,
          }}
        />
      </View>
      <View style={{
        flex: 1,
      }}>
        <View style={{
          flex: 0
        }}>
          <TextInput
            mode="outlined"
            label="Email"
            value={username}
            onChangeText={newUsername => inputUsername(newUsername)}
            autoComplete = {false}
          />
        </View>

        <View style={{
          flex: 0,
          marginBottom: 40
        }}>
          <TextInput
            mode="outlined"
            label="Password"
            value={password}
            secureTextEntry={true}
            onChangeText={newPassword => inputPassword(newPassword)}
            autoComplete = {false}
            style={{
              marginTop:20}}
          />
        </View>
        <View style={{
          flex: 0,
        }}>

          <View style={{
            flex: 0
          }}>
            <Button mode="outlined" onPress={() => {
              if(username === "admin" && password === "password"){
              showModal();
              } else{
                showModalF();
              }
            }}>
              Login
            </Button>
          </View>
        </View>
              
          

      </View>
    </View>
    </PaperProvider>
  );
}