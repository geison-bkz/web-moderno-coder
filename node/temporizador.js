const schedule = require('node-schedule');

const tarefa1 = schedule.scheduleJob(1, function () {
  console.log(
    'Executando Tarefa 1',
    new Date().getSeconds(),
    new Date().getHours()
  );
});

console.log(tarefa1);

setTimeout(function () {
  tarefa1.cancel();
  console.log('Cancelando Tarefa 1');
}, 5000);

const regra = new schedule.RecurrenceRule();
regra.dayOfWeek = [new schedule.Range(1, 5)];
regra.hour = 21;
regra.second = 30;

const tarefa2 = schedule.scheduleJob(regra, function () {
  console.log('Executando Tarefa 2', new Date().getSeconds());
});
