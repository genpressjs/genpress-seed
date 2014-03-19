var App= require('general-express')
var app= module.exports= App()



app.use('/api/v1/users'
,   require('Example/handlers/Api/Users')
)



app.listen(7001)
