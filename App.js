import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { ScrollView } from "react-native";
import { Card, Avatar, Text, IconButton } from "react-native-paper";
import userData from "./data.json";
import styles from "./App.styles";

export default function App() {
  const [users, setUsers] = useState(userData);

  const handleDelete = (name) => {
    setUsers(users.filter((user) => user.name !== name));
  };

  return (
    <ScrollView style={styles.container}>
      {users.map((user) => (
        <Card key={user.name} style={styles.card}>
          <Card.Title
            title={user.name}
            subtitle={user.email}
            left={(props) => <Avatar.Image {...props} source={{ uri: user.photo_url }} />}
            right={(props) => (
              <IconButton
                {...props}
                icon="delete"
                color="red"
                onPress={() => handleDelete(user.name)}
              />
            )}
          />
        </Card>
      ))}
    </ScrollView>
  );
}
