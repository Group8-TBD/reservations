import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '1s', target: 100},
    { duration: '60s', target: 2000 }
  ]
};

let roomId = Math.floor(Math.random() * 1000000) + 1;

export default function() {
  let res = http.get(`http://localhost:3111/api/reservations/${roomId}`);
  check(res, {
    'status was 200': r => r.status == 200,
    'transaction time OK': r => r.timings.duration < 200,
  });
  sleep(1);
}