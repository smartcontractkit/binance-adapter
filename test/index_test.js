const assert = require("chai").assert;
const createRequest = require("../index.js").createRequest;

describe("createRequest", () => {
	const jobID = "278c97ffadb54a5bbb93cfec5f7b5503";

	context("when using no endpoint", () => {
		const req = {
			id: jobID,
			data: {}
		};

		it("returns the ping status to the node", (done) => {
			createRequest(req, (statusCode, data) => {
				assert.equal(statusCode, 200);
				assert.equal(data.jobRunID, jobID);
				assert.isTrue(data.data);
				console.log(JSON.stringify(data));
				done();
			});
		});
	});

	context("when using the time endpoint", () => {
		const req = {
			id: jobID,
			data: {
				endpoint: "time"
			}
		};

		it("returns the ping status to the node", (done) => {
			createRequest(req, (statusCode, data) => {
				assert.equal(statusCode, 200);
				assert.equal(data.jobRunID, jobID);
				assert.isNumber(data.data);
				console.log(JSON.stringify(data));
				done();
			});
		});
	});

	context("when using the exchangeInfo endpoint", () => {
		const req = {
			id: jobID,
			data: {
				endpoint: "exchangeInfo"
			}
		};

		it("returns the ping status to the node", (done) => {
			createRequest(req, (statusCode, data) => {
				assert.equal(statusCode, 200);
				assert.equal(data.jobRunID, jobID);
				assert.isNotEmpty(data.data);
				console.log(JSON.stringify(data));
				done();
			});
		});
	});
});