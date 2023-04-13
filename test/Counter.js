const { expect } = require("chai");

describe("Counter", function() {

  let counter;

  beforeEach(async () => {
    const Counter = await ethers.getContractFactory("Counter");
    counter = await Counter.deploy();
    await counter.deployed();
  });

  it("Should subtract two numbers correctly", async function() {
    await counter.subtractNum(8,6);
    expect(await counter.subtracted()).to.equal(2);
  })

  it("Should add two numbers correctly", async function() {
    await counter.addNum(2, 3);
    expect(await counter.added()).to.equal(5);
  });

  it("Should divide two numbers correctly", async function() {
    await counter.divideNum(8,2);
    expect(await counter.divided()).to.equal(4);
  })

  it("Should multiply two numbers correctly", async function() {
    await counter.multiplyNum(6,2);
    expect(await counter.multiplied()).to.equal(12);
  })


});