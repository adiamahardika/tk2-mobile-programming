import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import { TextInput, Button } from "@react-native-material/core";
import { useForm, Controller } from "react-hook-form";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export function LoginScreen({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loginError, setLoginError] = useState({ user: "", password: "" });

  const onSubmit = (data) => {
    const { username, password } = data;

    // Reset previous errors
    setLoginError({ user: "", password: "" });

    // Validation logic
    if (username !== "pengguna") {
      setLoginError((prevState) => ({
        ...prevState,
        user: "Invalid username",
      }));
    }

    if (password !== "masuk") {
      setLoginError((prevState) => ({
        ...prevState,
        password: "Invalid password",
      }));
    }

    if (username === "pengguna" && password === "masuk") {
      navigation.navigate("Home");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <Image
          source={require("../../assets/adidas-logo.jpg")}
          style={styles.image_logo}
        />
      </View>

      <Controller
        control={control}
        rules={{
          required: "Username is required",
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            color={"#000"}
            variant="outlined"
            label="Username"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={styles.input}
          />
        )}
        name="username"
      />
      {errors.username && (
        <Text style={styles.errorText}>{errors.username.message}</Text>
      )}
      {loginError.user && (
        <Text style={styles.errorText}>{loginError.user}</Text>
      )}

      <Controller
        control={control}
        rules={{
          required: "Password is required",
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            color={"#000"}
            variant="outlined"
            label="Password"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry
            style={styles.input}
          />
        )}
        name="password"
      />
      {errors.password && (
        <Text style={styles.errorText}>{errors.password.message}</Text>
      )}
      {loginError.password && (
        <Text style={styles.errorText}>{loginError.password}</Text>
      )}

      <Button
        trailing={(props) => <Icon name="arrow-right" {...props} />}
        title="Login"
        onPress={handleSubmit(onSubmit)}
        style={styles.button}
        color="#000"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  input: {
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
  view: {
    alignItems: "center",
    justifyContent: "center",
    height: 100,
  },
  image_logo: {
    width: "50%",
    height: "50%",
    resizeMode: "cover",
  },
});
