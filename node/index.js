var App= require('general-express')
var app= module.exports= App()


// middlewares

app.use('/api', require('Example/handlers/Cookie').init)
app.use('/api', require('Example/handlers/Session').init)

app.use('/api', require('Example/handlers/Auth').init)
app.use('/api', require('Example/handlers/Auth').initSession)

// subapps

app.use('/api/v1/users'
,   require('Example/handlers/Api/Users')
)


app.listen(7001)
