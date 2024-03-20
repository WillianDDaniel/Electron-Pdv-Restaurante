import convertToBlob from "../../assets/js/convertToBlob.js";
import formatCurrency from "../../assets/js/formatCurrency.js";
import { truncateDescription } from "../../assets/js/truncateDescription.js";

import { HiDotsVertical } from "react-icons/hi";
import addImage from '../../assets/img/addImage.png'
import DropDown from "../dropDownMenu/DropDown.jsx";


export default function Menu({ mode, categories, items }) {
    return (
        <div className={`
        text-white w-full flex flex-col items-center category-custom
        `}>
            {categories.length === 0 &&
                <div className={`
                    mt-6 text-center w-[90%] border border-white p-5
                    rounded-md
                    `}>
                    Você ainda não tem nenhuma <strong>Categoria</strong> de items cadastrada. <br />
                    Cadastre sua primeira categoria para poder adicionar items ao cardápio!
                </div>
            }

            {categories?.map((category) => {

                return (
                    <div key={category.id}
                        className={`
                        border border-white w-[95%] my-3 rounded-md
                        `}>

                        <div className={`flex justify-between px-5`}>

                            <h1 className={`
                                mt-1
                            `}>
                                {category.name}
                            </h1>

                            <div className={`flex items-center`}>

                                <select className={`text-black px-2 text-base rounded-md`}
                                    value={mode.selectedOder} onChange={mode.setOrderOptions}>

                                    <option value="">Ordenar por</option>

                                    {mode.orderOptions.map((option, index) => (
                                        <option key={index} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}

                                </select>

                                <button
                                    // here params = true to add a new item
                                    onClick={() => {
                                        mode.itemModalOpen({
                                            category: category.name,
                                            addNew: true
                                        })
                                    }}
                                    className={`
                                px-2 bg-amber-500 m-2 rounded-md
                                `}>
                                    Adicionar Item
                                </button>

                                <DropDown
                                    params={category}
                                    mode={mode.dropDown.category}>
                                    <HiDotsVertical />
                                </DropDown>

                            </div>

                        </div>

                        <div className={`flex flex-wrap w-full gap-2 mb-2 ${items.length === 0 ? 'justify-center' : 'ml-2'}`}>

                            {items.length === 0 &&
                                <div className={`
                                    mt-6 text-center w-[95%] border border-white p-5
                                    rounded-md
                                    `}>
                                    Agora você pode cadastrar seu primeiro <strong>Item</strong> no cardápio.
                                </div>
                            }

                            {items?.filter((item) => item.category === category.name).map((item) => {
                                return (
                                    <div key={item.id}
                                        className="md:w-[49%] w-full h-32 border border-white flex rounded-sm">

                                        <div className={`h-full w-32 bg-white flex justify-center text-black items-center`}>
                                            <img className={` w-[95%] rounded-sm`}
                                                src={item.photo ? convertToBlob(item.photo) : addImage} />
                                        </div>

                                        <div className="w-custom">

                                            <div className={`px-3 pt-1 w-full h-6 flex justify-between items-center`}>
                                                <h1>
                                                    {item.name}
                                                </h1>

                                                <div className="pt-3">

                                                    <DropDown
                                                        params={item}
                                                        mode={mode.dropDown.item}
                                                    >
                                                        <HiDotsVertical />
                                                    </DropDown>

                                                </div>
                                            </div>

                                            <div className="w-full px-3 h-[75px] text-sm leading-4 flex items-center">
                                                {truncateDescription(item.description, 120)}
                                            </div>

                                            <div className="w-full h-6 px-3 text-base flex justify-end items-center pb-1 font-semibold">
                                                {formatCurrency(item.price)}
                                            </div>
                                        </div>

                                    </div>
                                )
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
