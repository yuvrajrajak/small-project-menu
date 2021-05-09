import React from 'react';
import styled from 'styled-components'

const Menu = ({ items }) => {

  return (
    <Wrapper>
      <main className="section">
        {
          items.map((menuItem) => {
            const { id, title, img, desc, price } = menuItem;
            return (
              <section className="menu-item">
                <img src={img} alt={title} className='photo' />

                <div className="item-info">
                  <header>
                    <h4>{title}</h4>
                    <h4 className="price">${price}</h4>
                  </header>
                  <p className="item-text">{desc}</p>
                </div>
              </section>
            )
          })
        }
      </main>
    </Wrapper>
  )
};

const Wrapper = styled.section`

.section{
  width: 90vw;
  display: grid;
  gap: 3rem 2rem;
  grid-template-columns: 1fr 1fr;
}
.menu-item{
display: grid;
gap:1rem 1rem;
grid-template-columns: 225px 1fr;
margin-bottom: 1rem; 
}

.price{
  color: var(--clr-gold);
}

.photo{
  display:block;
  height: 175px;
  width: 100%;
  object-fit: cover;
  border-radius: 0.25rem;
  border: 5px solid var(--clr-gold);
}
.item-info{
  header{
    display: flex;
    justify-content: space-between;
    border-bottom: 0.5px dotted var(--clr-grey-5);
  }
}
.item-text{
  margin-bottom: 0;
  padding-top: 1rem;
}

`
export default Menu;
