const { errors } = require('@strapi/utils');
const { ForbiddenError } = errors;

type Engine = 'электрический' | 'дизильный' | 'бензиновый';
type Transmission = 'автоматическая' | 'ручная' | 'роботизированная'
const checkEngine = (data: {
  engine: Engine,
  powerRevers: number
}): boolean => {
  if (data.engine !== 'электрический' && data.powerRevers) {
    throw new ForbiddenError('Запас хода может быть только у машины с электрическим двигателем');
  }
  return true;
}

const checkTransmission = (data: {
  engine: Engine,
  transmission: Transmission
}): boolean => {
  if (data.engine === 'электрический' && data.transmission) {
    throw new ForbiddenError('Трансмиссии не может быть у машин с эликтрическим ходом');
  }
  return true;
}


export default {
  beforeCreate(event) {
    const { data } = event.params;
    checkEngine(data);
    checkTransmission(data);
    event.params.data.color = data.color.toLowerCase();
    event.params.data.publishedAt = new Date();
  },
  beforeUpdate(event) {
    const { data } = event.params;
    checkEngine(data);
    checkTransmission(data);
  }
};