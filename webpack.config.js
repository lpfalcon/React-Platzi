const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const rulesForJavascript = {
    test: /\.(js|jsx)$/, //PARA QUE WEBPACK ENTIENDA EL ARCHIVO
    exclude: /node_modules/,
    loader: 'babel-loader',
    options: {
        presets: [ //configura el preset (pre-ajustes)
            [
                '@babel/preset-react',
                {
                    runtime: 'automatic' //si babel detecta React hace que no sea necesario importarlo (por defecto viene classic)
                }
            ]
        ]
    }
}
const rulesForHTLM = {
    test: /\.html$/,
    use: [{
        loader: 'html-loader'
    }]
}

const rulesForStyles = {
    test: /\.(css|scss)$/i,
    use: [
        "style-loader",
        "css-loader",
        "sass-loader"
    ],
}

const rulesForImage = {
    test: /\.(png|svg|jpg|gif)$/,
    type:'asset'
}
module.exports = {
    entry: './src/index.js', //PUNTO DE ENTRADA
    output: {
        path: path.resolve(__dirname, 'dist'), //CREA EL ARCHIVO EMPAQUETADO EN LA CARPETA DIST CON EL NOMBRE BUNDLE
        filename: 'bundle.js',
        publicPath: '/'
    },
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@components': path.resolve(__dirname, 'src/components/'),
            '@hooks': path.resolve(__dirname, 'src/hooks/'),
            '@containers': path.resolve(__dirname, 'src/containers/'),
            '@pages': path.resolve(__dirname, 'src/pages/'),
            '@styles': path.resolve(__dirname, 'src/styles/'),
            '@icons': path.resolve(__dirname, 'src/assets/icons/'),
            '@logos': path.resolve(__dirname, 'src/assets/logos/'),
            '@context': path.resolve(__dirname,'src/context'),
        }
    },
    module: { //PARA CONFIGURACIÓN DE LOADERS COMO BABEL
        rules: [rulesForJavascript, rulesForHTLM, rulesForStyles, rulesForImage]
    },
    plugins: [new HtmlWebpackPlugin({  // AÑADE FUNCIONALIDADES A WEBPACK (CREA AUTOMTICAMENTE UN ARCHIVO BASE PARA INYECTAR LOS SCRIPTS)
        template: './public/index.html',
        filename: './index.html'
    }), new MiniCssExtractPlugin({
        filename: '[name].css'
    }),],
    devServer: { //MANEJA CONFIGURACIÓN DE SERVIDOR DE DESARROLLO
        static: {
            directory: path.join(__dirname, 'dist')
        },
        port: 3000,
        open: true, // ABRE EL NAVEGADOR
        client: {
            overlay: true,// ABRE UN OVERLAY CON LOS ERRORES
        },
        compress: true,
        historyApiFallback: true
    }
}