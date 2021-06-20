module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '.+\\.(ts|tsx)$': 'ts-jest',
    '.+\\.(css|styl|less|sass|scss)$': 'jest-transform-stub',
    '.+\\.(jpg|jpeg|png|gif|webp|svg)$': 'jest-transform-stub'
  },
  setupFilesAfterEnv: [
    '<rootDir>/src/setupTests.ts'
  ]
};
