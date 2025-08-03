import { SearchIcon } from "lucide-react"

const Search = ({search, setSearch}) => {
    return(
        <div>
            <div className="flex justify-self-center p-2 mt-4 rounded-full w-xl bg-[#273d71]">
                <SearchIcon className="mr-4" />

                <input
                  className="outline-none focus:outline-none w-full mr-4"
                  type="text"
                  placeholder=" Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)} 
                />

            </div>
        </div>
    )
}

export default Search