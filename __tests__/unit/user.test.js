const bcrypt = require('bcryptjs');

const { User } = require('../../src/app/models');
const truncate = require('../utils/truncate');

describe('user', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should encrypt user password', async () => {
    const user = await User.create({
      name: 'jest tests',
      email: 'test@jest.com',
      password: 'password',
    });

    const compareHash = await bcrypt.compare('password', user.password_hash);

    expect(compareHash).toBe(true);
  });
});
