module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": ['airbnb', "@meteorjs/eslint-config-meteor"],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "meteor"
    ],
    "rules": {
        "indent": [1,4],
        "linebreak-style": [
            0,
            "windows"
        ],
        "quotes": [
            "warn",
            "single"
        ],
        "semi": [
            "warn",
            "always"
        ],
        "space-in-parens": ["warn", "always"]
    }
};