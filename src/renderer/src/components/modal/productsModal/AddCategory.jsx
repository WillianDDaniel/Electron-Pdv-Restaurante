import { useState } from "react"

export default function AddCategory({ mode, params }) {
    
    /***********************************************************************
     * If addNew is true the title is set to 'Adicionar Categoria'         *
     * And TransactionType is set to 'addNewCategory'                      *
     ***********************************************************************/
    const title = params?.addNew ? 'Adicionar Categoria' : 'Editar Categoria'
    const transactionType = params?.addNew ? 'addNewCategory' : 'editCategory'

    const [category, setCategory] = useState('')

    function addOrEditCategory() {

        if (category !== '' || category === params.name) {
            mode.addOrEditCategory({
                transactionType,
                category,
                oldCategory: params
            })
        } else {
            mode.categoryModalClose()
        }
    }

    return (
        <div className={`
            flex flex-col justify-center gap-10
            w-full h-full bg-zinc-800
        `}>
            <h1 className={`
                w-full text-center text-2xl
            `}>
                {title}
            </h1>

            <div className={`
                w-full flex justify-center items-center gap-3
            `}>

                <label htmlFor="category">Nome da Categoria: </label>
                <input //params has a category name, pass in the dropdown when edit
                    defaultValue={params ? params.name : ''}
                    onChange={(e) => setCategory(e.target.value)}
                    className={`
                    outline-none text-black p-1
                `}
                    id="category" type="text" />

            </div>

            <div className={`w-full flex justify-center gap-5`}>

                <button
                    className={`px-3 bg-green-800 rounded-sm font-semibold`}
                    onClick={addOrEditCategory}>
                    Salvar
                </button>

                <button
                    className={`px-3 bg-red-700 rounded-sm font-semibold`}
                    onClick={mode.categoryModalClose}>
                    Cancelar
                </button>

            </div>
        </div>
    )
}