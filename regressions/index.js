require('@tensorflow/tfjs-node');
const tf = require('@tensorflow/tfjs');
const loadCSV = require('./load-csv');
const LinearRegression = require('./linear-regression');

let { features, labels, testFeatures, testLabels } = loadCSV('./cars.csv', {
	shuffle: true,
	splitTest: 50,
	dataColumns:['horsepower', 'weight', 'displacement'],
	labelColumns: ['mpg']
})

const regression = new LinearRegression(features, labels, {
	learningRate: 0.1,
	iterations: 100
})

regression.train();
const r2 = regression.test(testFeatures, testLabels);
console.log('r2 is ', r2);
// console.log('UPdtaed M ' ,regression.weights.get(1, 0), 'and B ', regression.weights.get(0, 0));
