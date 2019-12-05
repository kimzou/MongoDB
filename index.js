const mongoose = require('mongoose');
const Cursus = require('./Models/cursus')
const Promotion = require('./Models/promotion')
const Group = require('./Models/group')
const Cycle = require('./Models/cycle')
const Parcours = require('./Models/parcours')
const MiMo = require('./Models/mimo')

mongoose.connect('mongodb://localhost:27017/mongoDB', {useNewUrlParser: true});

mongoose.connection.on('error', err => {
    console.log(err);
    console.log('mongoose started');
  });

// Create a cursus with all relationship
const cursus = Cursus({
    _id: new mongoose.Types.ObjectId(),
    name: "Cursus 2",
    desc: "test 2"
})

cursus.save(err => {
    if(err) console.error(err);

    const promotion = new Promotion({
        _id: new mongoose.Types.ObjectId(),
        cursus_id: cursus._id,
        name: "2020",
        city: "Paris",
    })

    promotion.save(err => {
        if(err) console.error(err);
        
        cursus.promotions = [ promotion._id ]
        cursus.save()

        const group = new Group({
            _id: new mongoose.Types.ObjectId(),
            promotion_id: promotion._id,
            name: "Group B",
        })

        group.save(err => {
            promotion.groups = [ group._id ]
            promotion.save();
        })
        
        const cycle = new Cycle({
            _id: new mongoose.Types.ObjectId(),
            promotion_id: promotion._id,
            name: "Math spé"
        })
        
        cycle.save(err => {
            if(err) console.error(err);
            
            const parcours = new Parcours({
                _id: new mongoose.Types.ObjectId(),
                cycle_id: cycle._id,
                promotion_id: [ promotion._id ],
                name: "Un truc de math"
            })

            parcours.save(err => {
                if(err) console.error(err);
                
                cycle.parcours = [ parcours._id ]
                cycle.save()

                const mimo = new MiMo({
                    _id: new mongoose.Types.ObjectId(),
                    parcours_id: parcours._id,
                    name: "Encore un truc de math"
                })

                mimo.save(err => {
                    if(err) console.error(err);
                    parcours.mimos = [ mimo._id ]
                    parcours.save()
                })
            })
        })
    })
})

// Log a parcours

Parcours
    .findOne({ name: "Un truc de math" })
    .populate('cycles')
    .populate('promotions')
    .populate('MiMos')
    .exec((err, data) => {
        if(err) console.error(err);
        console.log({data});
    })