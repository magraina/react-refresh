module.exports = {
	"testRegex": "((\\.|/*.)(test))\\.jsx?$",
	testEnvironment: 'jsdom',
	"moduleNameMapper": {
		"\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
	}
}