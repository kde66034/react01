import React from 'react';
import { useState, useEffect } from 'react';  // 리액트에서쓰는변수
import Header from '../layout/Header';
import Contents from '../layout/Contents';
import Footer from '../layout/Footer';
import Title from '../layout/Title';
import ReferCont from '../include/ReferCont';
import Contact from '../layout/Contact';

const Reference = () => {
  const [references, setReferences] = useState([]);

  useEffect(() => { 
    fetch("https://kde66034.github.io/react01/src/utils/cssReference.json")
      .then((response) => response.json())
      // .then((result) => console.log(result.cssRefer))
      .then((result) => setReferences(result.cssRefer))
      .catch((error) => console.log('error', error));
  }, []);

  return (
    <>
      <Header />
      <Contents>
        <Title title={["reference", "book"]} />
        <ReferCont references={references} />
        <Contact />
      </Contents>
      <Footer />
    </>
  )
}

export default Reference