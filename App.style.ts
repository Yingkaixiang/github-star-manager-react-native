import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  main: {
  },
  header: {
    backgroundColor: "#333",
    paddingTop: 34,
    height: 120,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  search: {
    flex: 0.9,
    height: 50,
    flexDirection: "row",
  },
  menu: {
    width: 50,
    backgroundColor: 'red',
    marginRight: 20,
  },
  input: {
    flex: 1,
    backgroundColor: 'red',
  },
  avatar: {
    width: 50,
    backgroundColor: 'red',
    marginLeft: 20,
    borderRadius: 50
  },
  body: {
  },
  repo: {
    height: 150,
    borderBottomWidth: 1,
    borderBottomColor: "blue"
  }
});

export default styles;