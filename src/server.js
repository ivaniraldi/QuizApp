const db = require('./utils/database');
const app = require('./app');

db.sync()
    .then(() => {
        console.log('Database connected');
        app.listen(3000, () => {
            console.log(`app running on port 3000`)
        });
    })
    .catch(error => console.log(error));