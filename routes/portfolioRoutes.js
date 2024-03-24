const router = require('express').Router()
const {Intro, About, Experience, Project, Education, Contact} = require('../schema/portfolioSchema')
const User =  require('../schema/userSchema')

const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './frontend/build', 'index.html'));
  });


router.get('/get-portfolio-data', async(req,res)=>{
        try {
            const intros = await Intro.find()
            const abouts = await About.find()
            const experiences = await Experience.find()
            const projects = await Project.find()
            const educations = await Education.find()
            const contacts = await Contact.find()

            res.status(200).send({
                intro: intros[0],
                about: abouts[0],
                experience: experiences,
                project: projects,
                education: educations,
                contact: contacts[0]
            })
                

            

        } catch (error) {
            res.status(500).send(error)
        }
})

router.post('/update-intro', async(req,res)=>{
    try {
        const intro = await Intro.findOneAndUpdate(
            {_id: req.body._id},
            req.body,
            {new:true}

        )
        res.status(200).send({
            data : intro,
            success: true,
            message: "Intro Updated"
        });
    } catch (error) {
        res.status(500).send(error)
    }
})

router.post('/update-about', async(req,res)=>{
    try {
        const about = await About.findOneAndUpdate(
            {_id: req.body._id},
            req.body,
            {new:true}

        )
        res.status(200).send({
            data : about,
            success: true,
            message: "About Updated"
        });
    } catch (error) {
        res.status(500).send(error)
    }
})

router.post('/add-experience', async(req,res)=>{
    try {
        const experience = new Experience(req.body)
        await experience.save() 
        res.status(200).send({
            data: experience,
            success: true,
            message: "Experience Added"
        })
    } catch (error) {
        res.status(500).send(error)
    }
})

router.post('/update-experience', async(req,res)=>{
    try {
        const experience = await Experience.findOneAndUpdate(
            {_id: req.body._id},
            req.body,
            {new:true}

        )
        res.status(200).send({
            data : experience,
            success: true,
            message: "Experience Updated"
        });
    } catch (error) {
        res.status(500).send(error)
    }
})

router.post('/delete-experience', async(req,res)=>{
    try {
        const experience = await Experience.findOneAndDelete(
            {_id: req.body._id},
            req.body,
            {new:true}

        )
        res.status(200).send({
            data : experience,
            success: true,
            message: "Experience Deleted"
        });
    } catch (error) {
        res.status(500).send(error)
    }
})

router.post('/add-project', async(req,res)=>{
    try {
        const project = new Project(req.body)
        await project.save() 
        res.status(200).send({
            data: project,
            success: true,
            message: "Project Added"
        })
    } catch (error) {
        res.status(500).send(error)
    }
})

router.post('/update-project', async(req,res)=>{
    try {
        const project = await Project.findOneAndUpdate(
            {_id: req.body._id},
            req.body,
            {new:true}

        )
        res.status(200).send({
            data : project,
            success: true,
            message: "Project Updated"
        });
    } catch (error) {
        res.status(500).send(error)
    }
})

router.post('/delete-project', async(req,res)=>{
    try {
        const project = await Project.findOneAndDelete(
            {_id: req.body._id},
            req.body,
            {new:true}

        )
        res.status(200).send({
            data : project,
            success: true,
            message: "Project Deleted"
        });
    } catch (error) {
        res.status(500).send(error)
    }
})

router.post('/add-education', async(req,res)=>{
    try {
        const education = new Education(req.body)
        await education.save() 
        res.status(200).send({
            data: education,
            success: true,
            message: "Education Added"
        })
    } catch (error) {
        res.status(500).send(error)
    }
})

router.post('/update-education', async(req,res)=>{
    try {
        const education = await Education.findOneAndUpdate(
            {_id: req.body._id},
            req.body,
            {new:true}

        )
        res.status(200).send({
            data : education,
            success: true,
            message: "Education Updated"
        });
    } catch (error) {
        res.status(500).send(error)
    }
})

router.post('/delete-education', async(req,res)=>{
    try {
        const education = await Education.findOneAndDelete(
            {_id: req.body._id},
            req.body,
            {new:true}

        )
        res.status(200).send({
            data : education,
            success: true,
            message: "Education Deleted"
        });
    } catch (error) {
        res.status(500).send(error)
    }
})

router.post('/update-contact', async (req, res) => {
    try {
      const { _id, ...updatedContact } = req.body;
      const contact = await Contact.findByIdAndUpdate(_id, updatedContact, { new: true });
  
      if (!contact) {
        return res.status(404).send({
          success: false,
          message: 'Contact not found',
        });
      }
  
      res.status(200).send({
        data: contact,
        success: true,
        message: 'Contact Updated',
      });
    } catch (error) {
      res.status(500).send({
        success: false,
        message: error.message,
      });
    }
  });

  router.post('/admin-login', async(req,res)=>{
    try {
        const user = await User.findOne({username: req.body.username , password: req.body.password})
        user.password= ""
        if(user){
            res.status(200).send({
                data:user,
                success:true,
                message:'Logged In'
            })

        }
        else{
            res.status(200).send({
                data: user,
                success: false,
                message: 'Invalid Credentials'
            })
        }
    } catch (error) {
        res.status(500).send(error)
    }
  })
  
module.exports = router;