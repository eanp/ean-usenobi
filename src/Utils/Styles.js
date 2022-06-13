import {StyleSheet} from 'react-native';

const Styler = StyleSheet.create({
  flex: {
    flex: 1,
  },
  col: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  between: {
    justifyContent: 'space-between',
  },
  supercenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  w: {
    width: '100%',
  },
  centered: {
    alignItems: 'center',
  },
  py: {
    paddingHorizontal: 24,
  },
  red: {
    backgroundColor: 'red',
  },
  h60: {
    height: 60,
  },
  box16: {
    height: 16,
    width: 16,
  },
  box20: {
    height: 20,
    width: 20,
  },
  box24: {
    height: 24,
    width: 24,
  },
  mt24: {
    marginTop: 24,
  },
  selfcenter: {
    alignSelf: 'center',
  },
  flexstart: {
    justifyContent: 'flex-start',
  },
});

export {Styler};
