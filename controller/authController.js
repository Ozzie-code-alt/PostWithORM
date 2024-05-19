// signup Login passwords etc etc 


const signup = (req, res, next) =>{
res.json(
    {
        staus: 'success',
        message: 'Signup successful'
    }
)
}

module.exports = {signup}