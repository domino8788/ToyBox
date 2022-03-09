import { v4 as uuidv4 } from 'uuid';
import produce from 'immer';

export const insertLog = ({ title, body, date }) =>
  produce(({ logs }) => {
    if (!logs) {
      logs = [];
    }
    logs.push({
      id: uuidv4(),
      title,
      body,
      date,
    });
  });

export const updateLog = ({ id, title, body, date }) =>
  produce(({ logs }) => {
    if (!logs) {
      logs = [];
    } else {
      logs[logs.findIndex((log) => log.id === id)] = {
        id,
        title,
        body,
        date,
      };
    }
  });

export const deleteLog = ({ id }) =>
  produce(({ logs }) => {
    if (!logs) {
      logs = [];
    }
    logs.splice(
      logs.findIndex((log) => log.id === id),
      1,
    );
  });
