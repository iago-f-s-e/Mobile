const conditions = {
  storm: {
    name: 'cloud-showers-heavy',
    color: '#a0a0a0'
  },

  snow: {
    name: 'snowflake',
    color: '#1ec9ff'
  },

  hail: {
    name: 'cloud-showers-heavy',
    color: '#1ec9ff'
  },

  rain: {
    name: 'cloud-rain',
    color: '#1ec9ff'
  },

  fog: {
    name: 'cloud',
    color: '#a0a0a0'
  },

  clear_day: {
    name: 'sun',
    color: '#ffb300'
  },

  clear_night: {
    name: 'moon',
    color: '#a0a0a0'
  },

  cloud: {
    name: 'cloud',
    color: '#1ec9ff'
  },

  cloudly_day: {
    name: 'cloud-sun',
    color: '#1ec9ff'
  },

  cloudly_night: {
    name: 'cloud-moon',
    color: '#a0a0a0'
  },

  none_day: {
    name: 'cloud',
    color: '#1ec9ff'
  },

  none_night: {
    name: 'cloud',
    color: '#1ec9ff'
  }
}

const getCondition = (typeCondition) => {
  return conditions[typeCondition];
}

export default getCondition;