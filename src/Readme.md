# Requirements
- Pug
- Sass
- `pug-cli`

# Compiling & Editing

- Compiling CSS
    - `sass --watch style.scss style.css`
- Compiling Pug
    - `pug -w . -o ./html -P`

# Deploying
- Compile all source files, and move builds to the main directory.
- Include fonts and stylesheets manually(for now).