const getStoredWishList = () => {
    const wishListStr = localStorage.getItem("wish-list");
    if(wishListStr){
        const storedList = JSON.parse(wishListStr);
        return storedList;
    }
    else{
        return [];
    }
}
const addToTheWishList = (id) =>{
    const wishList = getStoredWishList();
    if(wishList.includes(id)){
        alert("This book is already added to the wish list")
    }
    else{
        wishList.push(id)
        const wishListStr = JSON.stringify(wishList);
        localStorage.setItem("wish-list", wishListStr)
    }
}
export {addToTheWishList, getStoredWishList};