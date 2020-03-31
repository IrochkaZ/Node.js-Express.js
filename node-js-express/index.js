const express = require('express')
const exphbs = require('express-handlebars')
const app = express(); //аналон объекта сервер
const homeRoutes = require('./routes/home')
const addRoutes = require('./routes/add')
const coursesRouts = require('./routes/courses')


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
app.use('/', homeRoutes) // для подключения роута
app.use('/add', addRoutes)
app.use('/courses',coursesRouts)

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