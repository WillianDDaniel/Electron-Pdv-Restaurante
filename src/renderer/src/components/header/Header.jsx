export default function Header({ mode }) {

    return (
        <div className=" flex w-full justify-center">
            <div className={`
            flex justify-between items-center
            border border-white w-5/6 h-14
            rounded-md mb-1
            `}>

                <h1 className={`
                    text-white font-semibold mx-3
                `}>
                    {mode.name}
                </h1>

                <button className={`
                    text-white font-semibold mx-3
                    px-2 bg-amber-500 rounded-md
                `}
                    // param true to add new category
                    onClick={() => mode.categoryModalOpen({addNew: true})}>

                    {mode.textButton}
                </button>

            </div>
        </div>
    )
}