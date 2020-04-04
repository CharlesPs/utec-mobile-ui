
import {
    StyleSheet
} from 'react-native'

import { Metrics } from '../../Resources/Constants/Metrics'
// import { Fonts } from '../../Resources/Constants/Fonts'

const styles = StyleSheet.create({

  card: {
    // flex:1,
    backgroundColor: '#fff',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#cccddd',
    elevation: 2,
    borderRadius: 5,
    marginBottom: 8,
    // paddingTop: 8,
    paddingBottom: 0,
    paddingLeft: 15,
    paddingRight: 15,
    height: 50,

    // SHADOW COLOR FOR IOS
    shadowColor: '#cccddd',
    shadowOffset: {
        width: 0,
        height: 0
    },
    shadowRadius: 4,
    shadowOpacity: 1.0
    
  },
  SelectedCard:{
    borderColor: '#20afd2',
  },
  titleStyle:{
    // fontFamily: Fonts.bold,
    // color: '#323232'
  },
  cardTitle: {
    // fontFamily: Fonts.semibold,
    // backgroundColor: 'blue',
    flexGrow: 1,
    color: '#323232'
  },
  buttons: {
    // backgroundColor: 'red',
    marginBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
  },
  icon: {
    width: 30,
    height: 30,
    // backgroundColor: 'green',
    width: Metrics.wp('7%'),
    height: Metrics.wp('7%'),
    marginRight: 10,
  },
  next: {
    width: 12,
    height: 25,
    backgroundColor: 'green',
    // marginRight: 15,
  },

});

export default styles
