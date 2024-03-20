import knexfile from '../../assets/knexfile.js';
import knex from 'knex';
import { converterImgToBlob } from './convertPathImgToBuffer.js'

const db = knex(knexfile);

export async function getCategories() {
    try {
        const categories = await db('category').select('*');
        return { success: true, categories };
    } catch (error) {
        console.log(error);
        return { success: false, error };
    }
}

export async function getItems(ordernation) {
    let items;

    try {
        if (ordernation === 'name') {
            items = await db('products').select('*').orderBy('name', 'asc')

        } else if (ordernation === 'highestPrice') {
            items = await db('products').select('*').orderBy('price', 'desc')

        } else if (ordernation === 'lowestPrice') {
            items = await db('products').select('*').orderBy('price', 'asc')

        } else {
            items = await db('products').select('*')
        }
        return { success: true, items };

    } catch (error) {
        console.log(error);
        return { success: false, error };
    }
}

export async function addNewCategory(name) {
    try {
        await db('category').insert({ name: name });
        console.log('success')

        return { success: true }

    } catch (error) {
        console.log(error)
        return { success: false, error }
    }
}

export async function editCategoryName(transaction) {

    try {
        // here change the name of category in the table category
        await db('category')
        .where({ id: transaction.oldCategory.id })
        .update({name: transaction.category})

        // here also change the name of category in the table products
        await db('products')
        .where({category: transaction.oldCategory.name})
        .update({category: transaction.category})

        console.log('success')

        return { success: true }

    } catch (error) {
        console.log(error)
        return { success: false, error }
    }
}

export async function addNewItem(item) {

    if(item.photo) {
        const photoBlob = await converterImgToBlob(item.photo);
        item.photo = photoBlob
    } else {
        item.photo = false
    }

    try {
        await db('products').insert(item)
        console.log('success')

        return { success: true };
    } catch (error) {
        console.log(error);
        return { success: false, error };
    }
}

export async function deleteCategory(transaction) {
    try {

        await db('category')
        .where({id: transaction.id})
        .delete()

        await db('products')
        .where({category: transaction.name})
        .delete()

        return { success: true };
    } catch (error) {
        console.log(error);
        return { success: false, error };
    }
}

export async function deleteItem(transaction) {
    try {

        await db('products')
        .where({id: transaction.id})
        .delete()

        return { success: true };
    } catch (error) {
        console.log(error);
        return { success: false, error };
    }
}

export async function editItem(transaction) {
    const item = transaction.item

    if(item.photo) {
        const photoBlob = await converterImgToBlob(item.photo);
        item.photo = photoBlob
    }

    try {
        await db('products')
        .where({id: transaction.oldItem.id})
        .update(item)

        return { success: true };
    } catch (error) {
        console.log(error);
        return { success: false, error };
    }
}