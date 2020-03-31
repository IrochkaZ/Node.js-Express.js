const {Router} = require('express')
const router = Router()


router.get('/', (req, res) =>{
  res.render('index',{
    title: "Главная страница",
    isHome: true//для заголовков страницы 
  }) //настройка Handlebars 1.3
})



module.exports = router