const express =  require('express')
const bodyParser = require('body-parser')
const nodemailer =  require('nodemailer')
const app = express()

var cors = require('cors');
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))


app.post('/api/form', (req,res) =>{
  console.log(req.body)

  nodemailer.createTestAccount((err,account)=>{
    const htmlEmail=`
    <h3> Contact Detail</h3>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
    `

    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port:465,
      secure: true,
      auth:{
        user:'xuansheng123@gmail.com',
        pass:'158861551Xas'
      }
    })

    let mailOption = {
      from:'test@testaccount.com',
      to:'axu6@u.rochester.edu',
      replyto:'test@testaccount.com',
      subject:'New Message From Personal Website',
      text:req.body.message,
      html: htmlEmail
    }
    transporter.sendMail(mailOption,(err,info)=>{
      if(err){
        return console.log(err)
      }
      console.log('Message sent: %s ',info.message)
      console.log('Message URL: %S',nodemailer.getTestMessageUrl(info))
    })
  })
})

const PORT = process.env.PORT || 3001

app.listen(PORT,()=>{
  console.log(`Server listening on port ${PORT}`)
})
