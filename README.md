<div align="center">
  

# K6 TypeScript test project


</div>

Create some tests, and output test results into prometheus. For visualization purpose grafana with dashboards is provided

## How to run all of it?

- Go to utils/docker and enter command ``docker-compose up``
- Open console and go to the root of current project
- Enter command: ``npm run bundle``, it will allow to convert type script files into Js file
- Go to dist folder, find out test and run it with k6, redirecting results into the prometheus: ``k6 run --out influxdb=http://localhost:8086/k6 <Yor js file with test>``