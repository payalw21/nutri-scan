const ProductDetail = ({ foodData }) => {
  console.log("fooooood", foodData);
  //   console.log("foooooodNutri", foodData.nutrient_levels);
  return (
    foodData && (
      <div>
        <div>
          {/* <h1>{foodData.product_name}</h1> */}
          <p>Nutrient Levels:</p>
          <ul>
            {Object.entries(foodData.nutriments).map(([nutrient, level]) => (
              <li key={nutrient}>
                {nutrient} : {level}
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  );
};

export default ProductDetail;
