import { useState, useEffect } from "react";

import Header from "../header/Header";
import Menu from "../menu/Menu";
import Modal from '../modal/baseModal/Modal'
import AddCategory from "../modal/productsModal/AddCategory";
import AddItem from "../modal/productsModal/AddItem";

import {
    addOrEditCategory,
    getCategories,
    getItems,
    addOrEditItem,
    deleteCategory,
    deleteItem
} from "./ipcRendererUtils";

const orderOptions = [
    { label: "Nome", value: "name" },
    { label: "Maior Preço", value: "highestPrice" },
    { label: "Menor Preço", value: "lowestPrice" }
]

export default function Products() {

    const [items, setItems] = useState([])
    const [categories, setCategories] = useState([])
    const [isModalOpen, setIsModalOpen] = useState({})
    const [order, setOrder] = useState('')
    const [reload, setReload] = useState(false)

    useEffect(() => {
        getCategories((result) => {
            setCategories(result?.categories)

            getItems(order, (result) => {
                setItems(result?.items)
            })
        })
    }, [reload])

    // this mode object is responsible for share the functions 
    // in a short form for all componentes that's needs
    const mode = {
        name: 'Cardápio',
        textButton: 'Adicionar Categoria',

        // Function to Open Modal Category with 2 possibles modes
        // If params.addNew == true 'addNewCategory' || If params.addNew == false 'EditCategory'
        categoryModalOpen: (params) => setIsModalOpen({
            categoryModal: true, itemModal: false,
            params
        }),

        //function to Close Modal AddCategory
        categoryModalClose: () => setIsModalOpen({
            categoryModal: false, itemModal: false
        }),

        //function to Close Modal AddItem with 2 possibles modes
        // If args == true 'addNewItem' || If args == false 'EditItem'
        itemModalOpen: (params) => setIsModalOpen({
            itemModal: true, categoryModal: false,
            params
        }),
        //function to Close Modal AddItem
        itemModalClose: () => setIsModalOpen({
            itemModal: false, categoryModal: false
        }),

        // Here there's config for ordenations feat. //
        // first the order options, that you find above
        orderOptions: orderOptions,
        // the state is passed to menu.jsx as value for a select/options tag
        selectedOder: order,
        // and the function to set order e call a new render 
        // functions bring the data with the ordenation wished
        setOrderOptions: (e) => {
            setOrder(e.target.value)
            setReload(!reload)
        }, 

        // imported functions from ipcRendererUtils.js
        // each these imported function below, has a method in mode, with the same name
        addOrEditCategory: (transaction) => {
            addOrEditCategory(transaction, (result) => {
                setReload(!reload)
                mode.categoryModalClose()
            })
        },

        addOrEditItem: (transaction) => {
            addOrEditItem(transaction, (result) => {
                setReload(!reload)
                mode.itemModalClose()
            })
        },

        deleteCategory: (transaction) => {
            deleteCategory(transaction, (result) => {
                setReload(!reload)
            })
        },

        deleteItem: (transaction) => {
            deleteItem(transaction, (result) => {
                setReload(!reload)
            })
        },
    }

    // here I add two objects with functions and title, for use in the respective drop-down menu
    // this is sent to render and there is a map function to render each
    mode.dropDown = {
        category: [{
            title: 'Editar',
            function: mode.categoryModalOpen
        },
        {
            title: 'Excluir',
            function: mode.deleteCategory
        }],

        item: [{
            title: 'Editar',
            function: mode.itemModalOpen
        },
        {
            title: 'Excluir',
            function: mode.deleteItem
        }]
    }

    return (
        <div className="overflow-auto h-[100vh]">

            <Header
                mode={mode} />

            <Menu
                mode={mode}
                categories={categories}
                items={items} />

            <Modal // Modal AddCategory //
                isOpen={isModalOpen.categoryModal}
                onRequestClose={mode.categoryModalClose}
                style={{
                    margin: 'auto',
                    width: '600px',
                    height: '300px',
                    padding: 0,
                    border: 0,
                    borderRadius: '10px'
                }}>

                <AddCategory
                    mode={mode}
                    params={isModalOpen.params} />

            </Modal>

            <Modal // Modal AddItem //
                isOpen={isModalOpen.itemModal}
                onRequestClose={mode.itemModalClose}
                style={{
                    margin: 'auto',
                    width: '80%',
                    height: '80%',
                    padding: 0,
                    border: 0,
                    borderRadius: '10px'
                }}>

                <AddItem
                    mode={mode}
                    params={isModalOpen.params} />

            </Modal>

        </div>
    )
}
