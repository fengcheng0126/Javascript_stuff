function whichDay() {
  let dayOfTheWeek = '6';
  switch (dayOfTheWeek) {
    case '0':
      console.log('monday');
      break;
    case '1':
      console.log('tuesday');
      break;
    case '2':
      console.log('wednsday');
      break;
    case '3':
      console.log('thursday');
      break;
    case '4':
      console.log('friday');
      break;
    case '5':
      console.log('saturday');
      break;
    case '6':
      console.log('sunday');
      break;
    default:
      console.log('Unrecognized');
  }

}

whichDay();