import './filter.scss'

function Filter() {
  const location_list = ['Digha','Puri','Darjeeling'];
  const popularity_selection_list = ['pupolarity','new  trends','offers','price low to high','price high to low'];
  const budget_selection_list = ['10k-20k','20k-30k','30k-50k']
  return (
    <>
      <section className="filter">
        <ul>
          <li>location:&emsp;
            <select>
              <option value="">select option</option>
                {location_list.map((e) =>
                <option key={e}>{e}</option>
                )}
            </select>
          </li>
 
          <li>popularity:&emsp;
          <select>
              <option value="">select option</option>
                {popularity_selection_list.map((e) =>
                <option key={e}>{e}</option>
                )}
            </select>
          </li>

          <li>budget:&emsp;
          <select>
              <option value="">select option</option>
                {budget_selection_list.map((e) =>
                <option key={e}>{e}</option>
                )}
            </select>
          </li>
        </ul>
      </section>
    </>
  )
}

export default Filter
