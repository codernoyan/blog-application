import { selectSort, selectedFilter } from "../../features/filters/filtersSlice";
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";

export default function Sidebar() {
  const { sortTitle, filterTitle } = useSelector((state) => state.filters);
  const dispatch = useDispatch();
  const [sort, setSort] = useState(sortTitle);

  const [filter, setFilter] = useState(filterTitle);

  const handleSort = (e) => {
    e.preventDefault();
    setSort(e.target.value)
    dispatch(selectSort(e.target.value))
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
    dispatch(selectedFilter(e.target.value))
  }

  // console.log(filter)

  return (
    <aside>
      <div className="sidebar-items">
        <div className="sidebar-content">
          <h4>Sort</h4>
          <select onChange={handleSort} name="sort" id="lws-sort" className="w-full max-w-[150px] border-2 rounded-md text-gray-500">
            <option value="">Default</option>
            <option value="newest">Newest</option>
            <option value="most_liked">Most Liked</option>
          </select>
        </div>
        <div className="sidebar-content">
          <h4>Filter</h4>
          <div className="radio-group">
            {/* handle filter on button click */}
            <div>
              <input onChange={handleFilter} type="radio" name="filter" id="lws-all" value="All"
                defaultChecked={filter === 'All'} className="radio" />
              <label htmlFor="lws-all">All</label>
            </div>
            <div>
              <input onChange={handleFilter} type="radio" name="filter" id="lws-saved" value="Saved" className="radio" checked={filter === 'Saved'} />
              <label htmlFor="lws-saved">Saved</label>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}