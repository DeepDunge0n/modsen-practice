module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends":[ "plugin:react/recommended",
                "eslint:recommended",
                "plugin:react/recommended",
                "plugin:react/jsx-runtime",
                "plugin:react-hooks/recommended",
                "plugin:import/recommended"
            ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/prop-types": "off",
        "no-undef": "off",
        "import/no-unresolved": "off"
    }
}
