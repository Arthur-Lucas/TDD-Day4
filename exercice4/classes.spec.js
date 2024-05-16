const User = require('./classes')

describe("The isValid function", () => {
    it("should call validateName, validateEmail, validatePassword functions when isValid fn is called", () => {
      // arrange
      const user = new User();
  
      jest.spyOn(user, 'validateName');
      jest.spyOn(user, 'validateEmail');
      jest.spyOn(user, 'validatePassword');
  
      // action
      user.isValid();
  
      // assertion
      expect(user.validatePassword).toHaveBeenCalled();
      expect(user.validateName).toHaveBeenCalled();
      expect(user.validateEmail).toHaveBeenCalled();
    });
  });