export function addOrEditCategory(transaction, callback) {
    window.electron.ipcRenderer.send('menu', transaction)

    window.electron.ipcRenderer.once('menu-result', (event, result) => {
        callback(result);
    })
}

export function getCategories(callback) {
    const transaction = { transactionType: 'getCategories' };
    
    window.electron.ipcRenderer.send('menu', transaction);

    window.electron.ipcRenderer.once('menu-categories', (event, result) => {
        callback(result)
    })
}

export function getItems(order, callback) {
    const transaction = { transactionType: 'getItems', ordernation: order };
    
    window.electron.ipcRenderer.send('menu', transaction);

    window.electron.ipcRenderer.once('menu-items', (event, result) => {
        callback(result)
    })
}

export function addOrEditItem(transaction, callback) {
    window.electron.ipcRenderer.send('menu', transaction)

    window.electron.ipcRenderer.once('menu-result', (event, result) => {
         callback(result)
    })
}

export function deleteCategory(transaction, callback) {
    
    transaction.transactionType = 'deleteCategory'

    window.electron.ipcRenderer.send('menu', transaction)

    window.electron.ipcRenderer.once('menu-result', (event, result) => {
         callback(result)
    })
}

export function deleteItem(transaction, callback) {
    
    transaction.transactionType = 'deleteItem'

    window.electron.ipcRenderer.send('menu', transaction)

    window.electron.ipcRenderer.once('menu-result', (event, result) => {
         callback(result)
    })
}



