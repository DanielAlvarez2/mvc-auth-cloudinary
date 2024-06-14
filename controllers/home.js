module.exports={
    getIndex:(req,res)=>{
        if(req.user){
            return res.redirect('/feed')
        }
        res.render('index.ejs',{title:'HOME PAGE'})
    }
}