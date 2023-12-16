// putting all our API calls in a giant dictionary/object

export const serverCalls = {
  getShop: async () => {
    //     // api call consist of 1-4 things
    //     // 1. url (required)
    //     // 2. method (optional it will default to GET)
    //     // 3. headers (optional but usually there) authentication type & type of data
    //     // 4. body (optional usually only on a POST, PUT and sometimes DELETE)

    const url =
      "https://kohls.p.rapidapi.com/products/list?limit=24&offset=1&dimensionValueID=AgeAppropriate%3ATeens";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "dfad11e065mshbbe169dd7a2b0f0p17c3d6jsnd5d0af09f49f",
        "X-RapidAPI-Host": "kohls.p.rapidapi.com",
      },
    };

    // const url =
    //   "https://kohls.p.rapidapi.com/products/list?limit=24&offset=1&dimensionValueID=AgeAppropriate%3ATeens";
    // const options = {
    //   method: "GET",
    //   headers: {
    //     "X-RapidAPI-Key": "3e1ab3d236msh19f20543d4db513p1a50edjsn0b7b7c241b6b",
    //     "X-RapidAPI-Host": "kohls.p.rapidapi.com",
    //   },
    // };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      const shop = result.payload.products;
      console.log(shop);
      let productDetails = [];
      for (let product of shop) {
        let prodInfo = {
          title: product.productTitle,
          img: product.image.url,
          price: product.prices[0]?.regularPrice?.minPrice
            ? product.prices[0].regularPrice.minPrice
            : "N/A",
          saleprice: product.prices[0]?.salePrice?.minPrice
            ? product.prices[0].salePrice.minPrice
            : "N/A",
          rating: product.rating.avgRating,
        };
        productDetails.push(prodInfo);
      }

      return productDetails;
    } catch (error) {
      console.error(error);
    }
  },
};
