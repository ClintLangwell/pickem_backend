//@desc GET all teams
//@route /api/teams
//@access public
const getTeams = (req, res)=>{
    res.status(200).json({message: 'Get all teams'});
};

//@desc GET a team
//@route /api/teams
//@access public
const getTeam = (req, res)=>{
    const {id} = req.params;
    res.status(200).json({message: `Get team with id ${id}`});
};

//@desc CREATE a team
//@route /api/teams
//@access public
const createTeam = (req, res)=>{
    console.log(req.body);
    const {teamNumuber, firstName, lastName, image} = req.body;
    if(!teamNumuber || !firstName || !lastName){
        res.status(400);
        throw new Error('teamNumber, firstName, and lastName are required fields!');
    }
    res.status(201).json({message: 'Created team'});
};

//@desc UPDATE a team
//@route /api/teams
//@access public
const updateTeam = (req, res)=>{
    const {id} = req.params;
    res.status(200).json({message: `Updated team id ${id}`});
};

//@desc DELETE a team
//@route /api/teams
//@access public
const deleteTeam = (req, res)=>{
    const {id} = req.params;
    res.status(201).json({message: `Deleted team with id ${id}`});
};

module.exports = {getTeams, getTeam, createTeam, updateTeam, deleteTeam};