const express = require('express')
const exphbs = require('express-handlebars')
const app = express(); //аналон объекта сервер


//настройка Handlebars 1.1
const hbs = exphbs.create({
  defaultLayout: 'main',
  extname :'hbs'
})

//настройка Handlebars 1.2
app.engine('hbs', hbs.engine) //регестрируем движок
app.set('view engine', 'hbs') // используем уже движок
app.set('views', 'views')

app.use(express.static('public')) //для подключения папки public,чтобы она была статической


//роут
app.get('/', (req, res) =>{
  res.render('index',{
    title: "Главная страница",
    isHome: true//для заголовков страницы 
  }) //настройка Handlebars 1.3
})

//роут
app.get('/add', (req, res)=>{
  res.render('add',{
    title: "Добавить курс",
    isAdd: true
  })
})


//роут
app.get('/courses', (req, res)=>{
  res.render('courses',{
    title: "Курсы",
    isCourses: true
  })
})






const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
  console.log(`server is running on port ${PORT}`)
})