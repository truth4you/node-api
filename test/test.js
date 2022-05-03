const user = require("../services/user");
const job = require("../services/job");

const { expect } = require("chai");

describe("User Service", () => {
    it("Initialize", async () => {
        await user.create()
        await user.init()
    })
    it("Insert users", async () => {
        await user.insert({
            first_name: 'Walt', last_name: 'M'
        })
        await user.insert({
            first_name: 'John', last_name: 'L'
        })
        await user.insert({
            first_name: 'Eric', last_name: 'K'
        })
        const res = await user.count()
        expect(res[0].count).to.equal(3)
    })
    it("Update user", async () => {
        await user.update({
            id: 1, first_name: 'Golden', last_name: 'P'
        })
        const row = await user.all({ id: 1})
        expect(row[0].first_name).to.equal('Golden')
    })
})

describe("Job Service", () => {
    it("Initialize", async () => {
        await job.create()
        await job.init()
    })
    it("Insert jobs", async () => {
        await job.insert({
            title: 'Frontend Developer', salary: 500
        })
        await job.insert({
            title: 'Backend Developer', salary: 700
        })
        const res = await job.count()
        expect(res[0].count).to.equal(2)
    })
    it("Update job", async () => {
        await job.update({
            id: 1, title: 'Software Engineer', salary: 800
        })
        const row = await job.all({ id: 1})
        expect(row[0].title).to.equal('Software Engineer')
    })
})