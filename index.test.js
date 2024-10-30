const { db } = require('./db');
const { Band, Musician, Song } = require('./index')

describe('Band, Musician, and Song Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await db.sync({ force: true });
    })

    test('can create a Band', async () => {
        const testBand = await Band.create({ name: "One Direction", genre: "POP"});
        expect(testBand.name).toBe('One Direction');
    })

    test('can create a Musician', async () => {
        const testMusician = await Musician.create({ name: "Tyler The Creator", genre: "RAP"});
        expect(testMusician.name).toBe('Tyler The Creator');
    })

    test('can create a Song', async () => {
        const testSong = await Song.create({ title: "Darling, I", year: 2024, length: 4});
        expect(testSong.title).toBe('Darling, I');
    })

    test('can update a Band', async () => {
        const testBand = await Band.create({ name: "One Direction", genre: "POP"});
        await testBand.update({name: "5 seconds of Summer"});
        expect(testBand.name).toBe('5 seconds of Summer');
    })

    test('can update a Musician', async () => {
        const testMusician = await Musician.create({ name: "Tyler The Creator", genre: "RAP"});
        await testMusician.update({name: "Kendrick Lamar"});
        expect(testMusician.name).toBe('Kendrick Lamar');
    })

    test('can update a Song', async () => {
        const testSong = await Song.create({ title: "Darling, I", year: 2024, length: 4});
        await testSong.update({year: "2025"});
        expect(testSong.year).toBe('2025');
    })

    test('can delete a Band', async () => {
        const testBand = await Band.create({ name: "One Direction", genre: "POP"});
        await testBand.destroy();

        const destroyedBand = await Band.findByPk(testBand.id);
        expect(destroyedBand).toBeNull();
    })

    test('can delete a Musician', async () => {
        const testMusician = await Musician.create({ name: "Tyler The Creator", genre: "RAP"});
        await testMusician.destroy();

        const destroyedMusician = await Musician.findByPk(testMusician.id);
        expect(destroyedMusician).toBeNull();
    })

    test('can delete a Song', async () => {
        const testSong = await Song.create({ title: "Darling, I", year: 2024, length: 4});
        await testSong.destroy();

        const destroyedSong = await Song.findByPk(testSong.id);
        expect(destroyedSong).toBeNull();
    })
})