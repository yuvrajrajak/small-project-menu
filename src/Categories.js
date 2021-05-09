import React from 'react';
import styled from 'styled-components'

const Categories = ({ categories, filterItems }) => {
  return (
    <Wrapper>
      <div className="btn-container">
        {
          categories.map((category, index) => {
            return (
              <button
                type="button"
                className="filter-btn"
                key={index}
                onClick={() => filterItems(category)}
              >
                {category}
              </button>
            )
          })
        }
      </div>
    </Wrapper>
  )
};

const Wrapper = styled.section`
.btn-container{
  display: flex;
  justify-content: center;
  margin-top: 4rem;
}

.filter-btn{
  margin: 0.5rem;
  padding: 0.25rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  border-color: transparent;
  cursor: pointer;
  text-transform: capitalize;
  background: var(--clr-gold);

}
.active{
  border: 2px solid #279AF1;
}
`

export default Categories;
