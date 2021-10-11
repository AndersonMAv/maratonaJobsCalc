const Profile = require('../model/Profile')


//Faz com que estiver dentro seja exportavel
module.exports = {
    index(req, res) {
        return res.render("profile", { profile: Profile.get() })
    },
    update(req, res) {
        //req.body Para pegar os dados
        const data = req.body
        //Definir quantas semanas tem em um ano: 52
        const weekPerYear = 52
        //remover as semanas de ferias do ano, para pegar quantas semanas tem em 1 mês
        const weeksPerMouth = (weekPerYear - data['vacation-per-year']) / 12
        //quantas horas por semana estou trabalhando
        //total de horas trabalhadas no mes
        const weekTotalHours = data["hours-per-day"] * data["days-per-week"]

        //horas trabalhadas no mês
        const monthlyTotalHours = weekTotalHours * weeksPerMouth

        //qual será o valor da minha hora ?
        const valueHour = data["monthly-budget"] / monthlyTotalHours

        Profile.update({
            ...Profile.get(),
            ...req.body,
            "value-hour": valueHour
        })
        return res.redirect('/profile')

    }
}