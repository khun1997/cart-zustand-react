import { useEffect, useState } from "react";
import { useProductsStore } from "../stores/useProductsStore";
import Header from "../HomeComponents/Header";
import Drawer from "../HomeComponents/Drawer";
import Cart from "../components/minicart/Cart";
import ProductLists from "../components/products/ProductLists";

const Home = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { products, isLoading, fetchData } = useProductsStore();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleCartIconClik = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <Header onCartIconClick={handleCartIconClik} />
      <div className="p-7">
        <Drawer isOpen={isDrawerOpen} onCartIconClick={handleCartIconClik}>
          <Cart />
        </Drawer>
        <div>
          {isLoading ? <h1>loading</h1> : <ProductLists products={products} />}
        </div>
      </div>
    </>
  );
};

export default Home;
