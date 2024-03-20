import { useState, useEffect } from 'react'
import addImage from '../../../assets/img/addImage.png'
import convertToBlob from '../../../assets/js/convertToBlob.js'
import handleKeyDown from '../../../assets/js/tabForMoldalFunction.js'

export default function AddItem({ mode, params }) {
    /***********************************************************************
     * If addNew is true the title is set to 'Adicionar Item'              *
     * And TransactionType is set to 'addNewItem'                          *
     ***********************************************************************/
    const title = params?.addNew ? 'Adicionar Item' : 'Editar Item'
    const transactionType = params?.addNew ? 'addNewItem' : 'editItem'

    const [item, setItem] = useState({})
    const [previewImg, setPreviewImg] = useState('')

    useEffect(() => {

        if (params?.addNew === false) {
            const editableItem = {
                name: params.name,
                price: params.price,
                description: params.description,
            }
            setItem(editableItem)
        }
    }, [params])

    function handleChange(e) {
        const { name, value } = e.target;
        setItem((prevItem) => ({
            ...prevItem,
            [name]: value
        }))
    }

    function handleImage(e) {
        const file = e.target.files[0]
        setItem((prevItem) => ({
            ...prevItem,
            'photo': file.path
        }))
        const imgPreview = convertToBlob(file)
        setPreviewImg(imgPreview)
    }

    function addOrEditItem(e) {
        e.preventDefault()
        mode.addOrEditItem({
            transactionType,
            item,
            oldItem: params,
            category: params?.category
        })
    }

    return (
        <div className={`
        flex flex-col justify-center gap-14
        w-full h-full bg-zinc-800 pr-12
    `}>
            <h1 className={`
                text-center text-3xl
            `}>
                {title}
            </h1>

            <h1 className={`
                text-center text-3xl
            `}>
                Categoria {params?.category}
            </h1>

            <div className={`
                w-full flex justify-center
            `}>

                <div className={`
                    w-[30%] h-[200px] flex flex-col items-center
                    `}>

                    {!params?.photo && <img className='w-40 mb-2 rounded-sm h-40'
                        src={previewImg ? previewImg : addImage} />}

                    {params?.photo !== 0 && params?.photo && <img className='w-40 mb-2 rounded-sm h-40'
                        src={previewImg ? previewImg : convertToBlob(params?.photo)} />}

                    <label className={`
                    px-2 text-center bg-amber-600 rounded-sm w-3/6
                    hover:bg-amber-700 font-semibold
                    `} htmlFor="image">Adicionar Imagem</label>

                    <input onChange={handleImage}
                        accept='image/*'
                        className={` hidden
                    `} type="file" name="image" id="image" />
                </div>

                <div className={`
                    w-[60%] grow lg:grow-0
                `}>

                    <div className={`flex`}>

                        <label className={`shrink`}
                            htmlFor="itemName">Nome do Item: </label>
                        <input
                            defaultValue={params?.name ? params.name : ''}
                            name='name'
                            onKeyDown={handleKeyDown}
                            className={`ml-2 w-3/6 outline-none text-black p-0.5 shrink `}
                            id="itemName" type="text"
                            onChange={handleChange} />


                        <label
                            className={`ml-5 `}
                            htmlFor="itemValue">Valor: </label>
                        <input
                            defaultValue={params?.price ? params.price : ''}
                            name='price'
                            onKeyDown={handleKeyDown}
                            className={`w-20 ml-2 outline-none text-black p-0.5 grow`}
                            id="itemValue" type="number"
                            onChange={handleChange} />

                    </div>

                    <div className={`mt-5`}>
                        <label htmlFor="itemDescription">
                            Descrição:
                            <span className={`text-sm ml-2`}> (máx - 200 caracteres)</span>
                        </label>
                        <textarea
                            defaultValue={params?.description ? params.description : ''}
                            onKeyDown={handleKeyDown}
                            className={`w-full h-28 outline-none text-black p-2 mt-1`}
                            name="description" id="itemDescription"
                            onChange={handleChange}
                            maxLength={200}>
                        </textarea>

                    </div>
                </div>
            </div>

            <div className={`
                flex justify-center gap-5
                `}>

                <button
                    onClick={addOrEditItem}
                    onKeyDown={handleKeyDown}
                    className={`
                    px-3 py-1 bg-green-700 font-semibold rounded-sm
                    hover:bg-green-800
                `}>
                    Salvar
                </button>


                <button
                    onClick={mode.itemModalClose}
                    onKeyDown={handleKeyDown}
                    className={`
                    px-3 py-1 bg-red-700 font-semibold rounded-sm
                    hover:bg-red-800
                `}>
                    Cancelar
                </button>
            </div>

        </div>
    )
}