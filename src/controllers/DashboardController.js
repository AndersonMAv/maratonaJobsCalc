const Job = require('../model/Job');
const Profile = require('../model/Profile');
const JobUtils = require('../utils/JobUtils');

module.exports = {
    index(req, res) {

        const jobs = Job.get()
        const profile = Profile.get()

        let statusCount = {
            progress: 0,
            done: 0,
            total: jobs.length
        }
        //Total de horas por dia de cada job em progresso
        let jobTotalHours = 0;

        const updateJobs = jobs.map((job) => {
            const remaining = JobUtils.remainingDays(job)
            //if ternario
            const status = remaining <= 0 ? 'done' : 'progress';
            //Somando quantidade de status
            //Se status retornar done status = done se status retornar progress status=progress
            //abaixo ele varre o objeto procurando restultudado do comentario acima e adciona o valor
            statusCount[status] += 1;

            //Total de horas por dia de cada job em progresso
            jobTotalHours = status === 'progress' ? jobTotalHours + Number(job['daily-hours']) : jobTotalHours;

            return {
                ...job,
                remaining,
                status,
                budget: JobUtils.calculateBudget(job, profile["value-hour"])
            }
        })
        //Quantidade de horas que quero trabalhar dia, MENOS quantidade de horas/dia de cada job em progress
        const freeHours = profile["hours-per-day"] - jobTotalHours;

        return res.render("index", { jobs: updateJobs, profile: profile, statusCount: statusCount, freeHours: freeHours })
    },

};
