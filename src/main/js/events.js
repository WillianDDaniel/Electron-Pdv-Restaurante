import { ipcMain } from 'electron';

import { 
    getCategories,
    addNewCategory,
    getItems,
    addNewItem,
    editCategoryName,
    deleteCategory,
    deleteItem,
    editItem
} from './dbConnections';

ipcMain.on('menu', async (event, transaction) => {
    let result;

    switch (transaction.transactionType) {
        case 'getCategories':
            result = await getCategories();
            event.reply(result.success ? 'menu-categories' : 'menu-result', result);
            break;

        case 'getItems':
            result = await getItems(transaction.ordernation);
            event.reply(result.success ? 'menu-items' : 'menu-result', result);
            break;

        case 'deleteCategory':
            result = await deleteCategory(transaction);
            event.reply('menu-result', result.success ? 'Category deleted successfully' : 'Error deleting category: ' + result.error);
            break;

        case 'addNewCategory':
            result = await addNewCategory(transaction.category);
            event.reply('menu-result', result.success ? 'Category added successfully' : 'Error adding category: ' + result.error);
            break;

        case 'editCategory':
            result = await editCategoryName(transaction);
            event.reply('menu-result', result.success ? 'Category edited successfully' : 'Error editing category: ' + result.error);
            break;

        case 'addNewItem':
            const item = { ...transaction.item, category: transaction.category };
            result = await addNewItem(item);
            event.reply('menu-result', result.success ? 'Item added successfully' : 'Error adding item: ' + result.error);
            break;

        case 'deleteItem':
            result = await deleteItem(transaction);
            event.reply('menu-result', result.success ? 'Item added successfully' : 'Error adding item: ' + result.error);
            break;

        case 'editItem':
            result = await editItem(transaction);
            event.reply('menu-result', result.success ? 'Item added successfully' : 'Error adding item: ' + result.error);
            break;

        default:
            event.reply('menu-result', 'Unknown transaction type');
            break;
    }
})
// ipcMain.on('menu', async (event, transaction) => {

//     if (transaction.transactionType === 'getCategories') {
//         const result = await getCategories();

//         if (result.success) {
//             event.reply('menu-categories', result)
//         } else {
//             event.reply('menu-result', 'Error getting category: ' + result.error)
//         }
//     }

//     if (transaction.transactionType === 'getItems') {
//         const result = await getItems();

//         if (result.success) {
//             event.reply('menu-items', result)
//         } else {
//             event.reply('menu-result', 'Error getting category: ' + result.error)
//         }
//     }

//     if (transaction.transactionType === 'deleteCategory') {
//         const result = await deleteCategory(transaction);

//         if (result.success) {
//             event.reply('menu-result', result)
//         } else {
//             event.reply('menu-result', 'Error getting category: ' + result.error)
//         }
//     }

//     if (transaction.transactionType === 'addNewCategory') {

//         const result = await addNewCategory(transaction.category);

//         if (result.success) {
//             event.reply('menu-result', 'Category added successfully')
//         } else {
//             event.reply('menu-result', 'Error adding category: ' + result.error)
//         }
//     }

//     if (transaction.transactionType === 'editCategory') {

//         const result = await editCategoryName(transaction);

//         if (result.success) {
//             event.reply('menu-result', 'Category added successfully')
//         } else {
//             event.reply('menu-result', 'Error adding category: ' + result.error)
//         }
//     }

//     if (transaction.transactionType === 'addNewItem') {

//         const item = {
//             ...transaction.item,
//             category: transaction.category
//         }
//         const result = await addNewItem(item);

//         if (result.success) {
//             event.reply('menu-result', result)
//         } else {
//             event.reply('menu-result', 'Error adding item: ' + result.error)
//         }
//     }
// })