import produce from 'immer';

export const handleCommon = ({ key, value }) =>
  produce(({ common }) => {
    common[key] = value;
  });
