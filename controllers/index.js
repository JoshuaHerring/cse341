const awesomeFunction = (req, res, next) =>{
    res.json("Kami Herring");
}

const returnAnotherPerson = (req, res, next) =>{
    res.json("John Herring");
}

module.exports = { awesomeFunction, returnAnotherPerson };