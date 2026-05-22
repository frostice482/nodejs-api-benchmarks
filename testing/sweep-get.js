import http from 'k6/http';
import { check } from 'k6';

export const options = {
  scenarios: {
    warmup: {
      executor: 'constant-vus',
      vus: 10,
      duration: '30s',
      tags: { scenario: 'warmup' },
    },
    vu_1: {
      executor: 'constant-vus',
      vus: 1,
      duration: '30s',
      startTime: '30s',
      tags: { scenario: 'vu_1' },
    },
    vu_10: {
      executor: 'constant-vus',
      vus: 10,
      duration: '30s',
      startTime: '60s',
      tags: { scenario: 'vu_10' },
    },
    vu_25: {
      executor: 'constant-vus',
      vus: 25,
      duration: '30s',
      startTime: '90s',
      tags: { scenario: 'vu_25' },
    },
    vu_100: {
      executor: 'constant-vus',
      vus: 100,
      duration: '30s',
      startTime: '120s',
      tags: { scenario: 'vu_100' },
    },
    vu_250: {
      executor: 'constant-vus',
      vus: 250,
      duration: '30s',
      startTime: '150s',
      tags: { scenario: 'vu_250' },
    },
    vu_500: {
      executor: 'constant-vus',
      vus: 500,
      duration: '30s',
      startTime: '180s',
      tags: { scenario: 'vu_500' },
    },
  },
  thresholds: {
    'http_req_duration{scenario:vu_1}': ['p(99)<10000'],
    'http_req_duration{scenario:vu_10}': ['p(99)<10000'],
    'http_req_duration{scenario:vu_25}': ['p(99)<10000'],
    'http_req_duration{scenario:vu_100}': ['p(99)<10000'],
    'http_req_duration{scenario:vu_250}': ['p(99)<10000'],
    'http_req_duration{scenario:vu_500}': ['p(99)<10000'],
    'http_req_failed{scenario:vu_1}': ['rate<0.01'],
    'http_req_failed{scenario:vu_10}': ['rate<0.01'],
    'http_req_failed{scenario:vu_25}': ['rate<0.01'],
    'http_req_failed{scenario:vu_100}': ['rate<0.01'],
    'http_req_failed{scenario:vu_250}': ['rate<0.01'],
    'http_req_failed{scenario:vu_500}': ['rate<0.01'],
    'http_reqs{scenario:vu_1}': [],
    'http_reqs{scenario:vu_10}': [],
    'http_reqs{scenario:vu_25}': [],
    'http_reqs{scenario:vu_100}': [],
    'http_reqs{scenario:vu_250}': [],
    'http_reqs{scenario:vu_500}': [],
  },

};

export default function () {
  const res = http.get(`${__ENV.BASE_URL}/users?limit=100`);
  check(res, { 'GET status 200': (r) => r.status === 200 });
}
