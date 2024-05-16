const nock = require('nock');
const { calldependance } = require('./index'); // Remplacez par le chemin correct vers votre module

describe('calldependance function', () => {
    it('should return correct response for a valid action name', async () => {
        nock('https://testing-cours-118ff93ae024.herokuapp.com')
            .get('/calldependance?name=Matis')
            .reply(200, 'hello Matis');

        const response = await calldependance('Matis');
        expect(response).toBe('hello Matis');
    });

    it('should handle errors correctly', async () => {
        nock('https://testing-cours-118ff93ae024.herokuapp.com')
            .get('/calldependance?name=invalidName')
            .reply(500);

        await expect(calldependance('invalidName')).rejects.toThrow('Request failed with status code 500');
    });
});
