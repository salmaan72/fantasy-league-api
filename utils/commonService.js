import db from '../src/database/models';

export async function findOne({ model, where }) {
    const resp = await db[model].findOne({where});
    return resp;
}

export async function rawQuery({ query, queryType = 'select', replacements }) {
    let type;
    if(queryType.toLowerCase() === 'select') {
        type = db.sequelize.QueryTypes.SELECT;
    }
    const resp = await db.sequelize.query(query, {type, replacements});
    return resp;
}

export async function create({ model, body }) {
    const resp = await db[model].create(body);
    return resp;
}

export async function update({ model, body, options}) {
    const resp = await db[model].update(body, options);
    return resp;
}

export async function bulkCreate({ model, values }) {
    const resp = await db[model].bulkCreate(values);
    return resp;
}