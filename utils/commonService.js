import db from '../src/database/models';

export async function test() {
    console.log(db);
}

export async function findById() {

}

export async function rawQuery({ query, queryType = 'select', replacements }) {
    let type;
    if(queryType.toLowerCase() === 'select') {
        type = db.sequelize.QueryTypes.SELECT;
    }
    const res = await db.sequelize.query(query, {type, replacements});
    return res;
}
