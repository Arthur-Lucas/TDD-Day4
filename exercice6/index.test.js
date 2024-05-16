const nock = require('nock');
const { calldependance } = require('./index');

describe('calldependance function', () => {
    it('should return expected response for valid action name', async () => {
        const mockResponse = 'Expected response';

        nock('https://us-east1-mon-projet-test-gp6.cloudfunctions.net')
            .get('/TDD-deploy2/hotelGet?actionName=validAction')
            .reply(200, mockResponse);

        const result = await calldependance('validAction');
        expect(result).toBe(mockResponse); 
    });

    it('should handle errors correctly', async () => {
        nock('https://us-east1-mon-projet-test-gp6.cloudfunctions.net')
            .get('/TDD-deploy2/hotelGet?actionName=invalidAction')
            .reply(500);

        await expect(calldependance('invalidAction')).rejects.toThrow('Request failed with status code 500');
    });
});
