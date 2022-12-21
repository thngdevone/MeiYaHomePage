import { Box, SimpleGrid } from "@chakra-ui/react";
import Product from "./product";

const ProductCategories = () => {
  return (
    <Box id="categories">
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={3}
        margin="30px"
      >
        <Product
          img="https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          category="Hardwood Flooring"
        />
        <Product
          img="https://images.pexels.com/photos/312029/pexels-photo-312029.jpeg?auto=compress&cs=tinysrgb&w=600"
          category="Laminated Flooring"
        />
        <Product
          img="https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&w=600"
          category="Engineered Flooring"
        />
        <Product
          img="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600"
          category="Vinyl Flooring"
        />
        <Product
          img="https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=600"
          category="Staircases"
        />
        <Product
          img="https://images.pexels.com/photos/3705529/pexels-photo-3705529.jpeg?auto=compress&cs=tinysrgb&w=600"
          category="Custom Staircases"
        />
      </SimpleGrid>
    </Box>
  );
};

export default ProductCategories;
