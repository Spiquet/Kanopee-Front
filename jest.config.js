module.exports = {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['jest-preset-angular'],
    coverageDirectory: '<rootDir>/coverage',
    moduleNameMapper: {
        '@core/(.*)': '<rootDir>/src/app/core/$1',
        '@ui/(.*)': '<rootDir>/src/app/ui/$1',
        '@features/(.*)': '<rootDir>/src/app/features/$1',
        autoSpy: '<rootDir>/src/tests/auto-spy',
    },
};
