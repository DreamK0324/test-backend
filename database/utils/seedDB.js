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

    const dummyUser3 = await User.create({
        firstname: "A",
        lastname: "A",
        email: "test3@gmail.com"
    });

    const dummyUser4 = await User.create({
        firstname: "B",
        lastname: "B",
        email: "test4@gmail.com"
    });

    const dummyMovie1 = await Movie.create({
        title: "Initial D",
        // releaseDate: "2005-06-23",         // only date value
        releaseDate: new Date('2005-01-01'),  // date and time info
        rate: 7.9
    });

    const dummyMovie2 = await Movie.create({
        title: "Movie A",    
        releaseDate: new Date('2000-01-01'),  
        rate: 6.0
    });

    const dummyMovie3 = await Movie.create({
        title: "Movie B",    
        releaseDate: new Date('2000-01-01'),  
        rate: 6.0
    });

    await dummyMovie1.setUser(dummyUser1);
    await dummyMovie2.setUser(dummyUser3)
    
}

module.exports = seedDB;