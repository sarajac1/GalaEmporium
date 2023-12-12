export default function (server, db) {
  
  server.get('/api/login', async (req, res) => {
    // are we logged in? get logged in user
    const users = await db.query("SELECT * FROM users WHERE email = ? AND password = ?", [req.session.user?.email, req.session.user?.password])
    if(users[0]){
      res.json({loggedIn: true})
    }else{
      res.status(401)
      res.json({loggedIn: false})
    }
  })

  server.post('/api/login', async(req, res) => {
    // perform login
    const users = await db.query("SELECT * FROM users WHERE email = ? AND password = ?", [req.body.email, req.body.password])
    if (users[0]) {
      req.session.user = users[0]
      let userId = users[0].id
      //res.json({ loggedIn: true })
      
      const clubOrganiser = await db.query("SELECT * FROM clubs WHERE admin = ?", [users[0].id])
      if (clubOrganiser[0]) {
        res.json({ visitor: false, loggedIn: true, id:userId})
      } else {
            res.json({visitor: true, loggedIn: true, id:userId})
      }

    }else{
      res.status(401)
      res.json({loggedIn: false, visitor: null})
    }
  })

  server.delete('/api/login', (req, res) => {
    // perform logout
    req.session.destroy();
    res.json({loggedIn: false})
  })

}