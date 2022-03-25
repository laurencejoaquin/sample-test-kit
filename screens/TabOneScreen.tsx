import React from "react";
import { View, Image, Text, Dimensions } from "react-native";
import { Provider as PaperProvider, TextInput, Button, Portal, Modal } from "react-native-paper";

export default function TabOneScreen() {
    // Modals
    const [visible, setVisible] = React.useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = { backgroundColor: "white", padding: 20 };
    const [register, setRegister] = React.useState("Registered!");

    // Username || Password
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    return (
        <PaperProvider>
            <View
                style={{
                    flex: 1,
                    backgroundColor: "#fff",
                    justifyContent: "center",
                    paddingHorizontal: 20,
                }}
            >
                <Portal>
                    <Modal
                        visible={visible}
                        onDismiss={hideModal}
                        contentContainerStyle={containerStyle}
                    >
                        <Text>{register}</Text>
                    </Modal>
                </Portal>
                <View
                    style={{
                        flex: 0,
                    }}
                >
                    <Text
                        style={{
                            color: "black",
                            fontSize: 40,
                        }}
                    >
                        Register
                    </Text>
                    <Text
                        style={{
                            color: "black",
                        }}
                    >
                        Enter credential to create new account.
                    </Text>
                </View>
                <View
                    style={{
                        flex: 0,
                        marginTop: 20,
                    }}
                >
                    <TextInput
                        mode="outlined"
                        label="Username"
                        value={username}
                        onChangeText={(newUsername) => setUsername(newUsername)}
                        autoComplete={false}
                    />
                </View>
                <View
                    style={{
                        flex: 0,
                    }}
                >
                    <TextInput
                        mode="outlined"
                        label="Password"
                        value={password}
                        secureTextEntry={true}
                        onChangeText={(newPassword) => setPassword(newPassword)}
                        autoComplete={false}
                    />
                </View>
                <View
                    style={{
                        flex: 0,
                        paddingTop: 20,
                        paddingHorizontal: 50,
                    }}
                >
                    <Button
                        mode="outlined"
                        onPress={() => {
                            if (username !== "" && password !== "") {
                                setRegister("Register Success.");
                                showModal();
                            } else {
                                setRegister("Incomplete credential, check username and password.");
                                showModal();
                            }
                        }}
                    >
                        Register
                    </Button>
                </View>
            </View>
        </PaperProvider>
    );
}