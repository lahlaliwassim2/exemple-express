const { request, response } = require('express')
let express = require('express')
let app = express()
let bodyParser = require('body-parser')
let routeAdmin = require('./routes/admin')
app.use('/admin',routeAdmin)
app.set('view engine' , 'ejs')


//middelware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//Routes
app.get('/',(request,response)=>{
    response.render('pages/index')
})


app.get('/:nom/:prenom',(request,response)=>{
    response.send(`votre nom est ${request.params.nom} et votre prenom est ${request.params.prenom}`)
    // response.send(`${test}`)
})
app.get('/user',(request,response)=>{
   response.send('user route')
})



app.post('/',(request,response)=>{
    if(request.body.message ==='undefined' || request.body.message ===''){
        response.render('pages/index',{error : 'entrer votre com'})
    }
})


app.listen(1220)
