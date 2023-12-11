export default function (server, db) {
  
  // Retrive events from the events table
  server.get('/api/events/:club', async (req, res) => {
    const clubname = [req.params.club]
    let events = ""
    if (clubname == "all") {
      events = await db.query("SELECT * FROM events")
    } else {
      events = await db.query("SELECT * FROM events where club_name = ?", clubname)
    }    
      res.json(events)    
    })
}