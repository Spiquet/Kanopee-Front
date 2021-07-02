/* eslint-disable prettier/prettier */
module.exports = {
    preset: 'jest-preset-angular/',
    setupFilesAfterEnv: ['jest-preset-angular/', '<rootDir>/src/tests/jest-global-mocks.ts'],
    coverageDirectory: '<rootDir>/coverage',
    moduleNameMapper: {
        'autoSpy': '<rootDir>/src/tests/auto-spy',
    },
};
