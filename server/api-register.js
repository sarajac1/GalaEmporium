import login from "./apis/login.js" 
import events from "./apis/events.js" 


export default function (server, db) {
  
  login(server, db)
  events(server, db)
}