import { Profile } from '../models/profile.js'

function index(req, res) {
  Profile.find({})
  .then(profiles => res.json(profiles))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

function create(req, res) {
  Profile.findById(req.user.profile._id)
  .then(profile => {
    profile.teams.push(req.body)
    profile.save()
    .then(() =>{
      res.redirect(`/profiles/${req.user.profile._id}`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/profiles/${req.user.profile._id}`)
  })
}

export { 
  index,
  create,
}
