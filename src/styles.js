import {Dimensions, StyleSheet} from 'react-native';

const color = '#ff9b31';

const main = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303e45',
  },
  banner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
  },
  todoText: {
    fontSize: 50,
    fontWeight: 'bold',
    color,
  },
  todoCount: {
    fontSize: 35,
    color,
  },
  emptyComponent:{
    textAlign: 'center',
    color: 'white',
  }
});

const todo_input = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#e0e0e0',
    padding: 2,
    margin: 10,
    borderRadius: 10,
  },
  container: {
    backgroundColor: '#a7b6bd',
    padding: 5,
    margin: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    backgroundColor: '#4a636e',
    padding: 10,
    margin: 10,
    width: Dimensions.get('window').width / 2.5,
    borderRadius: 10,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const todo_card = StyleSheet.create({
  container:{
    backgroundColor: '#a7b6bd',
    padding: 8,
    margin: 5,
    borderRadius: 7,
  },
  text:{
    fontSize: 20,
  }
})
export {main, todo_input,todo_card};
