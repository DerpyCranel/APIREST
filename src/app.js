import express from 'express'
import indexRoutes from './routes/index.routes.js'
import  employeesRoutes from './routes/employes.routes.js'



const app = express()

app.use(express.json())


app.use(indexRoutes)
app.use(employeesRoutes)
app.use((req,res)=>{
    res.status(404).json({
        message:'Not found '
    })
})

export default app