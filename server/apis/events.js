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

  // Add new event
  server.post('/api/events', async (req, res) => {
    const title = req.body.title.trim()
    const description = req.body.description
    const starts_at = req.body.starts_at
    const ends_at = req.body.ends_at
    const created_by = req.body.created_by
    const club_name = req.body.club_name

    if (req.body.title.trim().length > 0) {
      const result = await db.query("INSERT INTO events (title, description, starts_at, ends_at," + 
        "created_by, club_name) VALUES (?, ?, ?, ?, ?, ?)",
        [title, description, starts_at, ends_at, created_by, club_name])
      result.eventAdded = true
      res.json(result)
      console.log("Result - ", result);
    } else {
      res.status(401)
      res.json({ eventAdded: false })
    }
  })

  // Book event
  server.post('/api/events/bookevent', async (req, res) => {
    const event_id = req.body.event_id
    const user_id = req.body.user_id

    if (req.body.event_id != null) {
      const result = await db.query("INSERT INTO event_attendees (event_id, user_id) VALUES (?, ?)",
        [event_id, user_id])
      result.eventBooked = true
      res.json(result)
      console.log("Result - ", result);
    } else {
      res.status(401)
      res.json({ eventBooked: false })
    }
  })
}
