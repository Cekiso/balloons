module.exports = (pool, validColors) => {


    // insert valid colors into the database here




    async function getValidColors(intake) {
        const sql = await pool.query(`SELECT * FROM validcolor  WHERE popular=$1`, [intake])
        if (sql.rows.lenght == 0) {
            await pool.query(`INSERT INTO validcolor (popular) value ($1)`, [intake])
        }
    }

    async function add() {
        const getsql = await pool.query(`SELECT popular FROM validcolor`);
        return getsql.rows;
    }

    function requestColor(color) {

    }

    function colorCount(color) {

    }

    function getInvalidColors() {

    }

    function allColors() {

    }

    return {
        getValidColors,
        requestColor,
        colorCount,
        getInvalidColors,
        allColors,
        add
    }
}