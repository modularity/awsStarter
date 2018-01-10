import {StyleSheet, Dimensions} from 'react-native';

module.exports =  StyleSheet.create({
  outerContainer: {
    flex: 1,
    //backgroundColor: '#338ce0',
    backgroundColor: '#ecf0f1'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  federatedContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  federatedText: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  fbBtn: {
    borderWidth:.5,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    width:50,
    height:50,
    backgroundColor:'#fff',
    borderRadius:50,
  },
  line: {
    width: Dimensions.get('window').width*.7,
    borderColor: 'black',
    borderWidth: 1,
  },
  inputContainer: {
    width: Dimensions.get('window').width*.8,
    height: Dimensions.get('window').height*.6,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: .5,
    borderColor: 'rgba(0,0,0,0.2)',
    height: 40,
    borderRadius: 10,
    margin: 8
  },
  inputImage: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    //resizeMode : 'stretch',
    alignItems: 'center'
},
  input: {
    width: 200,
    height: 44,
    padding: 8,
  },
  programContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: Dimensions.get('window').width*.7,
  },
  programBtnContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderWidth: .5,
    borderColor: 'rgba(0,0,0,0.2)',
    borderRadius: 10,
    padding: 5
  },
  programText: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Avenir',
    textAlign: 'center',
    alignSelf: 'center',
    margin: 3,
    backgroundColor: 'transparent',
  },
  modalContainer: {
    width: Dimensions.get('window').width*.8,
    height: Dimensions.get('window').height*.6,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  picker: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: 260,
    backgroundColor: '#dee4e5',
    borderRadius: 10
  },
  h1Text: {
    fontSize: 20,
    fontWeight: '400',
    fontFamily: 'Avenir',
    textAlign: 'center',
    alignSelf: 'center',
    margin: 3,
    color: '#34495e',
    backgroundColor: 'transparent',
  },
  confirmBtn: {
    backgroundColor: '#b3d1f2',
    borderRadius: 15,
    padding: 10,

  }
});
