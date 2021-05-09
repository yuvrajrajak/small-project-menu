import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
import styled from 'styled-components'
const allCategories = ['all', ...new Set(items.map((item) => item.category))]


function App() {

  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  }

  return (
    <Wrapper>
      <section className="section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.section`
.section{
width: 80vw;
margin: 0 auto;
margin-top: 5rem;
}
.title{
  text-align: center;
  margin-top: 5rem;
}

`

export default App;
