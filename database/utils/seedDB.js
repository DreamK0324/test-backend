const { User, Movie } = require('../models');

const seedDB = async () => {
    const dummyUser1 = await User.create({
        firstname: "Jay",
        lastname: "Chou",
        email: "test1@gmail.com"
    });
    
    const dummyUser2 = await User.create({
        firstname: "Edison",
        lastname: "Chen",
        email: "test2@gmail.com"
    });

    const dummyMovie1 = await Movie.create({
        title: "Initial D",
        // releaseDate: "2005-06-23",         // only date value
        releaseDate: new Date('2005-01-01'),  // date and time info
        rate: 7.9
    })

    await dummyMovie1.setUser(dummyUser1);
    
}

module.exports = seedDB;