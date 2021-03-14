export function conditions(condition) {
  switch (condition) {
    case "storm":
      return icon = {
        name: 'cloud-showers-heavy',
        color: '#a0a0a0'
      };
      break;

    case 'snow':
      return icon = {
        name: 'snowflake',
        color: '#1ec9ff'
      };
      break;

    case 'hail':
      return icon = {
        name: 'cloud-showers-heavy',
        color: '#1ec9ff'
      };
      break;

    case 'rain':
      return icon = {
        name: 'cloud-rain',
        color: '#1ec9ff'
      };
      break;

    case 'fog':
      return icon = {
        name: 'cloud',
        color: '#a0a0a0'
      };
      break;

    case 'clear_day':
      return icon = {
        name: 'sun',
        color: '#ffb300'
      };
      break;

    case 'clear_night':
      return icon = {
        name: 'moon',
        color: '#a0a0a0'
      };
      break;

    case 'cloud':
      return icon = {
        name: 'cloud',
        color: '#1ec9ff'
      };
      break;

    case 'cloudly_day':
      return icon = {
        name: 'cloud-sun',
        color: '#1ec9ff'
      };
      break;

    case 'cloudly_night':
      return icon = {
        name: 'cloud-moon',
        color: '#a0a0a0'
      };
      break;

    default:
      return icon = {
        name: 'cloud',
        color: '#1ec9ff'
      };
  }
}
