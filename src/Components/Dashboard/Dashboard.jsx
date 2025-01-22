import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredWishList } from "../utilities/AddToWishListDb";
import { useEffect, useState } from "react";
import ListedBook from "../ListedBook/ListedBook";
const Dashboard = () => {
  const [wishList, setWishList] = useState([]);
  const allBooks = useLoaderData();
  useEffect(() => {
    const wishList = getStoredWishList();
    const wishListId = wishList.map((book) => parseInt(book));

    const wishListBooks = allBooks.filter((book) =>
      wishListId.includes(book.bookId)
    );

    setWishList(wishListBooks);
  }, []);
    
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Wish List Books</Tab>
          <Tab>Mark as Read books</Tab>
        </TabList>

        <TabPanel>
          <div>
              {
                wishList.map((book, idx) => <ListedBook 
                key={idx}
                book={book}
                ></ListedBook>)
              }
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Dashboard;
